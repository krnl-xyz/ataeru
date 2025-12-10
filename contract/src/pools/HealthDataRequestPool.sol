// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";

contract HealthDataRequestPool is AccessControlUpgradeable, OwnableUpgradeable, UUPSUpgradeable {
    bytes32 public constant VERIFIER_ROLE = keccak256("VERIFIER_ROLE");
    bytes32 public constant POOL_ADMIN_ROLE = keccak256("POOL_ADMIN_ROLE");
    bytes32 public constant DATA_CUSTODIAN_ROLE = keccak256("DATA_CUSTODIAN_ROLE");

    uint256 public constant VERIFICATION_THRESHOLD = 2;
    uint256 public constant REQUEST_EXPIRY_PERIOD = 7 days;
    uint256 public constant ACCESS_DURATION = 30 days;

    address public mainPoolContract;
    address public synNFTContract;
    bytes32 public poolId;

    enum RequestType {
        READ,
        SHARE,
        TRANSFER,
        REVOKE
    }

    enum RequestStatus {
        PENDING,
        APPROVED,
        REJECTED,
        EXPIRED,
        REVOKED
    }

    enum AccessLevel {
        NONE,
        VIEW_ONLY,
        LIMITED,
        FULL
    }

    struct DataAccessRequest {
        bytes32 requestId;
        uint256 tokenId;
        address requester;
        address dataOwner;
        bytes32 hospitalId;
        RequestType requestType;
        AccessLevel accessLevel;
        uint256 submittedAt;
        uint256 expiresAt;
        uint256 accessGrantedUntil;
        RequestStatus status;
        mapping(address => bool) verifications;
        uint256 verificationCount;
        string purpose;
        string justification;
        bool ownerConsent;
    }

    struct AccessGrant {
        bytes32 grantId;
        bytes32 requestId;
        address grantee;
        uint256 tokenId;
        AccessLevel accessLevel;
        uint256 grantedAt;
        uint256 expiresAt;
        bool isActive;
    }

    mapping(bytes32 => DataAccessRequest) public dataAccessRequests;
    mapping(bytes32 => AccessGrant) public accessGrants;
    mapping(uint256 => bytes32[]) public tokenToRequests;
    mapping(address => bytes32[]) public requesterToRequests;
    mapping(address => bytes32[]) public ownerToRequests;

    bytes32[] public pendingRequests;
    bytes32[] public activeGrants;

    event DataAccessRequested(
        bytes32 indexed requestId, uint256 indexed tokenId, address indexed requester, RequestType requestType
    );

    event RequestVerified(bytes32 indexed requestId, address indexed verifier, uint256 verificationCount);

    event OwnerConsentGranted(bytes32 indexed requestId, address indexed dataOwner);

    event AccessGranted(bytes32 indexed grantId, bytes32 indexed requestId, address indexed grantee, uint256 tokenId);

    event AccessRevoked(bytes32 indexed grantId, string reason);

    event RequestRejected(bytes32 indexed requestId, string reason);

    function initialize(address _mainPool, address _synNFTContract, bytes32 _poolId) public initializer {
        __AccessControl_init();
        __Ownable_init(msg.sender);
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(POOL_ADMIN_ROLE, msg.sender);
        mainPoolContract = _mainPool;
        synNFTContract = _synNFTContract;
        poolId = _poolId;
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyRole(DEFAULT_ADMIN_ROLE) {}

    function submitDataAccessRequest(
        uint256 _tokenId,
        address _dataOwner,
        bytes32 _hospitalId,
        RequestType _requestType,
        AccessLevel _accessLevel,
        string memory _purpose,
        string memory _justification
    ) external returns (bytes32) {
        require(bytes(_purpose).length > 0, "Purpose required");
        require(bytes(_justification).length > 0, "Justification required");

        bytes32 requestId = keccak256(abi.encodePacked(_tokenId, msg.sender, block.timestamp));

        DataAccessRequest storage request = dataAccessRequests[requestId];
        request.requestId = requestId;
        request.tokenId = _tokenId;
        request.requester = msg.sender;
        request.dataOwner = _dataOwner;
        request.hospitalId = _hospitalId;
        request.requestType = _requestType;
        request.accessLevel = _accessLevel;
        request.submittedAt = block.timestamp;
        request.expiresAt = block.timestamp + REQUEST_EXPIRY_PERIOD;
        request.status = RequestStatus.PENDING;
        request.verificationCount = 0;
        request.purpose = _purpose;
        request.justification = _justification;
        request.ownerConsent = false;

        tokenToRequests[_tokenId].push(requestId);
        requesterToRequests[msg.sender].push(requestId);
        ownerToRequests[_dataOwner].push(requestId);
        pendingRequests.push(requestId);

        emit DataAccessRequested(requestId, _tokenId, msg.sender, _requestType);

        return requestId;
    }

    function grantOwnerConsent(bytes32 _requestId) external {
        DataAccessRequest storage request = dataAccessRequests[_requestId];
        require(request.dataOwner == msg.sender, "Not data owner");
        require(request.status == RequestStatus.PENDING, "Request not pending");
        require(block.timestamp < request.expiresAt, "Request expired");

        request.ownerConsent = true;

        emit OwnerConsentGranted(_requestId, msg.sender);
    }

    function verifyDataAccessRequest(bytes32 _requestId) external onlyRole(VERIFIER_ROLE) {
        DataAccessRequest storage request = dataAccessRequests[_requestId];
        require(request.status == RequestStatus.PENDING, "Request not pending");
        require(block.timestamp < request.expiresAt, "Request expired");
        require(!request.verifications[msg.sender], "Already verified");
        require(request.ownerConsent, "Owner consent required");

        request.verifications[msg.sender] = true;
        request.verificationCount++;

        emit RequestVerified(_requestId, msg.sender, request.verificationCount);

        if (request.verificationCount >= VERIFICATION_THRESHOLD) {
            approveAccessRequest(_requestId);
        }
    }

    function approveAccessRequest(bytes32 _requestId) internal {
        DataAccessRequest storage request = dataAccessRequests[_requestId];
        request.status = RequestStatus.APPROVED;
        request.accessGrantedUntil = block.timestamp + ACCESS_DURATION;

        bytes32 grantId = createAccessGrant(_requestId);

        removePendingRequest(_requestId);

        emit AccessGranted(grantId, _requestId, request.requester, request.tokenId);
    }

    function createAccessGrant(bytes32 _requestId) internal returns (bytes32) {
        DataAccessRequest storage request = dataAccessRequests[_requestId];

        bytes32 grantId = keccak256(abi.encodePacked(_requestId, block.timestamp));

        accessGrants[grantId] = AccessGrant({
            grantId: grantId,
            requestId: _requestId,
            grantee: request.requester,
            tokenId: request.tokenId,
            accessLevel: request.accessLevel,
            grantedAt: block.timestamp,
            expiresAt: request.accessGrantedUntil,
            isActive: true
        });

        activeGrants.push(grantId);

        return grantId;
    }

    function revokeAccess(bytes32 _grantId, string memory _reason) external {
        AccessGrant storage grant = accessGrants[_grantId];
        DataAccessRequest storage request = dataAccessRequests[grant.requestId];

        require(msg.sender == request.dataOwner || hasRole(POOL_ADMIN_ROLE, msg.sender), "Unauthorized");
        require(grant.isActive, "Grant not active");

        grant.isActive = false;
        request.status = RequestStatus.REVOKED;

        emit AccessRevoked(_grantId, _reason);
    }

    function rejectRequest(bytes32 _requestId, string memory _reason) external onlyRole(POOL_ADMIN_ROLE) {
        DataAccessRequest storage request = dataAccessRequests[_requestId];
        require(request.status == RequestStatus.PENDING, "Request not pending");

        request.status = RequestStatus.REJECTED;

        removePendingRequest(_requestId);

        emit RequestRejected(_requestId, _reason);
    }

    function removePendingRequest(bytes32 _requestId) internal {
        for (uint256 i = 0; i < pendingRequests.length; i++) {
            if (pendingRequests[i] == _requestId) {
                pendingRequests[i] = pendingRequests[pendingRequests.length - 1];
                pendingRequests.pop();
                break;
            }
        }
    }

    function getRequestDetails(bytes32 _requestId)
        external
        view
        returns (
            uint256 tokenId,
            address requester,
            address dataOwner,
            RequestType requestType,
            AccessLevel accessLevel,
            RequestStatus status,
            uint256 verificationCount,
            bool ownerConsent
        )
    {
        DataAccessRequest storage request = dataAccessRequests[_requestId];
        return (
            request.tokenId,
            request.requester,
            request.dataOwner,
            request.requestType,
            request.accessLevel,
            request.status,
            request.verificationCount,
            request.ownerConsent
        );
    }

    function getAccessGrant(bytes32 _grantId)
        external
        view
        returns (
            address grantee,
            uint256 tokenId,
            AccessLevel accessLevel,
            uint256 grantedAt,
            uint256 expiresAt,
            bool isActive
        )
    {
        AccessGrant memory grant = accessGrants[_grantId];
        return (grant.grantee, grant.tokenId, grant.accessLevel, grant.grantedAt, grant.expiresAt, grant.isActive);
    }

    function isAccessActive(bytes32 _grantId) external view returns (bool) {
        AccessGrant memory grant = accessGrants[_grantId];
        return grant.isActive && block.timestamp < grant.expiresAt;
    }

    function getPendingRequests() external view returns (bytes32[] memory) {
        return pendingRequests;
    }

    function getTokenRequests(uint256 _tokenId) external view returns (bytes32[] memory) {
        return tokenToRequests[_tokenId];
    }

    function getRequesterRequests(address _requester) external view returns (bytes32[] memory) {
        return requesterToRequests[_requester];
    }

    function addVerifier(address _verifier) external onlyRole(POOL_ADMIN_ROLE) {
        _grantRole(VERIFIER_ROLE, _verifier);
    }

    function addDataCustodian(address _custodian) external onlyRole(POOL_ADMIN_ROLE) {
        _grantRole(DATA_CUSTODIAN_ROLE, _custodian);
    }
}

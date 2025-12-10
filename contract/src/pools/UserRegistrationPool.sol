// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";

contract UserRegistrationPool is AccessControlUpgradeable, OwnableUpgradeable, UUPSUpgradeable {
    bytes32 public constant VERIFIER_ROLE = keccak256("VERIFIER_ROLE");
    bytes32 public constant POOL_ADMIN_ROLE = keccak256("POOL_ADMIN_ROLE");

    uint256 public constant VERIFICATION_THRESHOLD = 2;
    uint256 public constant REQUEST_EXPIRY_PERIOD = 3 days;

    address public mainPoolContract;
    bytes32 public poolId;

    enum RequestStatus {
        PENDING,
        APPROVED,
        REJECTED,
        EXPIRED
    }

    struct RegistrationRequest {
        bytes32 requestId;
        address userAddress;
        string publicKey;
        bytes32 identityHash;
        uint256 submittedAt;
        uint256 expiresAt;
        RequestStatus status;
        mapping(address => bool) verifications;
        uint256 verificationCount;
        string metadata;
    }

    mapping(bytes32 => RegistrationRequest) public registrationRequests;
    mapping(address => bytes32) public userToRequest;
    mapping(address => bool) public registeredUsers;

    bytes32[] public pendingRequests;

    event RegistrationRequested(bytes32 indexed requestId, address indexed userAddress, string publicKey);

    event RequestVerified(bytes32 indexed requestId, address indexed verifier, uint256 verificationCount);

    event RegistrationApproved(bytes32 indexed requestId, address indexed userAddress);

    event RegistrationRejected(bytes32 indexed requestId, address indexed userAddress, string reason);

    function initialize(address _mainPool, bytes32 _poolId) public initializer {
        __AccessControl_init();
        __Ownable_init(msg.sender);
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(POOL_ADMIN_ROLE, msg.sender);
        mainPoolContract = _mainPool;
        poolId = _poolId;
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyRole(DEFAULT_ADMIN_ROLE) {}

    function submitRegistrationRequest(string memory _publicKey, bytes32 _identityHash, string memory _metadata)
        external
        returns (bytes32)
    {
        require(!registeredUsers[msg.sender], "User already registered");
        require(userToRequest[msg.sender] == bytes32(0), "Request already submitted");
        require(bytes(_publicKey).length > 0, "Public key required");

        bytes32 requestId = keccak256(abi.encodePacked(msg.sender, _publicKey, block.timestamp));

        RegistrationRequest storage request = registrationRequests[requestId];
        request.requestId = requestId;
        request.userAddress = msg.sender;
        request.publicKey = _publicKey;
        request.identityHash = _identityHash;
        request.submittedAt = block.timestamp;
        request.expiresAt = block.timestamp + REQUEST_EXPIRY_PERIOD;
        request.status = RequestStatus.PENDING;
        request.verificationCount = 0;
        request.metadata = _metadata;

        userToRequest[msg.sender] = requestId;
        pendingRequests.push(requestId);

        emit RegistrationRequested(requestId, msg.sender, _publicKey);

        return requestId;
    }

    function verifyRegistrationRequest(bytes32 _requestId) external onlyRole(VERIFIER_ROLE) {
        RegistrationRequest storage request = registrationRequests[_requestId];
        require(request.status == RequestStatus.PENDING, "Request not pending");
        require(block.timestamp < request.expiresAt, "Request expired");
        require(!request.verifications[msg.sender], "Already verified");

        request.verifications[msg.sender] = true;
        request.verificationCount++;

        emit RequestVerified(_requestId, msg.sender, request.verificationCount);

        if (request.verificationCount >= VERIFICATION_THRESHOLD) {
            approveRegistration(_requestId);
        }
    }

    function approveRegistration(bytes32 _requestId) internal {
        RegistrationRequest storage request = registrationRequests[_requestId];
        request.status = RequestStatus.APPROVED;
        registeredUsers[request.userAddress] = true;

        removePendingRequest(_requestId);

        emit RegistrationApproved(_requestId, request.userAddress);
    }

    function rejectRegistration(bytes32 _requestId, string memory _reason) external onlyRole(POOL_ADMIN_ROLE) {
        RegistrationRequest storage request = registrationRequests[_requestId];
        require(request.status == RequestStatus.PENDING, "Request not pending");

        request.status = RequestStatus.REJECTED;
        delete userToRequest[request.userAddress];

        removePendingRequest(_requestId);

        emit RegistrationRejected(_requestId, request.userAddress, _reason);
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

    function getRequestStatus(bytes32 _requestId)
        external
        view
        returns (address userAddress, RequestStatus status, uint256 verificationCount, uint256 expiresAt)
    {
        RegistrationRequest storage request = registrationRequests[_requestId];
        return (request.userAddress, request.status, request.verificationCount, request.expiresAt);
    }

    function getPendingRequests() external view returns (bytes32[] memory) {
        return pendingRequests;
    }

    function isUserRegistered(address _user) external view returns (bool) {
        return registeredUsers[_user];
    }

    function addVerifier(address _verifier) external onlyRole(POOL_ADMIN_ROLE) {
        _grantRole(VERIFIER_ROLE, _verifier);
    }

    function removeVerifier(address _verifier) external onlyRole(POOL_ADMIN_ROLE) {
        _revokeRole(VERIFIER_ROLE, _verifier);
    }
}

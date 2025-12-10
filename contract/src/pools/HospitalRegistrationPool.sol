// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";

contract HospitalRegistrationPool is AccessControlUpgradeable, OwnableUpgradeable, UUPSUpgradeable {
    bytes32 public constant VERIFIER_ROLE = keccak256("VERIFIER_ROLE");
    bytes32 public constant POOL_ADMIN_ROLE = keccak256("POOL_ADMIN_ROLE");
    bytes32 public constant REGULATORY_ROLE = keccak256("REGULATORY_ROLE");

    uint256 public constant VERIFICATION_THRESHOLD = 3; // Higher threshold for hospitals
    uint256 public constant REQUEST_EXPIRY_PERIOD = 7 days;
    uint256 public constant REVIEW_PERIOD = 14 days;

    address public mainPoolContract;
    address public hospitalContract;
    bytes32 public poolId;

    enum RequestStatus {
        PENDING,
        UNDER_REVIEW,
        APPROVED,
        REJECTED,
        EXPIRED
    }

    struct HospitalRegistrationRequest {
        bytes32 requestId;
        string hospitalName;
        address hospitalAddress;
        string publicKey;
        bytes32 licenseHash;
        bytes32 proofId;
        uint256 submittedAt;
        uint256 expiresAt;
        RequestStatus status;
        mapping(address => bool) verifications;
        mapping(address => bool) regulatoryApprovals;
        uint256 verificationCount;
        uint256 regulatoryApprovalCount;
        string documentationURI;
        string jurisdiction;
    }

    mapping(bytes32 => HospitalRegistrationRequest) public hospitalRequests;
    mapping(address => bytes32) public hospitalToRequest;
    mapping(address => bool) public registeredHospitals;

    bytes32[] public pendingRequests;

    event HospitalRegistrationRequested(
        bytes32 indexed requestId, string hospitalName, address indexed hospitalAddress
    );

    event RequestVerified(bytes32 indexed requestId, address indexed verifier, uint256 verificationCount);

    event RegulatoryApprovalGranted(bytes32 indexed requestId, address indexed regulator);

    event HospitalApproved(bytes32 indexed requestId, address indexed hospitalAddress, string hospitalName);

    event HospitalRejected(bytes32 indexed requestId, address indexed hospitalAddress, string reason);

    event RequestMovedToReview(bytes32 indexed requestId);

    function initialize(address _mainPool, address _hospitalContract, bytes32 _poolId) public initializer {
        __AccessControl_init();
        __Ownable_init(msg.sender);
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(POOL_ADMIN_ROLE, msg.sender);
        mainPoolContract = _mainPool;
        hospitalContract = _hospitalContract;
        poolId = _poolId;
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyRole(DEFAULT_ADMIN_ROLE) {}

    function submitHospitalRegistration(
        string memory _hospitalName,
        address _hospitalAddress,
        string memory _publicKey,
        bytes32 _licenseHash,
        bytes32 _proofId,
        string memory _documentationURI,
        string memory _jurisdiction
    ) external returns (bytes32) {
        require(!registeredHospitals[_hospitalAddress], "Hospital already registered");
        require(hospitalToRequest[_hospitalAddress] == bytes32(0), "Request already submitted");
        require(bytes(_hospitalName).length > 0, "Hospital name required");
        require(bytes(_publicKey).length > 0, "Public key required");

        bytes32 requestId = keccak256(abi.encodePacked(_hospitalName, _hospitalAddress, block.timestamp));

        HospitalRegistrationRequest storage request = hospitalRequests[requestId];
        request.requestId = requestId;
        request.hospitalName = _hospitalName;
        request.hospitalAddress = _hospitalAddress;
        request.publicKey = _publicKey;
        request.licenseHash = _licenseHash;
        request.proofId = _proofId;
        request.submittedAt = block.timestamp;
        request.expiresAt = block.timestamp + REQUEST_EXPIRY_PERIOD;
        request.status = RequestStatus.PENDING;
        request.verificationCount = 0;
        request.regulatoryApprovalCount = 0;
        request.documentationURI = _documentationURI;
        request.jurisdiction = _jurisdiction;

        hospitalToRequest[_hospitalAddress] = requestId;
        pendingRequests.push(requestId);

        emit HospitalRegistrationRequested(requestId, _hospitalName, _hospitalAddress);

        return requestId;
    }

    function verifyHospitalRequest(bytes32 _requestId) external onlyRole(VERIFIER_ROLE) {
        HospitalRegistrationRequest storage request = hospitalRequests[_requestId];
        require(
            request.status == RequestStatus.PENDING || request.status == RequestStatus.UNDER_REVIEW, "Invalid status"
        );
        require(block.timestamp < request.expiresAt, "Request expired");
        require(!request.verifications[msg.sender], "Already verified");

        request.verifications[msg.sender] = true;
        request.verificationCount++;

        emit RequestVerified(_requestId, msg.sender, request.verificationCount);

        if (request.verificationCount >= VERIFICATION_THRESHOLD && request.status == RequestStatus.PENDING) {
            moveToReview(_requestId);
        }
    }

    function grantRegulatoryApproval(bytes32 _requestId) external onlyRole(REGULATORY_ROLE) {
        HospitalRegistrationRequest storage request = hospitalRequests[_requestId];
        require(request.status == RequestStatus.UNDER_REVIEW, "Not under review");
        require(!request.regulatoryApprovals[msg.sender], "Already approved");

        request.regulatoryApprovals[msg.sender] = true;
        request.regulatoryApprovalCount++;

        emit RegulatoryApprovalGranted(_requestId, msg.sender);

        if (request.regulatoryApprovalCount >= 1) {
            approveHospital(_requestId);
        }
    }

    function moveToReview(bytes32 _requestId) internal {
        HospitalRegistrationRequest storage request = hospitalRequests[_requestId];
        request.status = RequestStatus.UNDER_REVIEW;
        request.expiresAt = block.timestamp + REVIEW_PERIOD;

        emit RequestMovedToReview(_requestId);
    }

    function approveHospital(bytes32 _requestId) internal {
        HospitalRegistrationRequest storage request = hospitalRequests[_requestId];
        request.status = RequestStatus.APPROVED;
        registeredHospitals[request.hospitalAddress] = true;

        removePendingRequest(_requestId);

        emit HospitalApproved(_requestId, request.hospitalAddress, request.hospitalName);
    }

    function rejectHospital(bytes32 _requestId, string memory _reason) external onlyRole(POOL_ADMIN_ROLE) {
        HospitalRegistrationRequest storage request = hospitalRequests[_requestId];
        require(
            request.status == RequestStatus.PENDING || request.status == RequestStatus.UNDER_REVIEW, "Invalid status"
        );

        request.status = RequestStatus.REJECTED;
        delete hospitalToRequest[request.hospitalAddress];

        removePendingRequest(_requestId);

        emit HospitalRejected(_requestId, request.hospitalAddress, _reason);
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
            string memory hospitalName,
            address hospitalAddress,
            RequestStatus status,
            uint256 verificationCount,
            uint256 regulatoryApprovalCount,
            uint256 expiresAt
        )
    {
        HospitalRegistrationRequest storage request = hospitalRequests[_requestId];
        return (
            request.hospitalName,
            request.hospitalAddress,
            request.status,
            request.verificationCount,
            request.regulatoryApprovalCount,
            request.expiresAt
        );
    }

    function getPendingRequests() external view returns (bytes32[] memory) {
        return pendingRequests;
    }

    function isHospitalRegistered(address _hospital) external view returns (bool) {
        return registeredHospitals[_hospital];
    }

    function addVerifier(address _verifier) external onlyRole(POOL_ADMIN_ROLE) {
        _grantRole(VERIFIER_ROLE, _verifier);
    }

    function addRegulator(address _regulator) external onlyRole(POOL_ADMIN_ROLE) {
        _grantRole(REGULATORY_ROLE, _regulator);
    }

    function removeVerifier(address _verifier) external onlyRole(POOL_ADMIN_ROLE) {
        _revokeRole(VERIFIER_ROLE, _verifier);
    }

    function removeRegulator(address _regulator) external onlyRole(POOL_ADMIN_ROLE) {
        _revokeRole(REGULATORY_ROLE, _regulator);
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";

contract VerificationPool is AccessControlUpgradeable, OwnableUpgradeable, UUPSUpgradeable {
    
    bytes32 public constant VERIFIER_ROLE = keccak256("VERIFIER_ROLE");
    bytes32 public constant POOL_ADMIN_ROLE = keccak256("POOL_ADMIN_ROLE");
    bytes32 public constant AUDITOR_ROLE = keccak256("AUDITOR_ROLE");
    
    uint256 public verificationThreshold;
    uint256 public constant REQUEST_EXPIRY_PERIOD = 5 days;
    
    address public mainPoolContract;
    bytes32 public poolId;
    
    enum VerificationType {
        IDENTITY,
        DOCUMENT,
        CREDENTIAL,
        TRANSACTION,
        DATA_INTEGRITY,
        COMPLIANCE
    }
    
    enum VerificationStatus {
        PENDING,
        IN_PROGRESS,
        VERIFIED,
        REJECTED,
        EXPIRED
    }
    
    struct VerificationRequest {
        bytes32 requestId;
        address requester;
        VerificationType verificationType;
        bytes32 dataHash;
        uint256 submittedAt;
        uint256 expiresAt;
        VerificationStatus status;
        mapping(address => bool) verifierApprovals;
        mapping(address => string) verifierComments;
        uint256 approvalCount;
        uint256 rejectionCount;
        string metadata;
        string[] evidenceURIs;
    }
    
    struct VerifierStats {
        address verifier;
        uint256 totalVerifications;
        uint256 approvedVerifications;
        uint256 rejectedVerifications;
        uint256 reputationScore;
        bool isActive;
    }
    
    mapping(bytes32 => VerificationRequest) public verificationRequests;
    mapping(address => VerifierStats) public verifierStats;
    mapping(VerificationType => bytes32[]) public requestsByType;
    mapping(address => bytes32[]) public requesterToRequests;
    
    address[] public activeVerifiers;
    bytes32[] public pendingRequests;
    
    event VerificationRequested(
        bytes32 indexed requestId,
        address indexed requester,
        VerificationType indexed verificationType
    );
    
    event VerifierApproved(
        bytes32 indexed requestId,
        address indexed verifier,
        uint256 approvalCount
    );
    
    event VerifierRejected(
        bytes32 indexed requestId,
        address indexed verifier,
        string comment
    );
    
    event VerificationCompleted(
        bytes32 indexed requestId,
        VerificationStatus status
    );
    
    event VerifierAdded(
        address indexed verifier
    );
    
    event VerifierRemoved(
        address indexed verifier
    );
    
    event ThresholdUpdated(
        uint256 oldThreshold,
        uint256 newThreshold
    );
    
    function initialize(
        address _mainPool,
        bytes32 _poolId,
        uint256 _threshold
    ) public initializer {
        __AccessControl_init();
        __Ownable_init(msg.sender);
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(POOL_ADMIN_ROLE, msg.sender);
        mainPoolContract = _mainPool;
        poolId = _poolId;
        verificationThreshold = _threshold;
    }
    
    function _authorizeUpgrade(address newImplementation) internal override onlyRole(DEFAULT_ADMIN_ROLE) {}
    
    function submitVerificationRequest(
        VerificationType _verificationType,
        bytes32 _dataHash,
        string memory _metadata,
        string[] memory _evidenceURIs
    ) external returns (bytes32) {
        require(_dataHash != bytes32(0), "Data hash required");
        require(bytes(_metadata).length > 0, "Metadata required");
        
        bytes32 requestId = keccak256(
            abi.encodePacked(msg.sender, _dataHash, block.timestamp)
        );
        
        VerificationRequest storage request = verificationRequests[requestId];
        request.requestId = requestId;
        request.requester = msg.sender;
        request.verificationType = _verificationType;
        request.dataHash = _dataHash;
        request.submittedAt = block.timestamp;
        request.expiresAt = block.timestamp + REQUEST_EXPIRY_PERIOD;
        request.status = VerificationStatus.PENDING;
        request.approvalCount = 0;
        request.rejectionCount = 0;
        request.metadata = _metadata;
        request.evidenceURIs = _evidenceURIs;
        
        requestsByType[_verificationType].push(requestId);
        requesterToRequests[msg.sender].push(requestId);
        pendingRequests.push(requestId);
        
        emit VerificationRequested(requestId, msg.sender, _verificationType);
        
        return requestId;
    }
    
    function approveVerification(bytes32 _requestId, string memory _comment) 
        external 
        onlyRole(VERIFIER_ROLE) 
    {
        VerificationRequest storage request = verificationRequests[_requestId];
        require(
            request.status == VerificationStatus.PENDING || 
            request.status == VerificationStatus.IN_PROGRESS,
            "Invalid status"
        );
        require(block.timestamp < request.expiresAt, "Request expired");
        require(!request.verifierApprovals[msg.sender], "Already voted");
        
        if (request.status == VerificationStatus.PENDING) {
            request.status = VerificationStatus.IN_PROGRESS;
        }
        
        request.verifierApprovals[msg.sender] = true;
        request.verifierComments[msg.sender] = _comment;
        request.approvalCount++;
        
        updateVerifierStats(msg.sender, true);
        
        emit VerifierApproved(_requestId, msg.sender, request.approvalCount);
        
        if (request.approvalCount >= verificationThreshold) {
            completeVerification(_requestId, true);
        }
    }
    
    function rejectVerification(bytes32 _requestId, string memory _reason) 
        external 
        onlyRole(VERIFIER_ROLE) 
    {
        VerificationRequest storage request = verificationRequests[_requestId];
        require(
            request.status == VerificationStatus.PENDING || 
            request.status == VerificationStatus.IN_PROGRESS,
            "Invalid status"
        );
        require(!request.verifierApprovals[msg.sender], "Already voted");
        
        if (request.status == VerificationStatus.PENDING) {
            request.status = VerificationStatus.IN_PROGRESS;
        }
        
        request.verifierApprovals[msg.sender] = false;
        request.verifierComments[msg.sender] = _reason;
        request.rejectionCount++;
        
        updateVerifierStats(msg.sender, false);
        
        emit VerifierRejected(_requestId, msg.sender, _reason);
        
        uint256 activeVerifierCount = activeVerifiers.length;
        uint256 maxPossibleApprovals = activeVerifierCount - request.rejectionCount;
        
        if (maxPossibleApprovals < verificationThreshold) {
            completeVerification(_requestId, false);
        }
    }
    
    function completeVerification(bytes32 _requestId, bool _approved) internal {
        VerificationRequest storage request = verificationRequests[_requestId];
        
        if (_approved) {
            request.status = VerificationStatus.VERIFIED;
        } else {
            request.status = VerificationStatus.REJECTED;
        }
        
        removePendingRequest(_requestId);
        
        emit VerificationCompleted(_requestId, request.status);
    }
    
    function updateVerifierStats(address _verifier, bool _approved) internal {
        VerifierStats storage stats = verifierStats[_verifier];
        stats.totalVerifications++;
        
        if (_approved) {
            stats.approvedVerifications++;
            stats.reputationScore += 10;
        } else {
            stats.rejectedVerifications++;
            stats.reputationScore += 5;
        }
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
    
    function addVerifier(address _verifier) external onlyRole(POOL_ADMIN_ROLE) {
        require(_verifier != address(0), "Invalid address");
        require(!hasRole(VERIFIER_ROLE, _verifier), "Already a verifier");
        
        _grantRole(VERIFIER_ROLE, _verifier);
        activeVerifiers.push(_verifier);
        
        verifierStats[_verifier] = VerifierStats({
            verifier: _verifier,
            totalVerifications: 0,
            approvedVerifications: 0,
            rejectedVerifications: 0,
            reputationScore: 100,
            isActive: true
        });
        
        emit VerifierAdded(_verifier);
    }
    
    function removeVerifier(address _verifier) external onlyRole(POOL_ADMIN_ROLE) {
        require(hasRole(VERIFIER_ROLE, _verifier), "Not a verifier");
        
        _revokeRole(VERIFIER_ROLE, _verifier);
        verifierStats[_verifier].isActive = false;
        
        for (uint256 i = 0; i < activeVerifiers.length; i++) {
            if (activeVerifiers[i] == _verifier) {
                activeVerifiers[i] = activeVerifiers[activeVerifiers.length - 1];
                activeVerifiers.pop();
                break;
            }
        }
        
        emit VerifierRemoved(_verifier);
    }
    
    function updateThreshold(uint256 _newThreshold) external onlyRole(POOL_ADMIN_ROLE) {
        require(_newThreshold > 0, "Threshold must be positive");
        require(_newThreshold <= activeVerifiers.length, "Threshold too high");
        
        uint256 oldThreshold = verificationThreshold;
        verificationThreshold = _newThreshold;
        
        emit ThresholdUpdated(oldThreshold, _newThreshold);
    }
    
    function getRequestDetails(bytes32 _requestId) external view returns (
        address requester,
        VerificationType verificationType,
        VerificationStatus status,
        uint256 approvalCount,
        uint256 rejectionCount,
        uint256 expiresAt
    ) {
        VerificationRequest storage request = verificationRequests[_requestId];
        return (
            request.requester,
            request.verificationType,
            request.status,
            request.approvalCount,
            request.rejectionCount,
            request.expiresAt
        );
    }
    
    function getVerifierComment(bytes32 _requestId, address _verifier) 
        external 
        view 
        returns (string memory) 
    {
        return verificationRequests[_requestId].verifierComments[_verifier];
    }
    
    function getVerifierStats(address _verifier) external view returns (
        uint256 totalVerifications,
        uint256 approvedVerifications,
        uint256 rejectedVerifications,
        uint256 reputationScore,
        bool isActive
    ) {
        VerifierStats memory stats = verifierStats[_verifier];
        return (
            stats.totalVerifications,
            stats.approvedVerifications,
            stats.rejectedVerifications,
            stats.reputationScore,
            stats.isActive
        );
    }
    
    function getPendingRequests() external view returns (bytes32[] memory) {
        return pendingRequests;
    }
    
    function getRequestsByType(VerificationType _type) external view returns (bytes32[] memory) {
        return requestsByType[_type];
    }
    
    function getActiveVerifiers() external view returns (address[] memory) {
        return activeVerifiers;
    }
    
    function addAuditor(address _auditor) external onlyRole(POOL_ADMIN_ROLE) {
        _grantRole(AUDITOR_ROLE, _auditor);
    }
}


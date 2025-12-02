// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";

contract SynNFT is ERC721Upgradeable, AccessControlUpgradeable, OwnableUpgradeable, UUPSUpgradeable {
    
    bytes32 public constant POOL_VERIFIER_ROLE = keccak256("POOL_VERIFIER_ROLE");
    bytes32 public constant HOSPITAL_ROLE = keccak256("HOSPITAL_ROLE");
    bytes32 public constant DATA_OWNER_ROLE = keccak256("DATA_OWNER_ROLE");
    
    uint256 public constant REQUEST_EXPIRY_PERIOD = 7 days;
    uint256 public constant POOL_VERIFICATION_THRESHOLD = 2; // Minimum verifiers needed
    
    uint256 private tokenIdCounter;
    
    struct HealthDataNFT {
        uint256 tokenId;
        string publicKey;
        bytes32 dataHash;
        bytes32 hospitalId;
        address dataOwner;
        uint256 createdAt;
        DataStatus status;
        string encryptedDataURI;
    }
    
    struct DataRequest {
        bytes32 requestId;
        uint256 tokenId;
        address requester;
        bytes32 hospitalId;
        uint256 requestedAt;
        uint256 expiresAt;
        RequestStatus status;
        mapping(address => bool) poolVerifications;
        uint256 verificationCount;
        string requestReason;
    }
    
    struct VerificationPool {
        bytes32 poolId;
        address[] verifiers;
        mapping(address => bool) isVerifier;
        bool isActive;
        uint256 minimumVerifications;
    }
    
    enum DataStatus {
        PENDING,
        ACTIVE,
        REVOKED,
        EXPIRED
    }
    
    enum RequestStatus {
        PENDING,
        APPROVED,
        REJECTED,
        EXPIRED
    }
    
    mapping(uint256 => HealthDataNFT) public healthDataNFTs;
    mapping(bytes32 => DataRequest) public dataRequests;
    mapping(bytes32 => VerificationPool) public verificationPools;
    mapping(address => uint256[]) private ownerTokens;
    mapping(bytes32 => bytes32) private hospitalToPool;
    
    event HealthDataMinted(
        uint256 indexed tokenId, 
        address indexed owner, 
        string publicKey, 
        bytes32 indexed hospitalId
    );
    
    event DataRequestSubmitted(
        bytes32 indexed requestId,
        uint256 indexed tokenId,
        address indexed requester,
        bytes32 poolId
    );
    
    event RequestVerified(
        bytes32 indexed requestId,
        address indexed verifier,
        uint256 verificationCount
    );
    
    event RequestApproved(
        bytes32 indexed requestId,
        uint256 indexed tokenId
    );
    
    event RequestRejected(
        bytes32 indexed requestId,
        string reason
    );
    
    event PoolCreated(
        bytes32 indexed poolId,
        address[] verifiers
    );
    
    event VerifierAddedToPool(
        bytes32 indexed poolId,
        address indexed verifier
    );
    
    function initialize() public initializer {
        __ERC721_init("Synthetic Health Data", "SYNHD");
        __AccessControl_init();
        __Ownable_init(msg.sender);
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        tokenIdCounter = 1;
    }
    
    function _authorizeUpgrade(address newImplementation) internal override onlyRole(DEFAULT_ADMIN_ROLE) {}
    
    function mintHealthDataNFT(
        address _dataOwner,
        string memory _publicKey,
        bytes32 _dataHash,
        bytes32 _hospitalId,
        string memory _encryptedDataURI
    ) external onlyRole(HOSPITAL_ROLE) returns (uint256) {
        require(bytes(_publicKey).length > 0, "Public key required");
        require(_dataHash != bytes32(0), "Data hash required");
        require(_dataOwner != address(0), "Invalid data owner");
        
        uint256 newTokenId = tokenIdCounter;
        tokenIdCounter++;
        
        _safeMint(_dataOwner, newTokenId);
        _grantRole(DATA_OWNER_ROLE, _dataOwner);
        
        healthDataNFTs[newTokenId] = HealthDataNFT({
            tokenId: newTokenId,
            publicKey: _publicKey,
            dataHash: _dataHash,
            hospitalId: _hospitalId,
            dataOwner: _dataOwner,
            createdAt: block.timestamp,
            status: DataStatus.ACTIVE,
            encryptedDataURI: _encryptedDataURI
        });
        
        ownerTokens[_dataOwner].push(newTokenId);
        
        emit HealthDataMinted(newTokenId, _dataOwner, _publicKey, _hospitalId);
        
        return newTokenId;
    }
    
    function createVerificationPool(
        bytes32 _poolId,
        address[] memory _verifiers,
        uint256 _minimumVerifications
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(_verifiers.length > 0, "Verifiers required");
        require(_minimumVerifications > 0 && _minimumVerifications <= _verifiers.length, "Invalid threshold");
        require(!verificationPools[_poolId].isActive, "Pool already exists");
        
        VerificationPool storage pool = verificationPools[_poolId];
        pool.poolId = _poolId;
        pool.verifiers = _verifiers;
        pool.isActive = true;
        pool.minimumVerifications = _minimumVerifications;
        
        for (uint256 i = 0; i < _verifiers.length; i++) {
            pool.isVerifier[_verifiers[i]] = true;
            _grantRole(POOL_VERIFIER_ROLE, _verifiers[i]);
        }
        
        emit PoolCreated(_poolId, _verifiers);
    }
    
    function assignPoolToHospital(bytes32 _hospitalId, bytes32 _poolId) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(verificationPools[_poolId].isActive, "Pool not active");
        hospitalToPool[_hospitalId] = _poolId;
    }
    
    function submitDataRequest(
        uint256 _tokenId,
        bytes32 _hospitalId,
        string memory _requestReason
    ) external returns (bytes32) {
        require(_exists(_tokenId), "Token does not exist");
        require(bytes(_requestReason).length > 0, "Request reason required");
        
        bytes32 poolId = hospitalToPool[_hospitalId];
        require(verificationPools[poolId].isActive, "No active pool for hospital");
        
        bytes32 requestId = keccak256(
            abi.encodePacked(_tokenId, msg.sender, block.timestamp, _hospitalId)
        );
        
        DataRequest storage request = dataRequests[requestId];
        request.requestId = requestId;
        request.tokenId = _tokenId;
        request.requester = msg.sender;
        request.hospitalId = _hospitalId;
        request.requestedAt = block.timestamp;
        request.expiresAt = block.timestamp + REQUEST_EXPIRY_PERIOD;
        request.status = RequestStatus.PENDING;
        request.verificationCount = 0;
        request.requestReason = _requestReason;
        
        emit DataRequestSubmitted(requestId, _tokenId, msg.sender, poolId);
        
        return requestId;
    }
    
    function verifyRequest(bytes32 _requestId) external onlyRole(POOL_VERIFIER_ROLE) {
        DataRequest storage request = dataRequests[_requestId];
        require(request.status == RequestStatus.PENDING, "Request not pending");
        require(block.timestamp < request.expiresAt, "Request expired");
        require(!request.poolVerifications[msg.sender], "Already verified");
        
        bytes32 poolId = hospitalToPool[request.hospitalId];
        require(verificationPools[poolId].isVerifier[msg.sender], "Not pool verifier");
        
        request.poolVerifications[msg.sender] = true;
        request.verificationCount++;
        
        emit RequestVerified(_requestId, msg.sender, request.verificationCount);
        
        uint256 threshold = verificationPools[poolId].minimumVerifications;
        if (request.verificationCount >= threshold) {
            approveRequest(_requestId);
        }
    }
    
    function approveRequest(bytes32 _requestId) internal {
        DataRequest storage request = dataRequests[_requestId];
        request.status = RequestStatus.APPROVED;
        
        emit RequestApproved(_requestId, request.tokenId);
    }
    
    function rejectRequest(bytes32 _requestId, string memory _reason) external onlyRole(POOL_VERIFIER_ROLE) {
        DataRequest storage request = dataRequests[_requestId];
        require(request.status == RequestStatus.PENDING, "Request not pending");
        
        request.status = RequestStatus.REJECTED;
        
        emit RequestRejected(_requestId, _reason);
    }
    
    function getHealthDataInfo(uint256 _tokenId) external view returns (
        string memory publicKey,
        bytes32 dataHash,
        bytes32 hospitalId,
        address dataOwner,
        DataStatus status,
        string memory encryptedDataURI
    ) {
        require(_exists(_tokenId), "Token does not exist");
        HealthDataNFT memory data = healthDataNFTs[_tokenId];
        
        return (
            data.publicKey,
            data.dataHash,
            data.hospitalId,
            data.dataOwner,
            data.status,
            data.encryptedDataURI
        );
    }
    
    function getRequestStatus(bytes32 _requestId) external view returns (
        RequestStatus status,
        uint256 verificationCount,
        uint256 expiresAt,
        address requester
    ) {
        DataRequest storage request = dataRequests[_requestId];
        return (
            request.status,
            request.verificationCount,
            request.expiresAt,
            request.requester
        );
    }
    
    function getOwnerTokens(address _owner) external view returns (uint256[] memory) {
        return ownerTokens[_owner];
    }
    
    function revokeHealthData(uint256 _tokenId) external {
        require(_exists(_tokenId), "Token does not exist");
        require(ownerOf(_tokenId) == msg.sender || hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "Unauthorized");
        
        healthDataNFTs[_tokenId].status = DataStatus.REVOKED;
    }
    
    function addVerifierToPool(bytes32 _poolId, address _verifier) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(verificationPools[_poolId].isActive, "Pool not active");
        require(!verificationPools[_poolId].isVerifier[_verifier], "Already a verifier");
        
        verificationPools[_poolId].verifiers.push(_verifier);
        verificationPools[_poolId].isVerifier[_verifier] = true;
        _grantRole(POOL_VERIFIER_ROLE, _verifier);
        
        emit VerifierAddedToPool(_poolId, _verifier);
    }
    
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721Upgradeable, AccessControlUpgradeable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
    
    function _exists(uint256 tokenId) internal view returns (bool) {
        return healthDataNFTs[tokenId].dataOwner != address(0);
    }
}


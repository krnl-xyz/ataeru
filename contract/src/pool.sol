// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";

contract Pool is AccessControlUpgradeable, OwnableUpgradeable, UUPSUpgradeable {
    
    bytes32 public constant POOL_MANAGER_ROLE = keccak256("POOL_MANAGER_ROLE");
    bytes32 public constant POOL_ADMIN_ROLE = keccak256("POOL_ADMIN_ROLE");
    
    enum PoolType {
        USER_REGISTRATION,
        HOSPITAL_REGISTRATION,
        HEALTH_DATA_REQUEST,
        VERIFICATION,
        GENERAL
    }
    
    enum PoolStatus {
        INACTIVE,
        ACTIVE,
        SUSPENDED,
        DEPRECATED
    }
    
    struct PoolInfo {
        bytes32 poolId;
        string name;
        address poolAddress;
        PoolType poolType;
        PoolStatus status;
        uint256 createdAt;
        uint256 totalRequests;
        uint256 processedRequests;
        address[] administrators;
        mapping(address => bool) isAdministrator;
    }
    
    struct PoolMetrics {
        uint256 totalRequests;
        uint256 approvedRequests;
        uint256 rejectedRequests;
        uint256 pendingRequests;
        uint256 averageProcessingTime;
    }
    
    mapping(bytes32 => PoolInfo) public pools;
    mapping(PoolType => bytes32[]) public poolsByType;
    mapping(address => bytes32[]) public poolsByAdmin;
    
    bytes32[] public allPoolIds;
    
    event PoolCreated(
        bytes32 indexed poolId,
        string name,
        address indexed poolAddress,
        PoolType indexed poolType
    );
    
    event PoolStatusChanged(
        bytes32 indexed poolId,
        PoolStatus oldStatus,
        PoolStatus newStatus
    );
    
    event PoolAdminAdded(
        bytes32 indexed poolId,
        address indexed admin
    );
    
    event PoolAdminRemoved(
        bytes32 indexed poolId,
        address indexed admin
    );
    
    event RequestProcessed(
        bytes32 indexed poolId,
        bytes32 indexed requestId,
        bool approved
    );
    
    function initialize() public initializer {
        __AccessControl_init();
        __Ownable_init(msg.sender);
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(POOL_MANAGER_ROLE, msg.sender);
    }
    
    function _authorizeUpgrade(address newImplementation) internal override onlyRole(DEFAULT_ADMIN_ROLE) {}
    
    function createPool(
        string memory _name,
        address _poolAddress,
        PoolType _poolType,
        address[] memory _administrators
    ) external onlyRole(POOL_MANAGER_ROLE) returns (bytes32) {
        require(_poolAddress != address(0), "Invalid pool address");
        require(bytes(_name).length > 0, "Pool name required");
        require(_administrators.length > 0, "Administrators required");
        
        bytes32 poolId = keccak256(
            abi.encodePacked(_name, _poolAddress, block.timestamp)
        );
        
        require(pools[poolId].poolAddress == address(0), "Pool already exists");
        
        PoolInfo storage pool = pools[poolId];
        pool.poolId = poolId;
        pool.name = _name;
        pool.poolAddress = _poolAddress;
        pool.poolType = _poolType;
        pool.status = PoolStatus.ACTIVE;
        pool.createdAt = block.timestamp;
        pool.totalRequests = 0;
        pool.processedRequests = 0;
        pool.administrators = _administrators;
        
        for (uint256 i = 0; i < _administrators.length; i++) {
            pool.isAdministrator[_administrators[i]] = true;
            poolsByAdmin[_administrators[i]].push(poolId);
            _grantRole(POOL_ADMIN_ROLE, _administrators[i]);
        }
        
        allPoolIds.push(poolId);
        poolsByType[_poolType].push(poolId);
        
        emit PoolCreated(poolId, _name, _poolAddress, _poolType);
        
        return poolId;
    }
    
    function updatePoolStatus(
        bytes32 _poolId,
        PoolStatus _newStatus
    ) external onlyRole(POOL_MANAGER_ROLE) {
        require(pools[_poolId].poolAddress != address(0), "Pool does not exist");
        
        PoolStatus oldStatus = pools[_poolId].status;
        pools[_poolId].status = _newStatus;
        
        emit PoolStatusChanged(_poolId, oldStatus, _newStatus);
    }
    
    function addPoolAdministrator(
        bytes32 _poolId,
        address _admin
    ) external onlyRole(POOL_MANAGER_ROLE) {
        require(pools[_poolId].poolAddress != address(0), "Pool does not exist");
        require(!pools[_poolId].isAdministrator[_admin], "Already an administrator");
        
        pools[_poolId].administrators.push(_admin);
        pools[_poolId].isAdministrator[_admin] = true;
        poolsByAdmin[_admin].push(_poolId);
        _grantRole(POOL_ADMIN_ROLE, _admin);
        
        emit PoolAdminAdded(_poolId, _admin);
    }
    
    function removePoolAdministrator(
        bytes32 _poolId,
        address _admin
    ) external onlyRole(POOL_MANAGER_ROLE) {
        require(pools[_poolId].poolAddress != address(0), "Pool does not exist");
        require(pools[_poolId].isAdministrator[_admin], "Not an administrator");
        
        pools[_poolId].isAdministrator[_admin] = false;
        
        emit PoolAdminRemoved(_poolId, _admin);
    }
    
    function recordRequestProcessed(
        bytes32 _poolId,
        bytes32 _requestId,
        bool _approved
    ) external {
        require(pools[_poolId].poolAddress == msg.sender, "Unauthorized pool");
        
        pools[_poolId].totalRequests++;
        pools[_poolId].processedRequests++;
        
        emit RequestProcessed(_poolId, _requestId, _approved);
    }
    
    function getPoolInfo(bytes32 _poolId) external view returns (
        string memory name,
        address poolAddress,
        PoolType poolType,
        PoolStatus status,
        uint256 totalRequests,
        uint256 processedRequests
    ) {
        PoolInfo storage pool = pools[_poolId];
        return (
            pool.name,
            pool.poolAddress,
            pool.poolType,
            pool.status,
            pool.totalRequests,
            pool.processedRequests
        );
    }
    
    function getPoolsByType(PoolType _poolType) external view returns (bytes32[] memory) {
        return poolsByType[_poolType];
    }
    
    function getPoolsByAdmin(address _admin) external view returns (bytes32[] memory) {
        return poolsByAdmin[_admin];
    }
    
    function getAllPools() external view returns (bytes32[] memory) {
        return allPoolIds;
    }
    
    function isPoolAdmin(bytes32 _poolId, address _admin) external view returns (bool) {
        return pools[_poolId].isAdministrator[_admin];
    }
    
    function isPoolActive(bytes32 _poolId) external view returns (bool) {
        return pools[_poolId].status == PoolStatus.ACTIVE;
    }
}


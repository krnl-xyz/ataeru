// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import "./UserRegistrationPool.sol";
import "./HospitalRegistrationPool.sol";
import "./HealthDataRequestPool.sol";
import "./VerificationPool.sol";

contract PoolFactory is AccessControlUpgradeable, OwnableUpgradeable, UUPSUpgradeable {
    bytes32 public constant FACTORY_ADMIN_ROLE = keccak256("FACTORY_ADMIN_ROLE");

    address public mainPoolContract;

    enum PoolType {
        USER_REGISTRATION,
        HOSPITAL_REGISTRATION,
        HEALTH_DATA_REQUEST,
        VERIFICATION
    }

    struct DeployedPool {
        address poolAddress;
        PoolType poolType;
        bytes32 poolId;
        uint256 deployedAt;
        address deployer;
        bool isActive;
    }

    mapping(bytes32 => DeployedPool) public deployedPools;
    mapping(PoolType => address[]) public poolsByType;

    address[] public allPools;

    event PoolDeployed(
        bytes32 indexed poolId, address indexed poolAddress, PoolType indexed poolType, address deployer
    );

    event PoolDeactivated(bytes32 indexed poolId, address indexed poolAddress);

    function initialize(address _mainPoolContract) public initializer {
        __AccessControl_init();
        __Ownable_init(msg.sender);
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(FACTORY_ADMIN_ROLE, msg.sender);
        mainPoolContract = _mainPoolContract;
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyRole(DEFAULT_ADMIN_ROLE) {}

    function deployUserRegistrationPool() external onlyRole(FACTORY_ADMIN_ROLE) returns (address) {
        bytes32 poolId = keccak256(abi.encodePacked("USER_REGISTRATION", block.timestamp, msg.sender));

        UserRegistrationPool pool = new UserRegistrationPool();
        pool.initialize(mainPoolContract, poolId);

        address poolAddress = address(pool);

        recordDeployedPool(poolId, poolAddress, PoolType.USER_REGISTRATION);

        emit PoolDeployed(poolId, poolAddress, PoolType.USER_REGISTRATION, msg.sender);

        return poolAddress;
    }

    function deployHospitalRegistrationPool(address _hospitalContract)
        external
        onlyRole(FACTORY_ADMIN_ROLE)
        returns (address)
    {
        bytes32 poolId = keccak256(abi.encodePacked("HOSPITAL_REGISTRATION", block.timestamp, msg.sender));

        HospitalRegistrationPool pool = new HospitalRegistrationPool();
        pool.initialize(mainPoolContract, _hospitalContract, poolId);

        address poolAddress = address(pool);

        recordDeployedPool(poolId, poolAddress, PoolType.HOSPITAL_REGISTRATION);

        emit PoolDeployed(poolId, poolAddress, PoolType.HOSPITAL_REGISTRATION, msg.sender);

        return poolAddress;
    }

    function deployHealthDataRequestPool(address _synNFTContract)
        external
        onlyRole(FACTORY_ADMIN_ROLE)
        returns (address)
    {
        bytes32 poolId = keccak256(abi.encodePacked("HEALTH_DATA_REQUEST", block.timestamp, msg.sender));

        HealthDataRequestPool pool = new HealthDataRequestPool();
        pool.initialize(mainPoolContract, _synNFTContract, poolId);

        address poolAddress = address(pool);

        recordDeployedPool(poolId, poolAddress, PoolType.HEALTH_DATA_REQUEST);

        emit PoolDeployed(poolId, poolAddress, PoolType.HEALTH_DATA_REQUEST, msg.sender);

        return poolAddress;
    }

    function deployVerificationPool(uint256 _threshold) external onlyRole(FACTORY_ADMIN_ROLE) returns (address) {
        require(_threshold > 0, "Invalid threshold");

        bytes32 poolId = keccak256(abi.encodePacked("VERIFICATION", block.timestamp, msg.sender));

        VerificationPool pool = new VerificationPool();
        pool.initialize(mainPoolContract, poolId, _threshold);

        address poolAddress = address(pool);

        recordDeployedPool(poolId, poolAddress, PoolType.VERIFICATION);

        emit PoolDeployed(poolId, poolAddress, PoolType.VERIFICATION, msg.sender);

        return poolAddress;
    }

    function recordDeployedPool(bytes32 _poolId, address _poolAddress, PoolType _poolType) internal {
        deployedPools[_poolId] = DeployedPool({
            poolAddress: _poolAddress,
            poolType: _poolType,
            poolId: _poolId,
            deployedAt: block.timestamp,
            deployer: msg.sender,
            isActive: true
        });

        allPools.push(_poolAddress);
        poolsByType[_poolType].push(_poolAddress);
    }

    function deactivatePool(bytes32 _poolId) external onlyRole(FACTORY_ADMIN_ROLE) {
        require(deployedPools[_poolId].isActive, "Pool not active");

        deployedPools[_poolId].isActive = false;

        emit PoolDeactivated(_poolId, deployedPools[_poolId].poolAddress);
    }

    function getPoolInfo(bytes32 _poolId)
        external
        view
        returns (address poolAddress, PoolType poolType, uint256 deployedAt, address deployer, bool isActive)
    {
        DeployedPool memory pool = deployedPools[_poolId];
        return (pool.poolAddress, pool.poolType, pool.deployedAt, pool.deployer, pool.isActive);
    }

    function getAllPools() external view returns (address[] memory) {
        return allPools;
    }

    function getPoolsByType(PoolType _poolType) external view returns (address[] memory) {
        return poolsByType[_poolType];
    }

    function updateMainPoolContract(address _newMainPool) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(_newMainPool != address(0), "Invalid address");
        mainPoolContract = _newMainPool;
    }
}

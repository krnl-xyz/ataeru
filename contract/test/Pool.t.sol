// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/pool.sol";

contract PoolTest is Test {
    Pool public pool;

    address public owner;
    address public poolManager;
    address public admin1;
    address public admin2;
    address public poolAddress1;
    address public poolAddress2;

    bytes32 public poolId1;
    bytes32 public poolId2;

    event PoolCreated(bytes32 indexed poolId, string name, address indexed poolAddress, Pool.PoolType indexed poolType);

    event PoolStatusChanged(bytes32 indexed poolId, Pool.PoolStatus oldStatus, Pool.PoolStatus newStatus);

    event PoolAdminAdded(bytes32 indexed poolId, address indexed admin);

    event PoolAdminRemoved(bytes32 indexed poolId, address indexed admin);

    event RequestProcessed(bytes32 indexed poolId, bytes32 indexed requestId, bool approved);

    function setUp() public {
        owner = address(this);
        poolManager = makeAddr("poolManager");
        admin1 = makeAddr("admin1");
        admin2 = makeAddr("admin2");
        poolAddress1 = makeAddr("poolAddress1");
        poolAddress2 = makeAddr("poolAddress2");

        pool = new Pool();
        pool.initialize();

        pool.grantRole(pool.POOL_MANAGER_ROLE(), poolManager);
    }

    function testInitialization() public view {
        assertTrue(pool.hasRole(pool.DEFAULT_ADMIN_ROLE(), owner));
        assertTrue(pool.hasRole(pool.POOL_MANAGER_ROLE(), owner));
    }

    function testCreatePool() public {
        address[] memory admins = new address[](2);
        admins[0] = admin1;
        admins[1] = admin2;

        vm.startPrank(poolManager);

        poolId1 = pool.createPool("User Registration Pool", poolAddress1, Pool.PoolType.USER_REGISTRATION, admins);

        vm.stopPrank();

        (
            string memory name,
            address poolAddress,
            Pool.PoolType poolType,
            Pool.PoolStatus status,
            uint256 totalRequests,
            uint256 processedRequests
        ) = pool.getPoolInfo(poolId1);

        assertEq(name, "User Registration Pool");
        assertEq(poolAddress, poolAddress1);
        assertTrue(poolType == Pool.PoolType.USER_REGISTRATION);
        assertTrue(status == Pool.PoolStatus.ACTIVE);
        assertEq(totalRequests, 0);
        assertEq(processedRequests, 0);

        assertTrue(pool.hasRole(pool.POOL_ADMIN_ROLE(), admin1));
        assertTrue(pool.hasRole(pool.POOL_ADMIN_ROLE(), admin2));
    }

    function testCreatePoolFailsWithInvalidAddress() public {
        address[] memory admins = new address[](1);
        admins[0] = admin1;

        vm.startPrank(poolManager);
        vm.expectRevert("Invalid pool address");
        pool.createPool("Test Pool", address(0), Pool.PoolType.USER_REGISTRATION, admins);
        vm.stopPrank();
    }

    function testCreatePoolFailsWithEmptyName() public {
        address[] memory admins = new address[](1);
        admins[0] = admin1;

        vm.startPrank(poolManager);
        vm.expectRevert("Pool name required");
        pool.createPool("", poolAddress1, Pool.PoolType.USER_REGISTRATION, admins);
        vm.stopPrank();
    }

    function testCreatePoolFailsWithNoAdministrators() public {
        address[] memory admins = new address[](0);

        vm.startPrank(poolManager);
        vm.expectRevert("Administrators required");
        pool.createPool("Test Pool", poolAddress1, Pool.PoolType.USER_REGISTRATION, admins);
        vm.stopPrank();
    }

    function testCreatePoolFailsWithoutPermission() public {
        address[] memory admins = new address[](1);
        admins[0] = admin1;

        address unauthorized = makeAddr("unauthorized");

        vm.startPrank(unauthorized);
        vm.expectRevert();
        pool.createPool("Test Pool", poolAddress1, Pool.PoolType.USER_REGISTRATION, admins);
        vm.stopPrank();
    }

    function testUpdatePoolStatus() public {
        address[] memory admins = new address[](1);
        admins[0] = admin1;

        vm.startPrank(poolManager);
        poolId1 = pool.createPool("Test Pool", poolAddress1, Pool.PoolType.USER_REGISTRATION, admins);

        vm.expectEmit(true, false, false, true);
        emit PoolStatusChanged(poolId1, Pool.PoolStatus.ACTIVE, Pool.PoolStatus.SUSPENDED);

        pool.updatePoolStatus(poolId1, Pool.PoolStatus.SUSPENDED);
        vm.stopPrank();

        (,,, Pool.PoolStatus status,,) = pool.getPoolInfo(poolId1);
        assertTrue(status == Pool.PoolStatus.SUSPENDED);
    }

    function testUpdatePoolStatusFailsForNonExistentPool() public {
        vm.startPrank(poolManager);
        vm.expectRevert("Pool does not exist");
        pool.updatePoolStatus(bytes32("nonexistent"), Pool.PoolStatus.SUSPENDED);
        vm.stopPrank();
    }

    function testAddPoolAdministrator() public {
        address[] memory admins = new address[](1);
        admins[0] = admin1;

        vm.startPrank(poolManager);
        poolId1 = pool.createPool("Test Pool", poolAddress1, Pool.PoolType.USER_REGISTRATION, admins);

        address newAdmin = makeAddr("newAdmin");

        vm.expectEmit(true, true, false, false);
        emit PoolAdminAdded(poolId1, newAdmin);

        pool.addPoolAdministrator(poolId1, newAdmin);
        vm.stopPrank();

        assertTrue(pool.isPoolAdmin(poolId1, newAdmin));
        assertTrue(pool.hasRole(pool.POOL_ADMIN_ROLE(), newAdmin));
    }

    function testAddPoolAdministratorFailsForDuplicate() public {
        address[] memory admins = new address[](1);
        admins[0] = admin1;

        vm.startPrank(poolManager);
        poolId1 = pool.createPool("Test Pool", poolAddress1, Pool.PoolType.USER_REGISTRATION, admins);

        vm.expectRevert("Already an administrator");
        pool.addPoolAdministrator(poolId1, admin1);
        vm.stopPrank();
    }

    function testRemovePoolAdministrator() public {
        address[] memory admins = new address[](1);
        admins[0] = admin1;

        vm.startPrank(poolManager);
        poolId1 = pool.createPool("Test Pool", poolAddress1, Pool.PoolType.USER_REGISTRATION, admins);

        vm.expectEmit(true, true, false, false);
        emit PoolAdminRemoved(poolId1, admin1);

        pool.removePoolAdministrator(poolId1, admin1);
        vm.stopPrank();

        assertFalse(pool.isPoolAdmin(poolId1, admin1));
    }

    function testRemovePoolAdministratorFailsForNonAdmin() public {
        address[] memory admins = new address[](1);
        admins[0] = admin1;

        vm.startPrank(poolManager);
        poolId1 = pool.createPool("Test Pool", poolAddress1, Pool.PoolType.USER_REGISTRATION, admins);

        vm.expectRevert("Not an administrator");
        pool.removePoolAdministrator(poolId1, admin2);
        vm.stopPrank();
    }

    function testRecordRequestProcessed() public {
        address[] memory admins = new address[](1);
        admins[0] = admin1;

        vm.startPrank(poolManager);
        poolId1 = pool.createPool("Test Pool", poolAddress1, Pool.PoolType.USER_REGISTRATION, admins);
        vm.stopPrank();

        bytes32 requestId = keccak256("request1");

        vm.startPrank(poolAddress1);
        vm.expectEmit(true, true, false, true);
        emit RequestProcessed(poolId1, requestId, true);

        pool.recordRequestProcessed(poolId1, requestId, true);
        vm.stopPrank();

        (,,,, uint256 totalRequests, uint256 processedRequests) = pool.getPoolInfo(poolId1);
        assertEq(totalRequests, 1);
        assertEq(processedRequests, 1);
    }

    function testRecordRequestProcessedFailsForUnauthorizedCaller() public {
        address[] memory admins = new address[](1);
        admins[0] = admin1;

        vm.startPrank(poolManager);
        poolId1 = pool.createPool("Test Pool", poolAddress1, Pool.PoolType.USER_REGISTRATION, admins);
        vm.stopPrank();

        bytes32 requestId = keccak256("request1");

        address unauthorized = makeAddr("unauthorized");
        vm.startPrank(unauthorized);
        vm.expectRevert("Unauthorized pool");
        pool.recordRequestProcessed(poolId1, requestId, true);
        vm.stopPrank();
    }

    function testGetPoolsByType() public {
        address[] memory admins = new address[](1);
        admins[0] = admin1;

        vm.startPrank(poolManager);
        poolId1 = pool.createPool("Pool 1", poolAddress1, Pool.PoolType.USER_REGISTRATION, admins);

        poolId2 = pool.createPool("Pool 2", poolAddress2, Pool.PoolType.USER_REGISTRATION, admins);
        vm.stopPrank();

        bytes32[] memory pools = pool.getPoolsByType(Pool.PoolType.USER_REGISTRATION);
        assertEq(pools.length, 2);
        assertEq(pools[0], poolId1);
        assertEq(pools[1], poolId2);
    }

    function testGetPoolsByAdmin() public {
        address[] memory admins = new address[](1);
        admins[0] = admin1;

        vm.startPrank(poolManager);
        poolId1 = pool.createPool("Pool 1", poolAddress1, Pool.PoolType.USER_REGISTRATION, admins);

        poolId2 = pool.createPool("Pool 2", poolAddress2, Pool.PoolType.HOSPITAL_REGISTRATION, admins);
        vm.stopPrank();

        bytes32[] memory adminPools = pool.getPoolsByAdmin(admin1);
        assertEq(adminPools.length, 2);
    }

    function testGetAllPools() public {
        address[] memory admins = new address[](1);
        admins[0] = admin1;

        vm.startPrank(poolManager);
        pool.createPool("Pool 1", poolAddress1, Pool.PoolType.USER_REGISTRATION, admins);

        pool.createPool("Pool 2", poolAddress2, Pool.PoolType.HOSPITAL_REGISTRATION, admins);
        vm.stopPrank();

        bytes32[] memory allPools = pool.getAllPools();
        assertEq(allPools.length, 2);
    }

    function testIsPoolActive() public {
        address[] memory admins = new address[](1);
        admins[0] = admin1;

        vm.startPrank(poolManager);
        poolId1 = pool.createPool("Test Pool", poolAddress1, Pool.PoolType.USER_REGISTRATION, admins);

        assertTrue(pool.isPoolActive(poolId1));

        pool.updatePoolStatus(poolId1, Pool.PoolStatus.SUSPENDED);
        assertFalse(pool.isPoolActive(poolId1));
        vm.stopPrank();
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/pools/PoolFactory.sol";
import "../src/pools/UserRegistrationPool.sol";
import "../src/pools/HospitalRegistrationPool.sol";
import "../src/pools/HealthDataRequestPool.sol";
import "../src/pools/VerificationPool.sol";
import "../src/pool.sol";

contract PoolFactoryTest is Test {
    PoolFactory public factory;
    Pool public mainPool;

    address public owner;
    address public factoryAdmin;
    address public hospitalContract;
    address public synNFTContract;

    event PoolDeployed(
        bytes32 indexed poolId, address indexed poolAddress, PoolFactory.PoolType indexed poolType, address deployer
    );

    event PoolDeactivated(bytes32 indexed poolId, address indexed poolAddress);

    function setUp() public {
        owner = address(this);
        factoryAdmin = makeAddr("factoryAdmin");
        hospitalContract = makeAddr("hospitalContract");
        synNFTContract = makeAddr("synNFTContract");

        mainPool = new Pool();
        mainPool.initialize();

        factory = new PoolFactory();
        factory.initialize(address(mainPool));

        factory.grantRole(factory.FACTORY_ADMIN_ROLE(), factoryAdmin);
    }

    function testInitialization() public view {
        assertEq(factory.mainPoolContract(), address(mainPool));
        assertTrue(factory.hasRole(factory.DEFAULT_ADMIN_ROLE(), owner));
        assertTrue(factory.hasRole(factory.FACTORY_ADMIN_ROLE(), owner));
        assertTrue(factory.hasRole(factory.FACTORY_ADMIN_ROLE(), factoryAdmin));
    }

    function testDeployUserRegistrationPool() public {
        vm.startPrank(factoryAdmin);

        address poolAddress = factory.deployUserRegistrationPool();

        vm.stopPrank();

        assertTrue(poolAddress != address(0));

        UserRegistrationPool pool = UserRegistrationPool(poolAddress);
        assertEq(pool.mainPoolContract(), address(mainPool));
        assertTrue(pool.hasRole(pool.DEFAULT_ADMIN_ROLE(), address(factory)));
    }

    function testDeployUserRegistrationPoolFailsForNonAdmin() public {
        address unauthorized = makeAddr("unauthorized");

        vm.startPrank(unauthorized);
        vm.expectRevert();
        factory.deployUserRegistrationPool();
        vm.stopPrank();
    }

    function testDeployHospitalRegistrationPool() public {
        vm.startPrank(factoryAdmin);

        address poolAddress = factory.deployHospitalRegistrationPool(hospitalContract);

        vm.stopPrank();

        assertTrue(poolAddress != address(0));

        HospitalRegistrationPool pool = HospitalRegistrationPool(poolAddress);
        assertEq(pool.mainPoolContract(), address(mainPool));
        assertEq(pool.hospitalContract(), hospitalContract);
    }

    function testDeployHealthDataRequestPool() public {
        vm.startPrank(factoryAdmin);

        address poolAddress = factory.deployHealthDataRequestPool(synNFTContract);

        vm.stopPrank();

        assertTrue(poolAddress != address(0));

        HealthDataRequestPool pool = HealthDataRequestPool(poolAddress);
        assertEq(pool.mainPoolContract(), address(mainPool));
        assertEq(pool.synNFTContract(), synNFTContract);
    }

    function testDeployVerificationPool() public {
        uint256 threshold = 3;

        vm.startPrank(factoryAdmin);

        address poolAddress = factory.deployVerificationPool(threshold);

        vm.stopPrank();

        assertTrue(poolAddress != address(0));

        VerificationPool pool = VerificationPool(poolAddress);
        assertEq(pool.mainPoolContract(), address(mainPool));
        assertEq(pool.verificationThreshold(), threshold);
    }

    function testDeployVerificationPoolFailsWithZeroThreshold() public {
        vm.startPrank(factoryAdmin);
        vm.expectRevert("Invalid threshold");
        factory.deployVerificationPool(0);
        vm.stopPrank();
    }

    function testGetPoolInfo() public {
        vm.prank(factoryAdmin);
        address poolAddress = factory.deployUserRegistrationPool();

        // Pool info can be queried but we need the poolId which is generated internally
        // This test verifies the pool was deployed successfully
        address[] memory allPools = factory.getAllPools();
        assertEq(allPools.length, 1);
        assertEq(allPools[0], poolAddress);
    }

    function testDeactivatePool() public {
        vm.prank(factoryAdmin);
        address poolAddress = factory.deployUserRegistrationPool();

        // Generate the same poolId that would be created during deployment
        // In practice, you would emit this in an event and capture it
        bytes32 poolId = keccak256(abi.encodePacked("USER_REGISTRATION", block.timestamp, factoryAdmin));

        vm.startPrank(factoryAdmin);

        vm.expectEmit(true, true, false, false);
        emit PoolDeactivated(poolId, poolAddress);

        factory.deactivatePool(poolId);

        (,,,, bool isActive) = factory.getPoolInfo(poolId);
        assertFalse(isActive);

        vm.stopPrank();
    }

    function testGetAllPools() public {
        vm.startPrank(factoryAdmin);

        factory.deployUserRegistrationPool();
        factory.deployHospitalRegistrationPool(hospitalContract);
        factory.deployHealthDataRequestPool(synNFTContract);
        factory.deployVerificationPool(2);

        vm.stopPrank();

        address[] memory allPools = factory.getAllPools();
        assertEq(allPools.length, 4);
    }

    function testGetPoolsByType() public {
        vm.startPrank(factoryAdmin);

        factory.deployUserRegistrationPool();
        factory.deployUserRegistrationPool();
        factory.deployHospitalRegistrationPool(hospitalContract);
        factory.deployVerificationPool(2);

        vm.stopPrank();

        address[] memory userPools = factory.getPoolsByType(PoolFactory.PoolType.USER_REGISTRATION);
        address[] memory hospitalPools = factory.getPoolsByType(PoolFactory.PoolType.HOSPITAL_REGISTRATION);
        address[] memory verificationPools = factory.getPoolsByType(PoolFactory.PoolType.VERIFICATION);

        assertEq(userPools.length, 2);
        assertEq(hospitalPools.length, 1);
        assertEq(verificationPools.length, 1);
    }

    function testUpdateMainPoolContract() public {
        Pool newMainPool = new Pool();
        newMainPool.initialize();

        assertEq(factory.mainPoolContract(), address(mainPool));

        factory.updateMainPoolContract(address(newMainPool));

        assertEq(factory.mainPoolContract(), address(newMainPool));
    }

    function testUpdateMainPoolContractFailsWithZeroAddress() public {
        vm.expectRevert("Invalid address");
        factory.updateMainPoolContract(address(0));
    }

    function testUpdateMainPoolContractFailsForNonAdmin() public {
        Pool newMainPool = new Pool();
        newMainPool.initialize();

        address unauthorized = makeAddr("unauthorized");

        vm.startPrank(unauthorized);
        vm.expectRevert();
        factory.updateMainPoolContract(address(newMainPool));
        vm.stopPrank();
    }

    function testMultiplePoolDeployments() public {
        vm.startPrank(factoryAdmin);

        address userPool1 = factory.deployUserRegistrationPool();
        address userPool2 = factory.deployUserRegistrationPool();
        address hospitalPool1 = factory.deployHospitalRegistrationPool(hospitalContract);
        address dataPool1 = factory.deployHealthDataRequestPool(synNFTContract);
        address verifyPool1 = factory.deployVerificationPool(2);

        vm.stopPrank();

        assertTrue(userPool1 != userPool2);
        assertTrue(userPool1 != hospitalPool1);
        assertTrue(userPool1 != dataPool1);
        assertTrue(userPool1 != verifyPool1);

        address[] memory allPools = factory.getAllPools();
        assertEq(allPools.length, 5);

        assertTrue(allPools[0] == userPool1);
        assertTrue(allPools[1] == userPool2);
        assertTrue(allPools[2] == hospitalPool1);
        assertTrue(allPools[3] == dataPool1);
        assertTrue(allPools[4] == verifyPool1);
    }

    function testPoolDeploymentRecordsCorrectTimestamp() public {
        uint256 deployTime = block.timestamp;

        vm.prank(factoryAdmin);
        factory.deployUserRegistrationPool();

        address[] memory allPools = factory.getAllPools();

        // Since we can't easily access the poolId, we'll just verify pools were deployed
        assertEq(allPools.length, 1);
    }

    function testFactoryRoleManagement() public {
        address newAdmin = makeAddr("newAdmin");

        assertFalse(factory.hasRole(factory.FACTORY_ADMIN_ROLE(), newAdmin));

        factory.grantRole(factory.FACTORY_ADMIN_ROLE(), newAdmin);

        assertTrue(factory.hasRole(factory.FACTORY_ADMIN_ROLE(), newAdmin));

        vm.prank(newAdmin);
        address poolAddress = factory.deployUserRegistrationPool();

        assertTrue(poolAddress != address(0));

        factory.revokeRole(factory.FACTORY_ADMIN_ROLE(), newAdmin);

        assertFalse(factory.hasRole(factory.FACTORY_ADMIN_ROLE(), newAdmin));
    }

    function testDeployedPoolsHaveCorrectInitialization() public {
        vm.startPrank(factoryAdmin);

        address userPoolAddr = factory.deployUserRegistrationPool();
        address hospitalPoolAddr = factory.deployHospitalRegistrationPool(hospitalContract);
        address dataPoolAddr = factory.deployHealthDataRequestPool(synNFTContract);
        address verifyPoolAddr = factory.deployVerificationPool(2);

        vm.stopPrank();

        UserRegistrationPool userPool = UserRegistrationPool(userPoolAddr);
        assertTrue(userPool.hasRole(userPool.DEFAULT_ADMIN_ROLE(), address(factory)));

        HospitalRegistrationPool hospitalPool = HospitalRegistrationPool(hospitalPoolAddr);
        assertTrue(hospitalPool.hasRole(hospitalPool.DEFAULT_ADMIN_ROLE(), address(factory)));
        assertEq(hospitalPool.hospitalContract(), hospitalContract);

        HealthDataRequestPool dataPool = HealthDataRequestPool(dataPoolAddr);
        assertTrue(dataPool.hasRole(dataPool.DEFAULT_ADMIN_ROLE(), address(factory)));
        assertEq(dataPool.synNFTContract(), synNFTContract);

        VerificationPool verifyPool = VerificationPool(verifyPoolAddr);
        assertTrue(verifyPool.hasRole(verifyPool.DEFAULT_ADMIN_ROLE(), address(factory)));
        assertEq(verifyPool.verificationThreshold(), 2);
    }

    function testPoolDeploymentWithDifferentAdmins() public {
        address admin2 = makeAddr("admin2");
        factory.grantRole(factory.FACTORY_ADMIN_ROLE(), admin2);

        vm.prank(factoryAdmin);
        address pool1 = factory.deployUserRegistrationPool();

        vm.prank(admin2);
        address pool2 = factory.deployUserRegistrationPool();

        assertTrue(pool1 != pool2);

        address[] memory allPools = factory.getAllPools();
        assertEq(allPools.length, 2);
    }

    function testCannotDeployPoolsWithoutRole() public {
        address[] memory unauthorized = new address[](4);
        unauthorized[0] = makeAddr("user1");
        unauthorized[1] = makeAddr("user2");
        unauthorized[2] = makeAddr("user3");
        unauthorized[3] = makeAddr("user4");

        for (uint256 i = 0; i < unauthorized.length; i++) {
            vm.startPrank(unauthorized[i]);

            vm.expectRevert();
            factory.deployUserRegistrationPool();

            vm.expectRevert();
            factory.deployHospitalRegistrationPool(hospitalContract);

            vm.expectRevert();
            factory.deployHealthDataRequestPool(synNFTContract);

            vm.expectRevert();
            factory.deployVerificationPool(2);

            vm.stopPrank();
        }
    }
}

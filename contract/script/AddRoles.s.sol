// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/pool.sol";
import "../src/pools/PoolFactory.sol";
import "../src/pools/UserRegistrationPool.sol";
import "../src/pools/HospitalRegistrationPool.sol";
import "../src/pools/HealthDataRequestPool.sol";
import "../src/pools/VerificationPool.sol";

contract AddRolesScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        
        address factoryAddress = vm.envAddress("FACTORY_ADDRESS");
        PoolFactory factory = PoolFactory(factoryAddress);
        
        // Get addresses to add from environment
        address factoryAdmin = vm.envOr("FACTORY_ADMIN", address(0));
        address poolManager = vm.envOr("POOL_MANAGER", address(0));
        
        console.log("Factory address:", factoryAddress);
        
        if (factoryAdmin != address(0)) {
            console.log("\n=== Adding Factory Admin ===");
            factory.grantRole(factory.FACTORY_ADMIN_ROLE(), factoryAdmin);
            console.log("Granted FACTORY_ADMIN_ROLE to:", factoryAdmin);
        }
        
        address mainPoolAddress = factory.mainPoolContract();
        Pool mainPool = Pool(mainPoolAddress);
        
        if (poolManager != address(0)) {
            console.log("\n=== Adding Pool Manager ===");
            mainPool.grantRole(mainPool.POOL_MANAGER_ROLE(), poolManager);
            console.log("Granted POOL_MANAGER_ROLE to:", poolManager);
        }
        
        vm.stopBroadcast();
    }
}


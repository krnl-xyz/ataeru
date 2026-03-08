// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/pools/PoolFactory.sol";

contract DeployPoolsScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        
        address factoryAddress = vm.envAddress("FACTORY_ADDRESS");
        PoolFactory factory = PoolFactory(factoryAddress);
        
        address hospitalContract = vm.envOr("HOSPITAL_CONTRACT", address(0));
        address synNFTContract = vm.envOr("SYN_NFT_CONTRACT", address(0));
        uint256 verificationThreshold = vm.envOr("VERIFICATION_THRESHOLD", uint256(2));
        
        console.log("Factory address:", factoryAddress);
        console.log("Hospital contract:", hospitalContract);
        console.log("SynNFT contract:", synNFTContract);
        console.log("Verification threshold:", verificationThreshold);
        
        // Deploy User Registration Pool
        console.log("\n=== Deploying User Registration Pool ===");
        address userPool = factory.deployUserRegistrationPool();
        console.log("User Registration Pool:", userPool);
        
        // Deploy Hospital Registration Pool
        if (hospitalContract != address(0)) {
            console.log("\n=== Deploying Hospital Registration Pool ===");
            address hospitalPool = factory.deployHospitalRegistrationPool(hospitalContract);
            console.log("Hospital Registration Pool:", hospitalPool);
        } else {
            console.log("\nSkipping Hospital Registration Pool (HOSPITAL_CONTRACT not set)");
        }
        
        // Deploy Health Data Request Pool
        if (synNFTContract != address(0)) {
            console.log("\n=== Deploying Health Data Request Pool ===");
            address dataPool = factory.deployHealthDataRequestPool(synNFTContract);
            console.log("Health Data Request Pool:", dataPool);
        } else {
            console.log("\nSkipping Health Data Request Pool (SYN_NFT_CONTRACT not set)");
        }
        
        // Deploy Verification Pool
        console.log("\n=== Deploying Verification Pool ===");
        address verifyPool = factory.deployVerificationPool(verificationThreshold);
        console.log("Verification Pool:", verifyPool);
        
        // Get all deployed pools
        address[] memory allPools = factory.getAllPools();
        console.log("\n=== All Deployed Pools ===");
        for (uint256 i = 0; i < allPools.length; i++) {
            console.log("Pool", i, ":", allPools[i]);
        }
        
        vm.stopBroadcast();
    }
}


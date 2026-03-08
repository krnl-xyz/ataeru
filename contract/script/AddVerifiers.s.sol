// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/pools/UserRegistrationPool.sol";
import "../src/pools/HospitalRegistrationPool.sol";
import "../src/pools/HealthDataRequestPool.sol";
import "../src/pools/VerificationPool.sol";

contract AddVerifiersScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        
        // Get pool addresses from environment
        address userPoolAddress = vm.envOr("USER_POOL_ADDRESS", address(0));
        address hospitalPoolAddress = vm.envOr("HOSPITAL_POOL_ADDRESS", address(0));
        address dataPoolAddress = vm.envOr("DATA_POOL_ADDRESS", address(0));
        address verifyPoolAddress = vm.envOr("VERIFY_POOL_ADDRESS", address(0));
        
        // Get verifier addresses - support both JSON file and comma-separated string
        address[] memory verifiers;
        
        // Try to load from JSON file first
        try vm.readFile("./script/verifiers.json") returns (string memory jsonStr) {
            verifiers = abi.decode(vm.parseJson(jsonStr, ".verifiers"), (address[]));
            console.log("Loaded verifiers from verifiers.json");
        } catch {
            // Fall back to environment variable (comma-separated)
            string memory verifiersStr = vm.envOr("VERIFIERS", string(""));
            if (bytes(verifiersStr).length == 0) {
                console.log("ERROR: VERIFIERS environment variable not set and verifiers.json not found");
                revert("VERIFIERS required");
            }
            verifiers = parseAddresses(verifiersStr);
        }
        
        console.log("Adding", verifiers.length, "verifiers to pools");
        
        // Add verifiers to User Registration Pool
        if (userPoolAddress != address(0)) {
            console.log("\n=== User Registration Pool ===");
            UserRegistrationPool userPool = UserRegistrationPool(userPoolAddress);
            for (uint256 i = 0; i < verifiers.length; i++) {
                userPool.addVerifier(verifiers[i]);
                console.log("Added verifier:", verifiers[i]);
            }
        }
        
        // Add verifiers to Hospital Registration Pool
        if (hospitalPoolAddress != address(0)) {
            console.log("\n=== Hospital Registration Pool ===");
            HospitalRegistrationPool hospitalPool = HospitalRegistrationPool(hospitalPoolAddress);
            for (uint256 i = 0; i < verifiers.length; i++) {
                hospitalPool.addVerifier(verifiers[i]);
                console.log("Added verifier:", verifiers[i]);
            }
        }
        
        // Add verifiers to Health Data Request Pool
        if (dataPoolAddress != address(0)) {
            console.log("\n=== Health Data Request Pool ===");
            HealthDataRequestPool dataPool = HealthDataRequestPool(dataPoolAddress);
            for (uint256 i = 0; i < verifiers.length; i++) {
                dataPool.addVerifier(verifiers[i]);
                console.log("Added verifier:", verifiers[i]);
            }
        }
        
        // Add verifiers to Verification Pool
        if (verifyPoolAddress != address(0)) {
            console.log("\n=== Verification Pool ===");
            VerificationPool verifyPool = VerificationPool(verifyPoolAddress);
            for (uint256 i = 0; i < verifiers.length; i++) {
                verifyPool.addVerifier(verifiers[i]);
                console.log("Added verifier:", verifiers[i]);
            }
        }
        
        vm.stopBroadcast();
    }
    
    function parseAddresses(string memory addressesStr) internal view returns (address[] memory) {
        // Simple parsing: split by comma
        bytes memory strBytes = bytes(addressesStr);
        uint256 count = 1;
        
        // Count commas
        for (uint256 i = 0; i < strBytes.length; i++) {
            if (strBytes[i] == bytes1(",")) {
                count++;
            }
        }
        
        address[] memory addresses = new address[](count);
        uint256 currentIndex = 0;
        uint256 start = 0;
        
        // Parse addresses
        for (uint256 i = 0; i <= strBytes.length; i++) {
            if (i == strBytes.length || strBytes[i] == bytes1(",")) {
                // Extract address substring
                uint256 len = i - start;
                bytes memory addrBytes = new bytes(len);
                for (uint256 j = 0; j < len; j++) {
                    addrBytes[j] = strBytes[start + j];
                }
                
                // Convert to address using vm.parseAddress
                string memory addrStr = string(addrBytes);
                addresses[currentIndex] = vm.parseAddress(addrStr);
                currentIndex++;
                start = i + 1;
            }
        }
        
        return addresses;
    }
}

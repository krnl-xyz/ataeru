// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/pools/HospitalRegistrationPool.sol";

contract AddRegulatorsScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        
        address hospitalPoolAddress = vm.envAddress("HOSPITAL_POOL_ADDRESS");
        HospitalRegistrationPool hospitalPool = HospitalRegistrationPool(hospitalPoolAddress);
        
        // Get regulator addresses from environment (comma-separated)
        string memory regulatorsStr = vm.envOr("REGULATORS", string(""));
        
        if (bytes(regulatorsStr).length == 0) {
            console.log("ERROR: REGULATORS environment variable not set");
            revert("REGULATORS required");
        }
        
        address[] memory regulators = parseAddresses(regulatorsStr);
        
        console.log("Adding", regulators.length, "regulators to Hospital Registration Pool");
        console.log("Pool address:", hospitalPoolAddress);
        
        for (uint256 i = 0; i < regulators.length; i++) {
            hospitalPool.addRegulator(regulators[i]);
            console.log("Added regulator:", regulators[i]);
        }
        
        vm.stopBroadcast();
    }
    
    function parseAddresses(string memory addressesStr) internal view returns (address[] memory) {
        bytes memory strBytes = bytes(addressesStr);
        uint256 count = 1;
        
        for (uint256 i = 0; i < strBytes.length; i++) {
            if (strBytes[i] == bytes1(",")) {
                count++;
            }
        }
        
        address[] memory addresses = new address[](count);
        uint256 currentIndex = 0;
        uint256 start = 0;
        
        for (uint256 i = 0; i <= strBytes.length; i++) {
            if (i == strBytes.length || strBytes[i] == bytes1(",")) {
                bytes memory addrBytes = new bytes(i - start);
                for (uint256 j = start; j < i; j++) {
                    addrBytes[j - start] = strBytes[j];
                }
                addresses[currentIndex] = vm.parseAddress(string(addrBytes));
                currentIndex++;
                start = i + 1;
            }
        }
        
        return addresses;
    }
}


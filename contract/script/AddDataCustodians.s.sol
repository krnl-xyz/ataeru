// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/pools/HealthDataRequestPool.sol";

contract AddDataCustodiansScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        
        address dataPoolAddress = vm.envAddress("DATA_POOL_ADDRESS");
        HealthDataRequestPool dataPool = HealthDataRequestPool(dataPoolAddress);
        
        // Get data custodian addresses from environment (comma-separated)
        string memory custodiansStr = vm.envOr("DATA_CUSTODIANS", string(""));
        
        if (bytes(custodiansStr).length == 0) {
            console.log("ERROR: DATA_CUSTODIANS environment variable not set");
            revert("DATA_CUSTODIANS required");
        }
        
        address[] memory custodians = parseAddresses(custodiansStr);
        
        console.log("Adding", custodians.length, "data custodians to Health Data Request Pool");
        console.log("Pool address:", dataPoolAddress);
        
        for (uint256 i = 0; i < custodians.length; i++) {
            dataPool.addDataCustodian(custodians[i]);
            console.log("Added data custodian:", custodians[i]);
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


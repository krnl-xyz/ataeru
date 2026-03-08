// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/pools/VerificationPool.sol";

contract AddAuditorsScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        
        address verifyPoolAddress = vm.envAddress("VERIFY_POOL_ADDRESS");
        VerificationPool verifyPool = VerificationPool(verifyPoolAddress);
        
        // Get auditor addresses from environment (comma-separated)
        string memory auditorsStr = vm.envOr("AUDITORS", string(""));
        
        if (bytes(auditorsStr).length == 0) {
            console.log("ERROR: AUDITORS environment variable not set");
            revert("AUDITORS required");
        }
        
        address[] memory auditors = parseAddresses(auditorsStr);
        
        console.log("Adding", auditors.length, "auditors to Verification Pool");
        console.log("Pool address:", verifyPoolAddress);
        
        for (uint256 i = 0; i < auditors.length; i++) {
            verifyPool.addAuditor(auditors[i]);
            console.log("Added auditor:", auditors[i]);
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


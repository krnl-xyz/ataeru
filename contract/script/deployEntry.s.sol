// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import {Script} from "forge-std/Script.sol";

import {EntryPoint} from "../src/core/EntryPoint.sol";
import {HospitalRequestContract} from "../src/core/HospitalRequestContract.sol";
import {HospitalRequestFactoryContract} from "../src/core/HospitalRequestFactory.sol";
import "forge-std/console.sol";

contract DeployScript is Script {
    EntryPoint entry;
    HospitalRequestContract requestContract;
    HospitalRequestFactoryContract requestFactory;

    address public hospitalAddress = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;
    uint256 public maxdonors = 50;
    address tokenAddress = 0x70997970C51812dc3A010C7d01b50e0d17dc79C8;
    uint256 stepsToComplete = 9;
    uint256 _price = 6;
    address nftReceiptent = 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC;

    function run() public {
        //   vm.createSelectFork(vm.rpcUrl("basechain"));
        vm.startBroadcast();

        requestContract = new HospitalRequestContract();
        requestFactory = new HospitalRequestFactoryContract(
            address(requestContract),
            address(hospitalAddress),
            maxdonors
        );

        address _tokenAuthorityPublicKey = address(0);
        entry = new EntryPoint(
            address(requestFactory),
            _tokenAuthorityPublicKey
        );

        console.log("NEXT_PUBLIC_ENTRY_POINT_ADDRESS=", address(entry));
    }
}

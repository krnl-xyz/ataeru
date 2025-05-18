// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

abstract contract HRSDataStorage {
    struct RegistrationStatus {
        bool isRegistered;
    }
    mapping(address user => EnumerableSet.Bytes32Set) internal registeredSets;
    mapping(bytes32 userSetKey => EnumerableSet.AddressSet)
        internal _setMembers;
    mapping(address user => mapping(bytes32 userSetKey => RegistrationStatus))
        internal registrationStatus;
}

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

interface IFixedPointOracle {
    function price() external view returns (uint256);
}

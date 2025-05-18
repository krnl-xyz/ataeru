// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "../Interface/IFixedPointedOracle.sol";

contract FixedPriceOracle is IFixedPointOracle {
    uint256 public price;

    event PriceSet(uint256 indexed timestamp, uint256 price);

    constructor(uint256 _price) {
        price = _price;
    }

    function setPrice(uint256 _price) external {
        price = _price;
        emit PriceSet(block.timestamp, _price);
    }

    // function getPrice() public returns(uint256) {
    //     returns price ;
    // }
}

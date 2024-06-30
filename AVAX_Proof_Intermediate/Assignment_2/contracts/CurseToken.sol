// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//import "hardhat/console.sol";

contract CurseToken {

    // Public variables here
    string public name = "Curse";
    string public symbol = "CRS";
    uint256 public totalSupply = 0;

    // Mapping variable here
    mapping(address => uint256) public balances;

    function getBalance() public view returns (uint256) {
        return balances[msg.sender];
    }

    // Mint function
    function mint(uint256 amount) public {
        address to = msg.sender;
        totalSupply += amount;
        balances[to] += amount;
    }

    // Burn function
    function burn(uint256 amount) public {
        address from = msg.sender;
        require(balances[from] >= amount, "Not enough balance to burn");
        totalSupply -= amount;
        balances[from] -= amount;
    }

}
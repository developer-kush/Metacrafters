// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/*
       REQUIREMENTS
    1. Your contract will have public variables that store the details about your coin (Token Name, Token Abbrv., Total Supply)
    2. Your contract will have a mapping of addresses to balances (address => uint)
    3. You will have a mint function that takes two parameters: an address and a value. 
       The function then increases the total supply by that number and increases the balance 
       of the “sender” address by that amount
    4. Your contract will have a burn function, which works the opposite of the mint function, as it will destroy tokens. 
       It will take an address and value just like the mint functions. It will then deduct the value from the total supply 
       and from the balance of the “sender”.
    5. Lastly, your burn function should have conditionals to make sure the balance of "sender" is greater than or equal 
       to the amount that is supposed to be burned.
*/

contract CurseToken {

    string public name = "Curse";
    string public symbol = "CRS";
    uint256 public totalSupply = 0;

    mapping(address => uint256) public balances;

    function mint(address to, uint256 amount) public {
        uint256 newTotalSupply = totalSupply + amount;
        require(amount >= 0, "Amount should be positive");
        assert(newTotalSupply >= totalSupply); // Ensuring We haven't hit an overflow error

        totalSupply = newTotalSupply;
        balances[to] += amount;
    }

    function burn(address from, uint256 amount) public {
        require(balances[from] >= amount, "Not enough balance to burn");

        totalSupply -= amount;
        balances[from] -= amount;

        if (balances[from] < 0) {
            revert("Invalid state: balance is negative");
        }
    }
}

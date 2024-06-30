// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CurseToken {
    string public name = "Curse";
    string public symbol = "CRS";
    uint8 public decimals = 18;
    uint256 public totalSupply;

    address public owner;

    mapping(address => uint256) public balances;
    mapping(address => mapping(address => uint256)) public allowance;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    constructor() {
        owner = msg.sender;
    }

    function balanceOf(address account) public view returns (uint256) {
        return balances[account];
    }

    function transfer(address to, uint256 amount) public returns (bool) {
        require(to != address(0), "Invalid address");
        require(balances[msg.sender] >= amount, "Not enough balance");

        balances[msg.sender] -= amount;
        balances[to] += amount;
        emit Transfer(msg.sender, to, amount);
        return true;
    }

    function approve(address spender, uint256 amount) public returns (bool) {
        require(spender != address(0), "Invalid address");

        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(address from, address to, uint256 amount) public returns (bool) {
        require(from != address(0), "Invalid address");
        require(to != address(0), "Invalid address");
        require(balances[from] >= amount, "Not enough balance");
        require(allowance[from][msg.sender] >= amount, "Allowance exceeded");

        balances[from] -= amount;
        balances[to] += amount;
        allowance[from][msg.sender] -= amount;
        emit Transfer(from, to, amount);
        return true;
    }

    function mint(uint256 amount) public onlyOwner {
        require(amount > 0, "Amount should be greater than zero");

        totalSupply += amount;
        balances[owner] += amount;
        emit Transfer(address(0), owner, amount);
    }

    function burn(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Not enough balance to burn");

        totalSupply -= amount;
        balances[msg.sender] -= amount;
        emit Transfer(msg.sender, address(0), amount);
    }
}

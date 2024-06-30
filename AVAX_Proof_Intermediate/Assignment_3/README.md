# CurseToken ERC20 Token Contract

## Overview

CurseToken is an ERC20-compliant token contract implemented in Solidity. This contract defines a basic token with the following features:
- Only the contract owner can mint new tokens.
- Any user can transfer tokens to another address.
- Any user can burn their own tokens.

## Contract Details

- **Token Name**: Curse
- **Token Symbol**: CRS
- **Decimals**: 18
- **Total Supply**: Initially 0, can be increased by the owner through minting.

## Functions

### `constructor()`
Initializes the contract and sets the deployer as the owner.

### `balanceOf(address account) public view returns (uint256)`
Returns the balance of a specific address.

### `transfer(address to, uint256 amount) public returns (bool)`
Transfers tokens from the caller's address to another address.

### `approve(address spender, uint256 amount) public returns (bool)`
Allows another address to spend a specified amount of tokens on behalf of the caller.

### `transferFrom(address from, address to, uint256 amount) public returns (bool)`
Allows a spender to transfer tokens from one address to another.

### `mint(uint256 amount) public onlyOwner`
Creates new tokens and assigns them to the owner's address. Only the owner can call this function.

### `burn(uint256 amount) public`
Destroys a specified amount of tokens from the caller's address.

## Events

### `Transfer(address indexed from, address indexed to, uint256 value)`
Logs token transfers, including minting and burning.

### `Approval(address indexed owner, address indexed spender, uint256 value)`
Logs approvals of allowances for spending tokens.

## Deployment

1. **Compile the contract**:
   ```bash
   npx hardhat compile
   ```

2. **Deploy the contract**:
   Create a deployment script (`scripts/deploy.js`) and run it:
   ```bash
   npx hardhat run scripts/deploy.js --network <your-network>
   ```

## Interacting with the Contract

You can interact with the deployed contract using tools like [Remix](https://remix.ethereum.org/) or [Hardhat](https://hardhat.org/).
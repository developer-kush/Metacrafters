# CurseToken Smart Contract

## Overview

This smart contract is my submission for the Metacrafters ETH Proof: Beginner EVM Course. The contract implements a basic token system with minting and burning functionalities. It includes public variables to store token details, a mapping to track balances, events for logging actions, and functions to mint and burn tokens, as well as to check user balances.

## Smart Contract Details

The smart contract, `CurseToken`, consists of the following features:

1. **Public Variables**:
   - `name`: Stores the name of the token, which is set to "Curse".
   - `symbol`: Stores the abbreviation of the token, which is set to "CRS".
   - `totalSupply`: Stores the total supply of tokens.

2. **Mapping**:
   - `balances`: Maps addresses to their respective token balances.

3. **Events**:
   - `Mint`: Logs the minting of tokens.
   - `Burn`: Logs the burning of tokens.

4. **Functions**:
   - `mint(address to, uint256 amount)`: Increases the total supply of tokens and the balance of the specified address by the given amount. Emits a `Mint` event.
   - `burn(address from, uint256 amount)`: Decreases the total supply of tokens and the balance of the specified address by the given amount, provided the address has enough tokens to burn. Emits a `Burn` event.

## Explanation

### Public Variables

- **Token Name (`name`)**: This variable stores the name of the token, which is set to "Curse".
- **Token Abbreviation (`symbol`)**: This variable stores the abbreviation of the token, which is set to "CRS".
- **Total Supply (`totalSupply`)**: This variable tracks the total supply of the tokens. Initially, it is set to 0.

### Mapping

- **Balances (`balances`)**: This mapping associates each address with its corresponding token balance. The key is an address, and the value is the balance of tokens that address holds.

### Functions

- **Mint Function (`mint`)**: This function increases the total supply of tokens by the specified amount and credits the same amount to the balance of the given address. It also emits a `Mint` event.
  
- **Burn Function (`burn`)**: This function decreases the total supply of tokens by the specified amount and deducts the same amount from the balance of the given address. The function checks if the address has enough tokens before proceeding with the burn. It also emits a `Burn` event.

## Usage

This contract can be tested and ran on Remix IDE.
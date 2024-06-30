## Degen Token

`DegenToken` is an ERC20-compatible token deployed on the Avalanche network. This contract allows for basic token functionalities including transferring tokens, approving tokens for spending by other addresses, minting new tokens, burning tokens, and redeeming tokens for prizes.

---

## Contract Details

- **Token Name:** Degen
- **Token Symbol:** DGN
- **Decimals:** 18
- **Initial Supply:** Defined at deployment
- **Owner:** The address that deploys the contract

---

## Features

- **Minting:** Only the contract owner can mint new tokens.
- **Burning:** Any token holder can burn their own tokens.
- **Transferring:** Token holders can transfer tokens to other addresses.
- **Approving:** Token holders can approve other addresses to spend their tokens.
- **Transferring from Approved:** Allows spending tokens on behalf of an address that has approved the spender.
- **Redeeming:** Token holders can redeem tokens for prizes by burning them.

---

## Functions

### balanceOf

```solidity
function balanceOf(address account) public view returns (uint256)
```

Returns the balance of the specified address.

### transfer

```solidity
function transfer(address to, uint256 amount) public returns (bool)
```

Transfers tokens from the sender's account to the specified address.

### approve

```solidity
function approve(address spender, uint256 amount) public returns (bool)
```

Approves the specified address to spend the specified amount of tokens on behalf of the sender.

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 amount) public returns (bool)
```

Transfers tokens from one address to another, using an allowance mechanism.

### mint

```solidity
function mint(uint256 amount) public onlyOwner
```

Mints new tokens to the owner's address. Only callable by the owner.

### burn

```solidity
function burn(uint256 amount) public
```

Burns the specified amount of tokens from the sender's account.

### redeem

```solidity
function redeem(uint256 prizeCost) public returns (bool)
```

Redeems tokens for prizes by burning the specified amount from the sender's account.

---

## Events

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 value)
```

Emitted when tokens are transferred from one account to another.

### Approval

```solidity
event Approval(address indexed owner, address indexed spender, uint256 value)
```

Emitted when an address is approved to spend tokens on behalf of another address.

---

## Deployment on Avalanche

1. **Install Dependencies:**

    ```bash
    npm install -g truffle
    npm install @truffle/hdwallet-provider
    ```

2. **Initialize Truffle Project:**

    ```bash
    mkdir DegenToken
    cd DegenToken
    truffle init
    ```

3. **Configure `truffle-config.js`:**

    ```javascript
    const HDWalletProvider = require('@truffle/hdwallet-provider');
    const mnemonic = 'your twelve word seed phrase'; // Replace with your Avalanche wallet mnemonic

    module.exports = {
      networks: {
        development: {
          host: "127.0.0.1",
          port: 7545,
          network_id: "*" // Match any network id
        },
        avalanche: {
          provider: () => new HDWalletProvider({
            mnemonic: {
              phrase: mnemonic
            },
            providerOrUrl: 'https://api.avax.network/ext/bc/C/rpc',
            chainId: 43114
          }),
          network_id: 43114,
          gas: 4500000,
          gasPrice: 225000000000
        }
      },
      compilers: {
        solc: {
          version: "^0.8.0"
        }
      }
    };
    ```

4. **Create Contract File:**

    Create a file `contracts/DegenToken.sol` and paste the contract code.

5. **Create Migration Script:**

    Create a migration script `migrations/2_deploy_contracts.js`:

    ```javascript
    const DegenToken = artifacts.require("DegenToken");

    module.exports = function (deployer) {
      deployer.deploy(DegenToken, 1000000); // Adjust the initial supply as needed
    };
    ```

6. **Compile and Deploy:**

    ```bash
    truffle compile
    truffle migrate --network avalanche
    ```

---

## Interacting with the Contract

You can interact with the deployed contract using Truffle console, Remix, or any other tool connected to the Avalanche network. Use the provided functions to mint, transfer, approve, burn, and redeem tokens as needed.

---

## Security Considerations

- Ensure the mnemonic is kept secure and not shared.
- Test thoroughly on the Avalanche Fuji testnet before deploying to the mainnet.
- Consider conducting a security audit of the smart contract code.

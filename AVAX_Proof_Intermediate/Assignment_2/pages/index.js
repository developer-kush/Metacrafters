import {useState, useEffect, useRef} from "react";
import {ethers} from "ethers";
import curse_abi from "../artifacts/contracts/CurseToken.sol/CurseToken.json";

export default function HomePage() {

  const valRef = useRef();

  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [curse, setCurse] = useState(undefined);
  const [balance, setBalance] = useState(undefined);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const curseABI = curse_abi.abi;

  const getWallet = async() => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({method: "eth_accounts"});
      handleAccount(account);
    }
  }

  const handleAccount = (account) => {
    if (account) {
      console.log ("Account connected: ", account);
      setAccount(account);
    }
    else {
      console.log("No account found");
    }
  }

  const connectAccount = async() => {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }
  
    const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
    handleAccount(accounts);
    
    // once wallet is set we can get a reference to our deployed contract
    getCurseContract();
  };

  const getCurseContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const curseContract = new ethers.Contract(contractAddress, curseABI, signer);
 
    setCurse(curseContract);
  }

  const getBalance = async() => {
    if (curse) {
      setBalance((await curse.getBalance()).toNumber());
    }
  }

  const mint = async(amount) => {
    if (curse) {
      let tm = await curse.mint(amount);
      await tm.wait();
      getBalance();
    }
  }

  const burn = async(amount) => {
    try {
      if (curse) {
        let tm = await curse.burn(amount);
        await tm.wait();
        getBalance();
      }
    } catch (e) {
      alert(e.message);
    }
  }

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this Curse Bank.</p>
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return <button onClick={connectAccount}>Please connect your Metamask wallet</button>
    }

    if (balance == undefined) {
      getBalance();
    }

    return (
      <div>
        <p>Your Account: {account}</p>
        <p>Your Balance: {balance}</p>
        <input type="number" placeholder="Amount" defaultValue={0} onChange={e => {valRef.current = e.target.value}}></input>
        <button onClick={() => mint(valRef.current)}>Mint</button>
        <button onClick={() => burn(valRef.current)}>burn</button>
      </div>
    )
  }

  useEffect(() => {getWallet();}, []);

  return (
    <main className="container">
      <header><h1>Welcome to the Curse Bank!</h1></header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center
        }
      `}
      </style>
    </main>
  )
}
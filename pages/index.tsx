import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button } from '../@/components/ui/button';
import { useReadContract } from 'wagmi'
import { useAccount } from 'wagmi'

const abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_gumballinit",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_gumballadd",
        "type": "uint256"
      }
    ],
    "name": "addFreshGumballs",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getGumball",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getNumberOfGumballs",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;
const address = "0x6df511640a9ed4615A4679246E561f711FABDD61"



const Home: NextPage = () => {
  const  result  = useReadContract({
    abi: abi,
    address: address,
    functionName: 'getNumberOfGumballs',
})
const account = useAccount();
  return (
    <main>
      <div className = "flex items-center justify-center p-2">
        <ConnectButton/>
       </div>
      <div className = "flex items-center justify-center m-2">
        <Button> 
        Current Gumball Count: 
        {result.data?.toString()}
        </Button>
      </div> 
      <div className = "flex items-center justify-center m-2">
        HELLOOO
      </div>
  </main>
   
  );
};

export default Home;

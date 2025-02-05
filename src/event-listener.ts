import { ethers } from 'ethers';

// Load environment variables
const RPC_URL = "https://rpc.esync.network";

// Ethereum Provider & Wallet
const ethProvider = new ethers.JsonRpcProvider(RPC_URL);
const SWAP_CONTRACT = "0xc88254EE5f92fc148d235fD666B4fEd3386b71bd";

// Ethereum Contract ABI (Event Listener)
const ethABI = [
  "event Swapped(address indexed, uint256 actAmount, uint256 ecsAmount)"
];

const ethContract = new ethers.Contract(SWAP_CONTRACT, ethABI, ethProvider);

console.log("🔄 Listening for Swapped events...");

ethContract.on("Swapped", async (address, actAmount, ecsAmount) => {
  console.log(`📡 New swap detected: ${address}: ${ethers.formatEther(actAmount)} ACT`);
});


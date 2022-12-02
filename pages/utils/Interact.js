const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
import contractABI from "./contract-abi.json";
import ALCHEMY_URI from "../../ALCHEMY_URL";
// const alchemyurl = process.env.ALCHEMY_URL;
const web3 = createAlchemyWeb3(ALCHEMY_URI);
const contractAddress = "0x4d313b8047Bbf71347cC66f1eB27A8Bae5568b38";

const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

export default contractInstance;

export const getBalance = async (address) => {
  const balance = await contractInstance.methods.balanceOf(address).call();
  return balance;
};

export const totalSupply = async () => {
  const total = await contractInstance.methods.totalSupply().call();
  return total;
};

export const transferToken = async () => {
  const transfer = await contractInstance.methods.transfer();
};

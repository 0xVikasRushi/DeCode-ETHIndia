import contractABI from "./contract-abi.json";
const ALCHEMY_URI = process.env.NEXT_PUBLIC_ALCHEMY_URI;
const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
const Web3 = require("web3");
const Web3js = new Web3(new Web3.providers.HttpProvider(ALCHEMY_URI));

// ? transferring 1 token

const tokenAddress = "0x4d313b8047Bbf71347cC66f1eB27A8Bae5568b38";
const fromAddress = "0x8b65E3846BDecfD20b3a767A5C9C526B63dE6212";

let contract = new Web3js.eth.Contract(contractABI, tokenAddress, {
  from: fromAddress,
});

// ? Getting Balance of current users
export const getBalance = async (address) => {
  const balance = await contract.methods.balanceOf(address).call();
  return balance;
};

export function sendErcToken(toAddress) {
  // let amount = Web3js.utils.toHex(Web3js.utils.toWei("1")); //1 DEMO Token
  // ? amount = 1000000000000000000
  let amount = 1;
  let data = contract.methods.transfer(toAddress, amount).encodeABI();
  let txObj = {
    gas: Web3js.utils.toHex(100000),
    to: tokenAddress,
    value: "0x00",
    data: data,
    from: fromAddress,
  };

  Web3js.eth.accounts.signTransaction(txObj, privateKey, (err, signedTx) => {
    if (err) {
      return callback(err);
    } else {
      console.log(signedTx);

      return Web3js.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        (err, res) => {
          if (err) {
            console.log(err);
          } else {
            console.log(res);
          }
        }
      );
    }
  });
}
const winnerAddress = [
  "0x517fEB9e6b5e3E55725a0C229E778CF26eE3e69D",
  "0xD7588A0A44A992DA7dfc102DDe3EF79102bBA88e",
  "0x53c874F64F00EB609b7493eB5Db98924dd49A1dA",
];
export const bulkTransfer = () => {
  // * : need set timeout of 45 sec after first transaction
  let i = 0;
  setTimeout(() => {
    // ? only run one time
    sendErcToken(winnerAddress[i]);
    const interval = setInterval(() => {
      sendErcToken(winnerAddress[i]);
      console.log("completed trx " + i);
      i++;
      if (i === 3) {
        clearInterval(interval);
      }
    }, 35000);
  }, 500);
};

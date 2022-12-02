import ALCHEMY_URI from "../../ALCHEMY_URL";
import PRIVATE_KEY from "../../PRIVATE_KEY";
import contractABI from "../utils/contract-abi.json";
const Web3 = require("web3");
const Web3js = new Web3(new Web3.providers.HttpProvider(ALCHEMY_URI));

const privateKey = PRIVATE_KEY;
const tokenAddress = "0x4d313b8047Bbf71347cC66f1eB27A8Bae5568b38";

//  ? changing toaddress and check once
let toAddress = "0x9aBaA5bc433fFA76609ab3003580D84Bd1Bacc47";

let fromAddress = "0x8b65E3846BDecfD20b3a767A5C9C526B63dE6212"; // your wallet

let contract = new Web3js.eth.Contract(contractABI, tokenAddress, {
  from: fromAddress,
});
// ? transferring 1 token
let amount = Web3js.utils.toHex(Web3js.utils.toWei("1")); //1 DEMO Token
let data = contract.methods.transfer(toAddress, amount).encodeABI();

function sendErcToken() {
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

export default sendErcToken;

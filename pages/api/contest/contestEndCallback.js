"use strict";
// Copyright 2022 Cartesi Pte. Ltd.

function hx(hexx) {
  var hex = hexx.toString(); //force conversion
  var str = "";
  for (var i = 0; i < hex.length; i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const ethers_1 = require("ethers");
const connect_1 = require("../../../lib/cartesi-fc/dist/src/connect");
const rollups_1 = require("../../../lib/cartesi-fc/dist/src/rollups");
import axios from "axios";
const builder = (yargs) => {
  // args regarding connecting to provider
  const connectArgs = (0, connect_1.builder)(yargs, true);
  // args regarding connecting to rollups
  const rollupsArgs = (0, rollups_1.builder)(connectArgs);
  // this command args
  return rollupsArgs.option("payload", {
    describe: "Input payload to send",
    type: "string",
    demandOption: true,
  });
};
/**
 * Retrieve InputKeys from an InputAddedEvent
 * @param receipt Blockchain transaction receipt
 * @returns input identification keys
 */
const getInputKeys = (receipt) => {
  var _a;
  // get InputAddedEvent from transaction receipt
  const event =
    (_a = receipt.events) === null || _a === void 0
      ? void 0
      : _a.find((e) => e.event === "InputAdded");
  if (!event) {
    throw new Error(
      `InputAdded event not found in receipt of transaction ${receipt.transactionHash}`
    );
  }
  const inputAdded = event;
  return {
    epoch_index: inputAdded.args.epochNumber.toNumber(),
    input_index: inputAdded.args.inputIndex.toNumber(),
  };
};
const handler = async ({ payload }) => {
  // const { rpc, payload, mnemonic, accountIndex } = args;
  const rpc =
    "https://eth-goerli.g.alchemy.com/v2/diD3orbQI6a4y5wRNX8DWqGdRnUVvEB-";
  payload = JSON.stringify(payload);
  console.log(payload);
  const mnemonic =
    "taxi pelican ripple submit pudding option math kite defy aim fold always";
  const accountIndex = 1;
  const address = "0x4d7727E4f76D45ecb46CEe7299Dc3E032B74D21e";
  let args = { rpc, payload, mnemonic, accountIndex, address };
  // connect to provider
  console.log(`connecting to ${rpc}`);
  const { provider, signer } = (0, connect_1.connect)(
    rpc,
    mnemonic,
    accountIndex
  );
  const network = await provider.getNetwork();
  console.log(`connected to chain ${network.chainId}`);
  // connect to rollups,
  const { inputContract } = await (0, rollups_1.rollups)(
    network.chainId,
    signer || provider,
    args
  );
  const signerAddress = await inputContract.signer.getAddress();
  console.log(`using account "${signerAddress}"`);
  // use message from command line option, or from user prompt
  console.log(`sending "${payload}"`);
  // convert string to input bytes (if it's not already bytes-like)
  const inputBytes = ethers_1.ethers.utils.isBytesLike(payload)
    ? payload
    : ethers_1.ethers.utils.toUtf8Bytes(payload);
  // send transaction
  const tx = await inputContract.addInput(inputBytes);
  console.log(`transaction: ${tx.hash}`);
  console.log("waiting for confirmation...");
  const receipt = await tx.wait(1);
  // find reference to notice from transaction receipt
  const inputKeys = (0, getInputKeys)(receipt);
  console.log(
    `input ${inputKeys.input_index} added to epoch ${inputKeys.epoch_index}`
  );
};

export default async function contestEndCallback(
  { query: { contestName } },
  res
) {
  let contestData = await axios.get(
    "http://localhost:3000/api/contest/getContestDetails?contestName=" +
      contestName
  );
  contestData = contestData.data.currentContest;
  console.log(contestData);
  let submissions = contestData["submissions"];
  submissions.sort((a, b) => {
    let aSolved = a["booleanArray"].filter((ele) => ele).length;
    let bSolved = b["booleanArray"].filter((ele) => ele).length;

    if (aSolved > bSolved) return -1;
    if (aSolved < bSolved) return 1;

    if (a["totalTime"] < b["totalTime"]) return -1;
    else return 1;
  });
  console.log(submissions);
  console.log("====");
  submissions = submissions.map((ele, idx) => {
    return {
      ...ele,
      place: idx + 1,
    };
  });
  console.log(submissions);
  await handler({
    payload: submissions.map((ele) => {
      return {
        rating: ele.rating,
        place: ele.place,
      };
    }),
  });
  await sleep(600000);

  const gql = process.env.CARTESI_GRAPHQL_URI;
  let notices = await axios.post(gql, {
    query:
      "query  { notices { nodes { id index payload input { index epoch { index } } } } }",
  });
  notices = notices.data;

  let latestNoticeIndex = notices["data"]["notices"]["nodes"].length;

  let latestPayload =
    notices["data"]["notices"]["nodes"][latestNoticeIndex - 1]["payload"];

  latestPayload = latestPayload.replace("0x", "");

  let dat = JSON.parse(hx(latestPayload));

  let promisesArr = dat.map((ele, idx) => {
    let origRating = ele.rating + ele.delta;
    let ethAdress = submissions[idx]["ethAdress"];
    return axios.get(
      "http://localhost:3000/api/users/updateUserRating?newRating=" +
        origRating +
        "&ethAdress=" +
        ethAdress
    );
  });

  await Promise.all(promisesArr);

  res.json({ status: "OK" });
}

"use strict";
// Copyright 2022 Cartesi Pte. Ltd.
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.describe = exports.command = void 0;
const notices_1 = require("../../graphql/notices");
const connect_1 = require("../../connect");
const rollups_1 = require("../../rollups");
exports.command = "validate";
exports.describe = "Validate notice given its id";
const DEFAULT_URL = "http://localhost:4000/graphql";
const builder = (yargs) => {
    // args regarding connecting to provider
    const connectArgs = (0, connect_1.builder)(yargs, true);
    // args regarding connecting to rollups
    const rollupsArgs = (0, rollups_1.builder)(connectArgs);
    // this command args
    return rollupsArgs
        .option("url", {
        describe: "Reader URL",
        type: "string",
        default: DEFAULT_URL,
    })
        .option("id", {
        describe: "Notice ID",
        type: "string",
        requiresArg: true,
    });
};
exports.builder = builder;
const handler = async (args) => {
    const { url, id, rpc, mnemonic, accountIndex } = args;
    // wait for notices to appear in reader
    console.log(`retrieving notice "${id}" along with proof`);
    const notice = await (0, notices_1.getNotice)(url, id);
    if (!notice.proof) {
        console.log(`notice "${id}" has no associated proof yet`);
        return;
    }
    // connect to provider
    console.log(`connecting to ${rpc}`);
    const { provider, signer } = (0, connect_1.connect)(rpc, mnemonic, accountIndex);
    const network = await provider.getNetwork();
    console.log(`connected to chain ${network.chainId}`);
    // connect to rollups,
    const { outputContract } = await (0, rollups_1.rollups)(network.chainId, signer || provider, args);
    const signerAddress = await outputContract.signer.getAddress();
    console.log(`using account "${signerAddress}"`);
    // send transaction to validate notice
    console.log(`validating notice "${id}"`);
    const proof = {
        ...notice.proof,
        epochIndex: notice.input.epoch.index,
        inputIndex: notice.input.index,
        outputIndex: notice.index,
    };
    try {
        // console.log(`Would check: ${JSON.stringify(proof)}`);
        const ret = await outputContract.validateNotice(notice.payload, proof);
        console.log(`notice is valid! (ret="${ret}")`);
    }
    catch (e) {
        console.log(`COULD NOT VALIDATE NOTICE: ${JSON.stringify(e)}`);
    }
};
exports.handler = handler;

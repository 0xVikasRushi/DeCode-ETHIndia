"use strict";
// Copyright 2022 Cartesi Pte. Ltd.
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.describe = exports.command = void 0;
const vouchers_1 = require("../../graphql/vouchers");
const connect_1 = require("../../connect");
const rollups_1 = require("../../rollups");
exports.command = "execute";
exports.describe = "Execute voucher given its id";
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
        describe: "Voucher ID",
        type: "string",
        requiresArg: true,
    });
};
exports.builder = builder;
const handler = async (args) => {
    const { url, id, rpc, mnemonic, accountIndex } = args;
    // wait for vouchers to appear in reader
    console.log(`retrieving voucher "${id}" along with proof`);
    const voucher = await (0, vouchers_1.getVoucher)(url, id);
    if (!voucher.proof) {
        console.log(`voucher "${id}" has no associated proof yet`);
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
    // send transaction to execute voucher
    console.log(`executing voucher "${id}"`);
    const proof = {
        ...voucher.proof,
        epochIndex: voucher.input.epoch.index,
        inputIndex: voucher.input.index,
        outputIndex: voucher.index,
    };
    try {
        // console.log(`Would check: ${JSON.stringify(proof)}`);
        const tx = await outputContract.executeVoucher(voucher.destination, voucher.payload, proof);
        const receipt = await tx.wait();
        console.log(`voucher executed! (tx="${tx.hash}")`);
        if (receipt.events) {
            console.log(`resulting events: ${JSON.stringify(receipt.events)}`);
        }
    }
    catch (e) {
        console.log(`COULD NOT EXECUTE VOUCHER: ${JSON.stringify(e)}`);
    }
};
exports.handler = handler;

"use strict";
// Copyright 2022 Cartesi Pte. Ltd.
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = exports.builder = void 0;
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use
// this file except in compliance with the License. You may obtain a copy of the
// License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software distributed
// under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
// CONDITIONS OF ANY KIND, either express or implied. See the License for the
// specific language governing permissions and limitations under the License.
const providers_1 = require("@ethersproject/providers");
const ethers_1 = require("ethers");
const HARDHAT_DEFAULT_MNEMONIC = "test test test test test test test test test test test junk";
const HARDHAT_DEFAULT_RPC_URL = "http://localhost:8545";
/**
 * Validator for mnemonic value
 * @param value mnemonic words separated by space
 * @returns true if valid, false if invalid
 */
const mnemonicValidator = (value) => {
    try {
        ethers_1.ethers.Wallet.fromMnemonic(value);
        return true;
    }
    catch (e) {
        return "Invalid mnemonic";
    }
};
/**
 * Builder for provider connection
 * @param yargs yargs instance
 * @param transactional indicate if will need to sign transactions, hence MNEMONIC is required
 * @returns Argv instance with all options
 */
const builder = (yargs, transactional = false) => {
    return yargs
        .option("rpc", {
        describe: "JSON-RPC provider URL",
        type: "string",
        default: process.env.RPC_URL || HARDHAT_DEFAULT_RPC_URL,
    })
        .option("mnemonic", {
        describe: "Wallet mnemonic",
        type: "string",
        default: process.env.MNEMONIC || HARDHAT_DEFAULT_MNEMONIC,
        demandOption: transactional, // required if need to send transactions
    })
        .option("accountIndex", {
        describe: "Account index from mnemonic",
        type: "number",
        default: 0,
    });
};
exports.builder = builder;
/**
 * Connect to a JSON-RPC provider and return a signer or provider
 * @param rpc JSON-RPC provider URL
 * @param mnemonic optional mnemonic to sign transactions
 * @param accountIndex account index of mnemonic (default to 0)
 * @returns signer if mnemonic is provided, provider otherwise
 */
const connect = (rpc, mnemonic, accountIndex) => {
    // connect to JSON-RPC provider
    const provider = new providers_1.JsonRpcProvider(rpc);
    // create signer to be used to send transactions
    const signer = mnemonic
        ? ethers_1.ethers.Wallet.fromMnemonic(mnemonic, `m/44'/60'/0'/0/${accountIndex !== null && accountIndex !== void 0 ? accountIndex : 0}`).connect(provider)
        : undefined;
    return {
        provider,
        signer,
    };
};
exports.connect = connect;

"use strict";
// Copyright 2022 Cartesi Pte. Ltd.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rollups = exports.builder = void 0;
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use
// this file except in compliance with the License. You may obtain a copy of the
// License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software distributed
// under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
// CONDITIONS OF ANY KIND, either express or implied. See the License for the
// specific language governing permissions and limitations under the License.
const fs_1 = __importDefault(require("fs"));
const rollups_1 = require("@cartesi/rollups");
const networks_1 = require("./networks");
/**
 * Builder for args for connecting to Rollups instance
 * @param yargs yargs instance
 * @returns Argv instance with all options
 */
const builder = (yargs) => {
    return yargs
        .option("dapp", {
        describe: "DApp name",
        type: "string",
        default: "dapp",
    })
        .option("address", {
        describe: "Rollups contract address",
        type: "string",
    })
        .option("addressFile", {
        describe: "File with rollups contract address",
        type: "string",
    });
};
exports.builder = builder;
/**
 * Read address from text file
 * @param path Path of file with only address inside as string
 * @returns address or undefined if file does not exist
 */
const readFromFile = (path) => {
    if (path && fs_1.default.existsSync(path)) {
        return fs_1.default.readFileSync(path, "utf8");
    }
};
/**
 * Read address from file located at deployment path
 * @param dapp DApp name
 * @param chainId number of chain id of connected network
 * @returns address or undefined if can't resolve network name of file does not exist
 */
const readDApp = (dapp, chainId) => {
    const network = networks_1.networks[chainId];
    if (network && dapp) {
        return readFromFile(`../deployments/${network.name}/${dapp}.address`);
    }
};
/**
 * Connect to instance of Rollups application
 * @param chainId number of chain id of connected network
 * @param provider provider or signer of connected network
 * @param args args for connection logic
 * @returns Connected rollups contracts
 */
const rollups = async (chainId, provider, args) => {
    const address = args.address ||
        readFromFile(args.addressFile) ||
        readDApp(args.dapp, chainId);
    if (!address) {
        throw new Error("unable to resolve DApp address");
    }
    // connect to contracts
    const inputContract = rollups_1.InputFacet__factory.connect(address, provider);
    const outputContract = rollups_1.OutputFacet__factory.connect(address, provider);
    const erc20Portal = rollups_1.ERC20PortalFacet__factory.connect(address, provider);
    const erc721Portal = rollups_1.ERC721PortalFacet__factory.connect(address, provider);
    return {
        inputContract,
        outputContract,
        erc20Portal,
        erc721Portal,
    };
};
exports.rollups = rollups;

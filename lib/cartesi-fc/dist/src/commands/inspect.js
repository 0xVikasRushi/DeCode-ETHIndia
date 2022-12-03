"use strict";
// Copyright 2022 Cartesi Pte. Ltd.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.describe = exports.command = void 0;
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use
// this file except in compliance with the License. You may obtain a copy of the
// License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software distributed
// under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
// CONDITIONS OF ANY KIND, either express or implied. See the License for the
// specific language governing permissions and limitations under the License.
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const path_1 = __importDefault(require("path"));
const utils_1 = require("./utils");
exports.command = "inspect";
exports.describe = "Inspect the state of the DApp";
const DEFAULT_URL = "http://localhost:5005/inspect";
const builder = (yargs) => {
    return yargs
        .option("url", {
        describe: "Reader inspect URL",
        type: "string",
        default: DEFAULT_URL,
    })
        .option("payload", {
        describe: "Inspect payload to send",
        type: "string",
        demandOption: true,
    });
};
exports.builder = builder;
const handler = async (args) => {
    const { url, payload } = args;
    const response = await (0, cross_fetch_1.default)(path_1.default.join(url, payload));
    console.log(`HTTP status: ${response.status}`);
    if (response.status == 200) {
        const result = await response.json();
        console.log(`Inspect status: ${JSON.stringify(result.status)}`);
        console.log(`Metadata: ${JSON.stringify(result.metadata)}`);
        console.log(`Reports:`);
        for (let i in result.reports) {
            let payload = result.reports[i].payload;
            console.log(`${i}: ${(0, utils_1.hex2str)(payload)}`);
        }
        if (result.exception_payload) {
            let payload = result.exception_payload;
            console.log(`Exception payload: ${(0, utils_1.hex2str)(payload)}`);
        }
    }
    else {
        console.log(JSON.stringify(await response.text()));
    }
};
exports.handler = handler;

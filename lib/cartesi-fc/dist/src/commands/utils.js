"use strict";
// Copyright 2022 Cartesi Pte. Ltd.
Object.defineProperty(exports, "__esModule", { value: true });
exports.hex2str = void 0;
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use
// this file except in compliance with the License. You may obtain a copy of the
// License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software distributed
// under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
// CONDITIONS OF ANY KIND, either express or implied. See the License for the
// specific language governing permissions and limitations under the License.
const ethers_1 = require("ethers");
const hex2str = (hex) => {
    try {
        return ethers_1.ethers.utils.toUtf8String(hex);
    }
    catch (e) {
        // cannot decode hex payload as a UTF-8 string
        return hex;
    }
};
exports.hex2str = hex2str;

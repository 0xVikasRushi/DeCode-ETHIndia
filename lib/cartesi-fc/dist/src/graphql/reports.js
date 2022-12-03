"use strict";
// Copyright 2022 Cartesi Pte. Ltd.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReport = exports.getReports = void 0;
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use
// this file except in compliance with the License. You may obtain a copy of the
// License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software distributed
// under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
// CONDITIONS OF ANY KIND, either express or implied. See the License for the
// specific language governing permissions and limitations under the License.
const core_1 = require("@urql/core");
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const graphql_1 = require("../../generated-src/graphql");
// define a type predicate to filter out reports
const isPartialReport = (n) => n !== null;
/**
 * Queries a GraphQL server for reports based on input keys
 * @param url URL of the GraphQL server
 * @param input input identification keys
 * @returns List of reports, returned as PartialReport objects
 */
const getReports = async (url, inputKeys) => {
    var _a, _b, _c;
    // create GraphQL client to reader server
    const client = (0, core_1.createClient)({ url, exchanges: core_1.defaultExchanges, fetch: cross_fetch_1.default });
    // query the GraphQL server for reports corresponding to the input keys
    console.log(`querying ${url} for reports of ${JSON.stringify(inputKeys)}...`);
    if (inputKeys.epoch_index !== undefined &&
        inputKeys.input_index !== undefined) {
        // list reports querying by epoch and input
        const { data, error } = await client
            .query(graphql_1.ReportsByEpochAndInputDocument, {
            epoch_index: inputKeys.epoch_index,
            input_index: inputKeys.input_index,
        })
            .toPromise();
        if ((_b = (_a = data === null || data === void 0 ? void 0 : data.epoch) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.reports) {
            return data.epoch.input.reports.nodes.filter(isPartialReport);
        }
        else {
            return [];
        }
    }
    else if (inputKeys.epoch_index !== undefined) {
        // list reports querying only by epoch
        const { data, error } = await client
            .query(graphql_1.ReportsByEpochDocument, {
            epoch_index: inputKeys.epoch_index,
        })
            .toPromise();
        if ((_c = data === null || data === void 0 ? void 0 : data.epoch) === null || _c === void 0 ? void 0 : _c.inputs) {
            // builds return reports array by concatenating each input's reports
            let ret = [];
            const inputs = data.epoch.inputs.nodes;
            for (let input of inputs) {
                ret = ret.concat(input.reports.nodes.filter(isPartialReport));
            }
            return ret;
        }
        else {
            return [];
        }
    }
    else if (inputKeys.input_index !== undefined) {
        throw new Error("Querying only by input index is not supported. Please define epoch index as well.");
    }
    else {
        // list reports using top-level query
        const { data, error } = await client
            .query(graphql_1.ReportsDocument, {})
            .toPromise();
        if (data === null || data === void 0 ? void 0 : data.reports) {
            return data.reports.nodes.filter(isPartialReport);
        }
        else {
            return [];
        }
    }
};
exports.getReports = getReports;
/**
 * Queries a GraphQL server looking for a specific report
 * @param url URL of the GraphQL server
 * @param id ID of the report
 * @returns The corresponding report, returned as a full Report object
 */
const getReport = async (url, id) => {
    // create GraphQL client to reader server
    const client = (0, core_1.createClient)({ url, exchanges: core_1.defaultExchanges, fetch: cross_fetch_1.default });
    // query the GraphQL server for the report
    console.log(`querying ${url} for report "${id}"...`);
    const { data, error } = await client
        .query(graphql_1.ReportDocument, { id })
        .toPromise();
    if (data === null || data === void 0 ? void 0 : data.report) {
        return data.report;
    }
    else {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
};
exports.getReport = getReport;

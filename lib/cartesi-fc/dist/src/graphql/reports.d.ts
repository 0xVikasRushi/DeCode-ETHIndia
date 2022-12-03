import { Report, Input } from "../../generated-src/graphql";
import { InputKeys } from "../commands/types";
export declare type PartialEpoch = Pick<Input, "index">;
export declare type PartialInput = Pick<Input, "index"> & {
    epoch: PartialEpoch;
};
export declare type PartialReport = Pick<Report, "__typename" | "id" | "index" | "payload"> & {
    input: PartialInput;
};
/**
 * Queries a GraphQL server for reports based on input keys
 * @param url URL of the GraphQL server
 * @param input input identification keys
 * @returns List of reports, returned as PartialReport objects
 */
export declare const getReports: (url: string, inputKeys: InputKeys) => Promise<PartialReport[]>;
/**
 * Queries a GraphQL server looking for a specific report
 * @param url URL of the GraphQL server
 * @param id ID of the report
 * @returns The corresponding report, returned as a full Report object
 */
export declare const getReport: (url: string, id: string) => Promise<Report>;

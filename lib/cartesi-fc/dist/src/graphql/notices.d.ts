import { Notice, Input } from "../../generated-src/graphql";
import { InputKeys } from "../commands/types";
export declare type PartialEpoch = Pick<Input, "index">;
export declare type PartialInput = Pick<Input, "index"> & {
    epoch: PartialEpoch;
};
export declare type PartialNotice = Pick<Notice, "__typename" | "id" | "index" | "payload"> & {
    input: PartialInput;
};
/**
 * Queries a GraphQL server for notices based on input keys
 * @param url URL of the GraphQL server
 * @param input input identification keys
 * @returns List of notices, returned as PartialNotice objects
 */
export declare const getNotices: (url: string, inputKeys: InputKeys) => Promise<PartialNotice[]>;
/**
 * Queries a GraphQL server looking for a specific notice
 * @param url URL of the GraphQL server
 * @param id ID of the notice
 * @returns The corresponding notice, returned as a full Notice object
 */
export declare const getNotice: (url: string, id: string) => Promise<Notice>;

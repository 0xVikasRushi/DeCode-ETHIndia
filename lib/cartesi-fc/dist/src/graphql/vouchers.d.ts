import { Voucher, Input } from "../../generated-src/graphql";
import { InputKeys } from "../commands/types";
export declare type PartialEpoch = Pick<Input, "index">;
export declare type PartialInput = Pick<Input, "index"> & {
    epoch: PartialEpoch;
};
export declare type PartialVoucher = Pick<Voucher, "__typename" | "id" | "index" | "destination" | "payload"> & {
    input: PartialInput;
};
/**
 * Queries a GraphQL server for vouchers based on input keys
 * @param url URL of the GraphQL server
 * @param input input identification keys
 * @returns List of vouchers, returned as PartialVoucher objects
 */
export declare const getVouchers: (url: string, inputKeys: InputKeys) => Promise<PartialVoucher[]>;
/**
 * Queries a GraphQL server looking for a specific voucher
 * @param url URL of the GraphQL server
 * @param id ID of the voucher
 * @returns The corresponding voucher, returned as a full Voucher object
 */
export declare const getVoucher: (url: string, id: string) => Promise<Voucher>;

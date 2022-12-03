import { IInput } from "@cartesi/rollups";
import { ContractReceipt } from "ethers";
import { InputKeys } from "./types";
/**
 * Translate a InputAddedEvent into a NoticeKeys
 * @param receipt Blockchain transaction receipt
 * @returns NoticeKeys to find notice in GraphQL server
 */
export declare const findInputAddedInfo: (receipt: ContractReceipt, inputContract: IInput) => InputKeys;

import { ContractReceipt } from "ethers";
import { Argv } from "yargs";
import { InputKeys } from "../types";
import { Args as ConnectArgs } from "../../connect";
import { Args as RollupsArgs } from "../../rollups";
interface Args extends ConnectArgs, RollupsArgs {
    payload: string;
}
export declare const command = "send";
export declare const describe = "Send string input to DApp";
export declare const builder: (yargs: Argv<{}>) => Argv<Args>;
/**
 * Retrieve InputKeys from an InputAddedEvent
 * @param receipt Blockchain transaction receipt
 * @returns input identification keys
 */
export declare const getInputKeys: (receipt: ContractReceipt) => InputKeys;
export declare const handler: (args: Args) => Promise<void>;
export {};

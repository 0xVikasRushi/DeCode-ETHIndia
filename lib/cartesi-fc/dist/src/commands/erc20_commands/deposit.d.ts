import { Argv } from "yargs";
import { Args as ConnectArgs } from "../../connect";
import { Args as RollupsArgs } from "../../rollups";
interface Args extends ConnectArgs, RollupsArgs {
    erc20?: string;
    amount: string;
}
export declare const command = "deposit";
export declare const describe = "Deposit ERC-20 tokens in DApp";
export declare const builder: (yargs: Argv<Args>) => Argv<import("yargs").Omit<import("yargs").Omit<RollupsArgs & ConnectArgs & Args, "erc20"> & {
    erc20: string | undefined;
}, "amount"> & {
    amount: string;
}>;
export declare const handler: (args: Args) => Promise<void>;
export {};

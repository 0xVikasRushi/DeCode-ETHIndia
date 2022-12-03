import { Argv } from "yargs";
import { Args as ConnectArgs } from "../../connect";
import { Args as RollupsArgs } from "../../rollups";
interface Args extends ConnectArgs, RollupsArgs {
    erc721?: string;
    to: string;
    tokenId: string;
}
export declare const command = "deposit";
export declare const describe = "Deposit ERC-721 tokens to a DApp";
export declare const builder: (yargs: Argv<Args>) => Argv<import("yargs").Omit<import("yargs").Omit<RollupsArgs & ConnectArgs & Args, "erc721"> & {
    erc721: string | undefined;
}, "tokenId"> & {
    tokenId: string;
}>;
export declare const handler: (args: Args) => Promise<void>;
export {};

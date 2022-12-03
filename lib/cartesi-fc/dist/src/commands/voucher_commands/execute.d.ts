import { Argv } from "yargs";
import { Args as ConnectArgs } from "../../connect";
import { Args as RollupsArgs } from "../../rollups";
interface Args extends ConnectArgs, RollupsArgs {
    url: string;
    id: string;
}
export declare const command = "execute";
export declare const describe = "Execute voucher given its id";
export declare const builder: (yargs: Argv) => Argv<RollupsArgs & ConnectArgs & {
    url: string;
} & {
    id: string | undefined;
}>;
export declare const handler: (args: Args) => Promise<void>;
export {};

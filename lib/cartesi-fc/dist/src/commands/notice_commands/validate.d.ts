import { Argv } from "yargs";
import { Args as ConnectArgs } from "../../connect";
import { Args as RollupsArgs } from "../../rollups";
interface Args extends ConnectArgs, RollupsArgs {
    url: string;
    id: string;
}
export declare const command = "validate";
export declare const describe = "Validate notice given its id";
export declare const builder: (yargs: Argv) => Argv<RollupsArgs & ConnectArgs & {
    url: string;
} & {
    id: string | undefined;
}>;
export declare const handler: (args: Args) => Promise<void>;
export {};

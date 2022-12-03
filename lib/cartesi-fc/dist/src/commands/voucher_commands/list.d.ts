import { Argv } from "yargs";
interface Args {
    url: string;
    epoch?: number;
    input?: number;
}
export declare const command = "list";
export declare const describe = "List vouchers of an epoch and input";
export declare const builder: (yargs: Argv) => Argv<{
    url: string;
} & {
    epoch: number | undefined;
} & {
    input: number | undefined;
}>;
export declare const handler: (args: Args) => Promise<void>;
export {};

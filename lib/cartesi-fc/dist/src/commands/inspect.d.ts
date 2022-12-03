import { Argv } from "yargs";
interface Args {
    payload: string;
    url: string;
}
export declare const command = "inspect";
export declare const describe = "Inspect the state of the DApp";
export declare const builder: (yargs: Argv) => Argv<{
    url: string;
} & {
    payload: string;
}>;
export declare const handler: (args: Args) => Promise<void>;
export {};

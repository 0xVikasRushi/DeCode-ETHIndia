import { Argv } from "yargs";
export declare const command = "erc20 <command>";
export declare const desc = "Operations with ERC-20 tokens";
export declare const builder: (yargs: Argv) => Argv<{}>;
export declare const handler: () => void;

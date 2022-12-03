import { Argv } from "yargs";
export declare const command = "erc721 <command>";
export declare const desc = "Operations with ERC-721 tokens";
export declare const builder: (yargs: Argv) => Argv<{}>;
export declare const handler: () => void;

import { Argv } from "yargs";
export declare const command = "report <command>";
export declare const desc = "Operations with reports";
export declare const builder: (yargs: Argv) => Argv<{}>;
export declare const handler: () => void;

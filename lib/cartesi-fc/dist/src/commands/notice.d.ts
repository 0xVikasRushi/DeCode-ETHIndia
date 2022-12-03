import { Argv } from "yargs";
export declare const command = "notice <command>";
export declare const desc = "Operations with notices";
export declare const builder: (yargs: Argv) => Argv<{}>;
export declare const handler: () => void;

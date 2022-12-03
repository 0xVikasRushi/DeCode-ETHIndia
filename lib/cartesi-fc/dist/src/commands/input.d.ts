import { Argv } from "yargs";
export declare const command = "input <command>";
export declare const desc = "Operations with inputs";
export declare const builder: (yargs: Argv) => Argv<{}>;
export declare const handler: () => void;

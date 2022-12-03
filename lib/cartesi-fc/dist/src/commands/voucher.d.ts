import { Argv } from "yargs";
export declare const command = "voucher <command>";
export declare const desc = "Operations with vouchers";
export declare const builder: (yargs: Argv) => Argv<{}>;
export declare const handler: () => void;

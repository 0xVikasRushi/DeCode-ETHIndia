import { Provider } from "@ethersproject/providers";
import { Signer } from "ethers";
import { Argv } from "yargs";
export interface Args {
    rpc: string;
    mnemonic?: string;
    accountIndex: number;
}
/**
 * Builder for provider connection
 * @param yargs yargs instance
 * @param transactional indicate if will need to sign transactions, hence MNEMONIC is required
 * @returns Argv instance with all options
 */
export declare const builder: <T>(yargs: Argv<T>, transactional?: boolean) => Argv<Args & T>;
export declare type Connection = {
    provider: Provider;
    signer?: Signer;
};
/**
 * Connect to a JSON-RPC provider and return a signer or provider
 * @param rpc JSON-RPC provider URL
 * @param mnemonic optional mnemonic to sign transactions
 * @param accountIndex account index of mnemonic (default to 0)
 * @returns signer if mnemonic is provided, provider otherwise
 */
export declare const connect: (rpc: string, mnemonic?: string, accountIndex?: number) => Connection;

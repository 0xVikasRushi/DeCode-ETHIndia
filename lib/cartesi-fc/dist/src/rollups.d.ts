import { Provider } from "@ethersproject/providers";
import { Signer } from "ethers";
import { InputFacet, OutputFacet, ERC20PortalFacet, ERC721PortalFacet } from "@cartesi/rollups";
import { Argv } from "yargs";
export interface Args {
    dapp: string;
    address?: string;
    addressFile?: string;
}
interface Contracts {
    inputContract: InputFacet;
    outputContract: OutputFacet;
    erc20Portal: ERC20PortalFacet;
    erc721Portal: ERC721PortalFacet;
}
/**
 * Builder for args for connecting to Rollups instance
 * @param yargs yargs instance
 * @returns Argv instance with all options
 */
export declare const builder: <T>(yargs: Argv<T>) => Argv<Args & T>;
/**
 * Connect to instance of Rollups application
 * @param chainId number of chain id of connected network
 * @param provider provider or signer of connected network
 * @param args args for connection logic
 * @returns Connected rollups contracts
 */
export declare const rollups: (chainId: number, provider: Provider | Signer, args: Args) => Promise<Contracts>;
export {};

"use strict";
// Copyright 2022 Cartesi Pte. Ltd.
Object.defineProperty(exports, "__esModule", { value: true });
exports.networks = void 0;
// compatible networks
exports.networks = {
    31337: {
        name: "localhost",
    },
    3: {
        name: "ropsten",
        explorer: "https://ropsten.etherscan.io",
    },
    4: {
        name: "rinkeby",
        explorer: "https://rinkeby.etherscan.io",
    },
    5: {
        name: "goerli",
        explorer: "https://goerli.etherscan.io",
    },
    42: {
        name: "kovan",
        explorer: "https://kovan.etherscan.io",
    },
    97: {
        name: "bsc_testnet",
        explorer: "https://testnet.bscscan.com",
    },
    43113: {
        name: "avax_fuji",
        explorer: "https://testnet.snowtrace.io",
    },
    80001: {
        name: "polygon_mumbai",
        explorer: "https://mumbai.polygonscan.com",
    },
    420: {
        name: "optimism_goerli",
        explorer: "https://goerli-optimism.etherscan.io",
    },
    421613: {
        name: "arbitrum_goerli",
        explorer: "https://goerli-rollup-explorer.arbitrum.io",
    },
};

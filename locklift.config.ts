import { lockliftChai, LockliftConfig } from "locklift";
import { FactorySource } from "./build/factorySource";
import * as dotenv from "dotenv";
import chai from "chai";

dotenv.config();
chai.use(lockliftChai);

declare global {
  const locklift: import("locklift").Locklift<FactorySource>;
}

const TYCHO_DEVNET_JRPC_ENDPOINT = process.env.TYCHO_DEVNET_JRPC_ENDPOINT || 'https://127.0.0.1/rpc';
const TYCHO_DEVNET_GIVER_ADDRESS = process.env.TYCHO_DEVNET_GIVER_ADDRESS || '0:0000000000000000000000000000000000000000000000000000000000000000';
const TYCHO_DEVNET_GIVER_KEY = process.env.TYCHO_DEVNET_GIVER_KEY || '0000000000000000000000000000000000000000000000000000000000000000';
const TESTNET_DEPLOYER_PHRASE = process.env.TESTNET_DEPLOYER_PHRASE || 'one two three four five six seven eight nine ten eleven twelve';

// Create your own link on https://dashboard.evercloud.dev/

const config: LockliftConfig = {
  compiler: {
    // Specify path to your TON-Solidity-Compiler
    // path: "/mnt/o/projects/broxus/TON-Solidity-Compiler/build/solc/solc",

    // Or specify version of compiler
    version: "0.77.0",

    // Specify config for extarnal contracts as in exapmple
    // externalContracts: {
    //   "node_modules/broxus-ton-tokens-contracts/build": ['TokenRoot', 'TokenWallet']
    // }
  },
  networks: {
    tycho_devnet: {
        connection: {
        id: 2000,
        type: 'jrpc',
        data: {
          endpoint: TYCHO_DEVNET_JRPC_ENDPOINT,
        },
      },
      giver: {
        address: TYCHO_DEVNET_GIVER_ADDRESS,
        key: TYCHO_DEVNET_GIVER_KEY
      },
      keys: {
        // Use everdev to generate your phrase
        // !!! Never commit it in your repos !!!
        phrase: TESTNET_DEPLOYER_PHRASE,
        amount: 1000,
      },
    },
  },
  mocha: {
    timeout: 2000000,
  },
};

export default config;

require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */

const DEFAULT_COMPILER_SETTING = {
  version: "0.7.6",
  settings: {
    evmVersion: "istanbul",
    optimizer: {
      enabled: true,
      runs: 1_000_000,
    },
    metadata: {
      bytecodeHash: "none",
    },
  },
};

module.exports = {
  solidity: {
    compilers: [DEFAULT_COMPILER_SETTING],
  },

  network: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/5g7Crzhf74M6GWQGBy3B5R94tHwLYAQS",
      },
    },
  },
};

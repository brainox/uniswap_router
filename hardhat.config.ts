import '@nomiclabs/hardhat-ethers'
//require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      forking: {
        url: process.env.MAINNET_URL,
      }
    },
    rinkeby: {
      url: process.env.ALCHEMY_RINKEBY_API_KEY_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    
  },
};

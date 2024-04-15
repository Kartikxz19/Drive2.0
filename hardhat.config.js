require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks:{
    hardhat:{
      chainId:1337,
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
  paths:{
    artifacts:"./client/src/artifacts",
  },
  
};
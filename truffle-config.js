const path = require("path");
const HDWalletProvider = require("truffle-hdwallet-provider");
require("dotenv").config();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          process.env.RINKEBY_DEPLOYER_SECRET_KEY,
          process.env.RINKEBY_URL
        ),
      network_id: 4,
    }
  }
};

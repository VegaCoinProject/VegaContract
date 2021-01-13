// migrations/2_deploy.js
const VegaToken = artifacts.require('VegaToken');

const { deployProxy } = require('@openzeppelin/truffle-upgrades');

module.exports = async function (deployer) {
    // await deployer.deploy(VegaToken, 'Vega Coin', 'VEGA'); // For VegaCoin.sol
    // await deployProxy(VegaToken, [], { deployer });

    await deployProxy(VegaToken, ['Vega Coin', 'VEGA'], { deployer, unsafeAllowCustomTypes: true, initializer: 'initialize' }); // For VegaToken.sol
    // await deployProxy(VegaToken, 'Vega Coin', 'VGC');
};
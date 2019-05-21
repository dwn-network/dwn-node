const app = require('@dwn/container')

/**
 * Start a relay and forger.
 * @param  {Object} options
 * @param  {String} version
 * @return {void}
 */
module.exports = async (options, version) => {
  await app.setUp(version, options, {
    options: {
      '@dwn/p2p': {
        networkStart: options.networkStart,
        disableDiscovery: options.disableDiscovery,
        skipDiscovery: options.skipDiscovery,
      },
      '@dwn/blockchain': {
        networkStart: options.networkStart,
      },
      '@dwn/forger': {
        bip38: options.bip38 || process.env.DWN_FORGER_BIP38,
        address: options.address,
        password: options.password || process.env.DWN_FORGER_PASSWORD,
      },
    },
  })
}

const get = require('lodash/get')
const networks = {
  dwn: {
    mainnet: require('../../../config/mainnet/network.json'),
    devnet: require('../../../config/devnet/network.json'),
    testnet: require('../../../config/testnet/network.json')
  }
}

module.exports = class NetworkManager {
  /**
   * Get all network types.
   * @return {Object}
   */
  static getAll() {
    return networks
  }

  /**
   * Find network by token and name.
   * @param  {String} name
   * @param  {String} [token=dwn]
   * @return {Object}
   */
  static findByName(name, token = 'dwn') {
    return get(networks, `${token.toLowerCase()}.${name}`)
  }
}

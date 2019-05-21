const { client } = require('@dwn/extend')
const loader = require('./loader')

/**
 * The struct used by the plugin container.
 * @type {Object}
 */
exports.plugin = {
  pkg: {
    name: '@dwn/config',
    version: '0.2.0'
  },
  alias: 'config',
  async register(container, options) {
    const config = await loader.setUp(options)

    client.setConfig(config.network)

    return config
  },
}

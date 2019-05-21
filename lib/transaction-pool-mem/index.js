const Connection = require('./connection')

/**
 * The struct used by the plugin container.
 * @type {Object}
 */
exports.plugin = {
  pkg: {
    name: '@dwn/transaction-pool-mem',
    version: '0.2.0'
  },
  defaults: require('./defaults'),
  alias: 'transactionPool',
  extends: '@dwn/transaction-pool',
  async register(container, options) {
    container.resolvePlugin('logger').info('Connecting to transaction pool')

    const transactionPoolManager = container.resolvePlugin(
      'transactionPoolManager',
    )
    await transactionPoolManager.makeConnection(new Connection(options))

    return transactionPoolManager.connection()
  },
  async deregister(container, options) {
    container
      .resolvePlugin('logger')
      .info('Disconnecting from transaction pool')

    return container.resolvePlugin('transactionPool').disconnect()
  },
}

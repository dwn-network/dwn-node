const monitor = require('./monitor')
const startServer = require('./server')

/**
 * The struct used by the plugin container.
 * @type {Object}
 */
exports.plugin = {
  pkg: {
    name: '@dwn/p2p',
    version: '0.2.11'
  },
  defaults: require('./defaults'),
  alias: 'p2p',
  async register (container, options) {
    container.resolvePlugin('logger').info('Starting P2P Interface')

    monitor.server = await startServer(monitor, options)

    await monitor.start(options)

    return monitor
  },
  async deregister (container, options) {
    container.resolvePlugin('logger').info('Stopping P2P Interface')

    const p2p = container.resolvePlugin('p2p')
    // TODO 取消节点备份的相关功能
    //p2p.dumpPeers()

    return p2p.server.stop()
  },
}

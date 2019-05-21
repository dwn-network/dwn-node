const logManager = require('./manager')

/**
 * The struct used by the plugin container.
 * @type {Object}
 */
exports.plugin = {
  pkg: {
    name: '@dwn/logger',
    version: '0.2.0'
  },
  alias: 'logManager',
  async register() {
    return logManager
  },
}

/**
 * The interface used by concrete implementations.
 * @type {LoggerInterface}
 */
exports.LoggerInterface = require('./interface')

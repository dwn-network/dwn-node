const WinstonDriver = require('./driver')

/**
 * The struct used by the plugin container.
 * @type {WinstonDriver}
 */
exports.plugin = {
  pkg: {
    name: '@dwn/logger-winston',
    version: '0.2.0'
  },
  defaults: require('./defaults'),
  alias: 'logger',
  extends: '@dwn/logger',
  async register(container, options) {
    const logManager = container.resolvePlugin('logManager')
    await logManager.makeDriver(new WinstonDriver(options))

    return logManager.driver()
  },
}

/**
 * Expose the winston formatter for configuration.
 * @type {Function}
 */
exports.formatter = require('./formatter')

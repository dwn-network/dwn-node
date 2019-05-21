const Sentry = require('@sentry/node')

/**
 * The struct used by the plugin container.
 * @type {Object}
 */
exports.plugin = {
  pkg: {
    name: '@dwn/error-tracker-sentry',
    version: '0.1.0'
  },
  defaults: require('./defaults'),
  alias: 'error-tracker',
  async register(container, options) {
    container.resolvePlugin('logger').info('Starting Sentry :bug:')

    Sentry.init(options)

    return Sentry
  },
}

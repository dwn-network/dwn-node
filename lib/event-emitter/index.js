const emitter = require('./emitter')

/**
 * The struct used by the plugin container.
 * @type {Object}
 */
exports.plugin = {
  pkg: {
    name: '@dwn/event-emitter',
    version: '0.2.0'
  },
  alias: 'event-emitter',
  async register() {
    return emitter
  },
}

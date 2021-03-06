const PostgresConnection = require('./connection')

/**
 * The struct used by the plugin container.
 * @type {Object}
 */
exports.plugin = {
  pkg: {
    name: '@dwn/database-postgres',
    version: '0.2.1'
  },
  defaults: require('./defaults'),
  alias: 'database',
  extends: '@dwn/database',
  async register(container, options) {
    container.resolvePlugin('logger').info('Establishing Database Connection')

    const postgres = new PostgresConnection(options)

    const databaseManager = container.resolvePlugin('databaseManager')
    await databaseManager.makeConnection(postgres)

    return databaseManager.connection()
  },
  async deregister(container, options) {
    container.resolvePlugin('logger').info('Closing Database Connection')

    return container.resolvePlugin('database').disconnect()
  },
}

/**
 * The files required to migrate the database.
 * @type {Array}
 */
exports.migrations = require('./migrations')

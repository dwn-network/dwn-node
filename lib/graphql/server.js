const { createServer, mountServer } = require('@dwn/http-utils')
const server = require('./schema')

/**
 * Create a new hapi.js server.
 * @param  {Object} config
 * @return {Hapi.Server}
 */
module.exports = async (config) => {
  const app = await createServer({
    host: config.host,
    port: config.port,
  })

  await server.applyMiddleware({
    app,
    path: config.path,
  })

  await server.installSubscriptionHandlers(app.listener)

  return mountServer('GraphQL', app)
}

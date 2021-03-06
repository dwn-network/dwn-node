const app = require('@dwn/container')

const config = app.resolvePlugin('config')

/**
 * Turns a "peer" object into a generic object.
 * @param  {Object} model
 * @return {Object}
 */
module.exports = model => {
  const peer = {
    ip: model.ip,
    port: model.port,
    version: model.version,
    height: model.height,
    status: model.status,
    os: model.os,
    delay: model.delay,
  }

  if (config.network.name !== 'mainnet') {
    peer.hashid = model.hashid
  }

  return peer
}

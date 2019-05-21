const app = require('@dwn/container')

exports.setUpLite = async options => {
  process.env.DWN_SKIP_BLOCKCHAIN = true
  await app.setUp('2.0.0', options, {
    include: [
      '@dwn/config',
      '@dwn/logger',
      '@dwn/logger-winston',
      '@dwn/event-emitter',
      '@dwn/snapshots',
    ],
  })

  return app
}

exports.tearDown = async () => app.tearDown()

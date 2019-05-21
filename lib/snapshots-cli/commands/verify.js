const fs = require('fs-extra')
const app = require('@dwn/container')

const logger = app.resolvePlugin('logger')
const snapshotManager = app.resolvePlugin('snapshots')

module.exports = async options => {
  if (
    options.filename
    && !fs.existsSync(
      `${process.env.DWN_PATH_DATA}/snapshots/${process.env.DWN_NETWORK_NAME}/${
        options.filename
      }`,
    )
  ) {
    logger.error(`Verify not possible. Snapshot ${options.filename} not found.`)
    logger.info(
      'Use -f parameter with just the filename and not the full path.',
    )
  } else {
    await snapshotManager.verifyData(options)
  }
}

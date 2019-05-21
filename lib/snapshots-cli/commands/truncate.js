const app = require('@dwn/container')

const snapshotManager = app.resolvePlugin('snapshots')

module.exports = async options => {
  await snapshotManager.truncateChain()
}

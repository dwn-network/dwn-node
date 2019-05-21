const database = require('@dwn/container').resolvePlugin(
  'database',
)

/**
 * Get a single block from the database
 * @return {Block}
 */
module.exports = (_, { id }) => database.db.blocks.findById(id)

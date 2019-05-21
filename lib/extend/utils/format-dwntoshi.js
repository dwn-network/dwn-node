const { DWNTOSHI } = require('../constants')
const configManager = require('../managers/config')

/**
 * Get human readable string from dwntoshis
 * @param  {Number|String|Bignum} amount
 * @return {String}
 */
module.exports = (amount) => {
  const localeString = (+amount / DWNTOSHI).toLocaleString('en', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 8,
  })

  return `${localeString} ${configManager.config.client.symbol}`
}

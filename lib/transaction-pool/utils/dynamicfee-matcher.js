const app = require('@dwn/container')
const {
  feeManager,
  dynamicFeeManager,
  formatDwntoshi,
} = require('@dwn/extend')

/**
 * Determine if a transaction's fee meets the minimum requirements for broadcasting
 * and for entering the transaction pool.
 * @param {Transaction} Transaction - transaction to check
 * @return {Object} { broadcast: Boolean, enterPool: Boolean }
 */
module.exports = transaction => {
  const config = app.resolvePlugin('config')
  const logger = app.resolvePlugin('logger')

  const fee = +transaction.fee.toFixed()
  const id = transaction.id

  const blockchain = app.resolvePlugin('blockchain')
  const fees = config.getConstants(blockchain.getLastBlock().data.height).fees

  let broadcast
  let enterPool

  if (fees.dynamic) {
    const minFeeBroadcast = dynamicFeeManager.calculateFee(
      fees.dynamicFees.minFeeBroadcast,
      transaction,
    )
    if (fee >= minFeeBroadcast) {
      broadcast = true
      logger.debug(
        `Transaction ${id} eligible for broadcast - fee of ${formatDwntoshi(
          fee,
        )} is ${
          fee === minFeeBroadcast ? 'equal to' : 'greater than'
          } minimum fee (${formatDwntoshi(minFeeBroadcast)})`,
      )
    } else {
      broadcast = false
      logger.debug(
        `Transaction ${id} not eligible for broadcast - fee of ${formatDwntoshi(
          fee,
        )} is smaller than minimum fee (${formatDwntoshi(minFeeBroadcast)})`,
      )
    }

    const minFeePool = dynamicFeeManager.calculateFee(
      fees.dynamicFees.minFeePool,
      transaction,
    )
    if (fee >= minFeePool) {
      enterPool = true
      logger.debug(
        `Transaction ${id} eligible to enter pool - fee of ${formatDwntoshi(
          fee,
        )} is ${
          fee === minFeePool ? 'equal to' : 'greater than'
          } minimum fee (${formatDwntoshi(minFeePool)})`,
      )
    } else {
      enterPool = false
      logger.debug(
        `Transaction ${id} not eligible to enter pool - fee of ${formatDwntoshi(
          fee,
        )} is smaller than minimum fee (${formatDwntoshi(minFeePool)})`,
      )
    }
  } else {
    // Static fees
    const staticFee = feeManager.getForTransaction(transaction)

    if (fee === staticFee) {
      broadcast = true
      enterPool = true
      logger.debug(
        `Transaction ${id} eligible for broadcast and to enter pool - fee of ${formatDwntoshi(
          fee,
        )} is equal to static fee (${formatDwntoshi(staticFee)})`,
      )
    } else {
      broadcast = false
      enterPool = false
      logger.debug(
        `Transaction ${id} not eligible for broadcast and not eligible to enter pool - fee of ${formatDwntoshi(
          fee,
        )} does not match static fee (${formatDwntoshi(staticFee)})`,
      )
    }
  }

  return { broadcast, enterPool }
}

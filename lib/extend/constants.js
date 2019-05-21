const configMainnet = require('../../config/mainnet/network.json')
const configDevnet = require('../../config/devnet/network.json')
const configTestnet = require('../../config/testnet/network.json')

/**
 * The Dwntoshi base.
 * @type {Number}
 */
exports.DWNTOSHI = 1e8

/**
 * Available transaction types.
 * @type {Object}
 */
exports.TRANSACTION_TYPES = Object.freeze({
  TRANSFER: 0,
  SECOND_SIGNATURE: 1,
  DELEGATE_REGISTRATION: 2,
  VOTE: 3,
  MULTI_SIGNATURE: 4,
  IPFS: 5,
  TIMELOCK_TRANSFER: 6,
  MULTI_PAYMENT: 7,
  DELEGATE_RESIGNATION: 8,
  toString(type) {
    switch (type) {
      case this.TRANSFER:
        return 'transfer'
      case this.SECOND_SIGNATURE:
        return 'second signature'
      case this.DELEGATE_REGISTRATION:
        return 'delegate registration'
      case this.VOTE:
        return 'vote'
      case this.MULTI_SIGNATURE:
        return 'multi signature'
      case this.IPFS:
        return 'ipfs'
      case this.TIMELOCK_TRANSFER:
        return 'timelock transfer'
      case this.MULTI_PAYMENT:
        return 'multi payment'
      case this.DELEGATE_RESIGNATION:
        return 'delegate resignation'
      default:
        throw new Error('Invalid transaction type')
    }
  },
})

/**
 * Available network configurations.
 * @type {Object}
 */
exports.CONFIGURATIONS = Object.freeze({
  DWN: {
    MAINNET: configMainnet,
    DEVNET: configDevnet,
    TESTNET: configTestnet,
  },
})

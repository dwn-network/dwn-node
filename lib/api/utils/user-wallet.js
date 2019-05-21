const axios = require('axios/index')
const isEmpty = require('lodash/isEmpty')

const app = require('@dwn/container')

const database = app.resolvePlugin('database')
const config = app.resolvePlugin('config')
const logger = app.resolvePlugin('logger')

const { identities } = require("@dwn/extend");

module.exports = class UserWallet {
  /**
   * 验证钱包中的可交易金额是否被冻结
   * @param transactions
   * @returns {Promise<{error: boolean, message: *}>}
   */
  async validateFreeze(transactions) {
    let address = null
    let amount = 0
    transactions.forEach(transaction => {
      if (isEmpty(address)) {
        address = this.__publicKeyToAddress(transaction.senderPublicKey)
      }
      amount = amount + transaction.amount + transaction.fee
    })

    const wallet = await database.wallets.findById(address)
    if (!wallet) {
      return this.__response('Wallet not found');
    }

    const freeze = await this.__getFreeze(address)
    if (freeze > 0 && amount > (wallet.balance - freeze)) {
      return this.__response(`The available balance in the wallet is insufficient,Freeze:${freeze}`);
    }

    return this.__response(null);
  }

  async __getFreeze(address) {
    const url = `${config.network.centralServer}${address}`

    try {
      const response = await axios.get(url)

      return response.data.freeze;
    } catch (error) {
      const message = this.__errorMessage(url, error.message())
      logger.debug(message)

      return this.__response(message);
    }
  }

  __publicKeyToAddress(publicKey) {
    return identities.address.fromPublicKey(publicKey)
  }

  __errorMessage(url, message) {
    return `Request to ${url} failed because of "${
      message
      }"`
  }

  __response(message) {
    return {
      error: isEmpty(message),
      message: message
    }
  }

}

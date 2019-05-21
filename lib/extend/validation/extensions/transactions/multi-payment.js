const { TRANSACTION_TYPES } = require('../../../constants')
const transaction = require('./base')

module.exports = joi => ({
  name: 'dwnMultiPayment',
  base: transaction(joi).append({
    type: joi
      .number()
      .only(TRANSACTION_TYPES.MULTI_PAYMENT)
      .required(),
    asset: joi.object().required(),
    recipientId: joi.empty(),
  }),
})

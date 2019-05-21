const { TRANSACTION_TYPES } = require('../../../constants')
const transaction = require('./base')

module.exports = joi => ({
  name: 'dwnDelegateRegistration',
  base: transaction(joi).append({
    type: joi
      .number()
      .only(TRANSACTION_TYPES.DELEGATE_REGISTRATION)
      .required(),
    amount: joi
      .alternatives()
      .try(joi.bignumber().only(0), joi.number().only(0))
      .optional(),
    asset: joi
      .object({
        delegate: joi
          .object({
            username: joi.dwnUsername().required(),
            publicKey: joi.dwnPublicKey(),
          })
          .required(),
      })
      .required(),
    recipientId: joi.empty(),
  }),
})

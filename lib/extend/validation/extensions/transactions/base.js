const { TRANSACTION_TYPES } = require('../../../constants')

module.exports = joi =>
  joi.object().keys({
    id: joi
      .string()
      .alphanum()
      .required(),
    blockid: joi.alternatives().try(
      // TODO: remove in 2.1
      joi.dwnBlockId(),
      joi.number().unsafe(),
    ),
    version: joi
      .number()
      .integer()
      .min(1)
      .max(2)
      .optional(),
    timestamp: joi
      .number()
      .integer()
      .min(0)
      .required(),
    amount: joi
      .alternatives()
      .try(
        joi
          .bignumber()
          .integer()
          .positive(),
        joi
          .number()
          .integer()
          .positive(),
      )
      .required(),
    fee: joi
      .alternatives()
      .try(
        joi
          .bignumber()
          .integer()
          .positive(),
        joi
          .number()
          .integer()
          .positive(),
      )
      .required(),
    senderId: joi.dwnAddress(), // TODO: remove in 2.1
    recipientId: joi.dwnAddress().required(),
    senderPublicKey: joi.dwnPublicKey().required(),
    signature: joi
      .string()
      .alphanum()
      .required(),
    signatures: joi.array(),
    secondSignature: joi.string().alphanum(),
    signSignature: joi.string().alphanum(), // TODO: remove in 2.1
    confirmations: joi // TODO: remove in 2.1
      .number()
      .integer()
      .min(0),
  })

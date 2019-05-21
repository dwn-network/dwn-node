const Joi = require('joi')
const { crypto } = require('@dwn/extend')

module.exports = {
  name: 'wallets.create',
  async method(params) {
    const { publicKey } = crypto.getKeys(params.passphrase)

    return {
      publicKey,
      address: crypto.getAddress(publicKey),
    }
  },
  schema: {
    passphrase: Joi.string().required(),
  },
}

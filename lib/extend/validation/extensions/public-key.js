module.exports = joi => ({
  name: 'dwnPublicKey',
  base: joi
    .string()
    .hex()
    .length(66),
})

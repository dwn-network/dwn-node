module.exports = joi => ({
  name: 'dwnAddress',
  base: joi
    .string()
    .alphanum()
    .length(34),
})

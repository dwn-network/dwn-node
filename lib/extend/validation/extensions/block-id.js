module.exports = joi => ({
  name: 'dwnBlockId',
  base: joi.string().regex(/^[0-9]+$/, 'numbers'),
})

const Joi = require('@dwn/extend').validator.engine.joi

/**
 * @type {Object}
 */
exports.store = {
  payload: {
    block: Joi.dwnBlock().options({ stripUnknown: true }),
  },
}

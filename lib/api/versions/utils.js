exports.getCacheTimeout = () => {
  const {
    generateTimeout,
  } = require('@dwn/container').resolveOptions('api').cache

  return JSON.parse(generateTimeout)
}

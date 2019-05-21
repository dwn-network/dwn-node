module.exports = {
  get(codec) {
    switch (codec) {
      case 'dwn':
        return require('./dwn-codec')
      case 'lite':
        return require('./lite-codec')
      case 'msgpack':
        return null
      default:
        return require('./lite-codec')
    }
  },
}

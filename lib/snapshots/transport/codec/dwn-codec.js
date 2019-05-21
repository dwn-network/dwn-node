const msgpack = require('msgpack-lite')
const dwnEncoders = require('./dwn')

class DwnCodec {
  get blocks() {
    const codec = msgpack.createCodec()
    codec.addExtPacker(0x3f, Object, dwnEncoders.blockEncode)
    codec.addExtUnpacker(0x3f, dwnEncoders.blockDecode)

    return codec
  }

  get transactions() {
    const codec = msgpack.createCodec()
    codec.addExtPacker(0x4f, Object, dwnEncoders.transactionEncode)
    codec.addExtUnpacker(0x4f, dwnEncoders.transactionDecode)

    return codec
  }
}

module.exports = new DwnCodec()

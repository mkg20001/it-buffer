'use strict'

const BufferList = require('bl/BufferList')

module.exports = async function * (source) {
  for await (const b of source) {
    if (Buffer.isBuffer(b)) {
      yield b
    } else if (BufferList.isBufferList(b)) {
      yield b.slice()
    } else {
      yield Buffer.from(b)
    }
  }
}

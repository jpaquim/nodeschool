const { Writable } = require('stream')
const duplexer2 = require('duplexer')

module.exports = function (counter) {
  const inputStream = new Writable({objectMode: true})
  const counts = {}
  inputStream._write = (obj, _, cb) => {
    counts[obj.country] = (counts[obj.country] || 0) + 1
    cb()
  }
  inputStream.on('finish', () => {
    counter.setCounts(counts)
  })
  return duplexer2(inputStream, counter)
}

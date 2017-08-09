const through2 = require('through2')
const duplexer2 = require('duplexer')

module.exports = function (counter) {
  const inputStream = new through2.obj(onWrite, onFinish)
  const counts = {}
  return duplexer2(inputStream, counter)
  
  function onWrite (obj, _, cb) {
    counts[obj.country] = (counts[obj.country] || 0) + 1
    cb()
  }
  function onFinish (cb) {
    counter.setCounts(counts)
    cb()
  }
}

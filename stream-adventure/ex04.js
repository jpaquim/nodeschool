const through = require('through2')

const streamToUpperCase = through(function (buf, enc, next) {
  this.push(buf.toString().toUpperCase())
  next()
})

process.stdin
  .pipe(streamToUpperCase)
  .pipe(process.stdout)

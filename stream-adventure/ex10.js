const trumpet = require('trumpet')
const through2 = require('through2')

const trumpetStream = trumpet()

const loudStream = trumpetStream.createStream('.loud')

loudStream.pipe(through2((buf, _, cb) => {
  cb(null, buf.toString().toUpperCase())
})).pipe(loudStream)

process.stdin.pipe(trumpetStream).pipe(process.stdout)

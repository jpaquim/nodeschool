const http = require('http')
const through2 = require('through2')

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(streamToUpperCase)
       .pipe(res)
  } else {
    res.end('Answers to POST requests only')
  }
})

const streamToUpperCase = through2(function (buf, enc, next) {
  this.push(buf.toString().toUpperCase())
  next()
})

const portNumber = process.argv[2]
server.listen(portNumber)

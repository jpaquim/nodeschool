const http = require('http')
const through2 = require('through2')

const portNumber = process.argv[2]

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return res.end()
  }
  res.writeHead(200, { 'content-type': 'text/plain' })
  req.pipe(through2((chunk, enc, callback) => {
    callback(null, chunk.toString().toUpperCase())
  })).pipe(res)
})

server.listen(portNumber)

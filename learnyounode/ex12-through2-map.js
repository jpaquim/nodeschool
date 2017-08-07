const http = require('http')
const map = require('through2-map')

const portNumber = process.argv[2]

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return res.end()
  }
  res.writeHead(200, { 'content-type': 'text/plain' })
  req.pipe(map(chunk => {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(portNumber)

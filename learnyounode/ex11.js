const fs = require('fs')
const http = require('http')

const portNumber = process.argv[2]
const filename = process.argv[3]

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' })
  fs.createReadStream(filename).pipe(res)
})

server.listen(portNumber)

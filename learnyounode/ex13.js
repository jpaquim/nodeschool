const http = require('http')
const { URL } = require('url')

const portNumber = process.argv[2]

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    return res.end()
  }
  const parsedUrl = new URL(req.url)
  const date = new Date(parsedUrl.searchParams.get('iso'))
  let parsedTime
  if (parsedUrl.pathname === '/api/parsetime') {
    parsedTime = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }
  } else if (parsedUrl.pathname === '/api/unixtime') {
    parsedTime = {
      unixtime: date.getTime()
    }
  }
  if (!parsedTime) {
    res.writeHead(404)
    return res.end()
  }
  res.writeHead(200, { 'content-type': 'application/json' })
  res.end(JSON.stringify(parsedTime))
})

server.listen(portNumber)

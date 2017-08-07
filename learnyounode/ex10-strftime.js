const net = require('net')
const strftime = require('strftime')

const portNumber = process.argv[2]

const server = net.createServer(socket => {
  socket.end(strftime('%Y-%m-%d %H:%M') + '\n')
})

server.listen(portNumber)

const net = require('net')

const portNumber = process.argv[2]

const server = net.createServer(socket => {
  socket.end(getCurrentTimeString() + '\n')
//   equivalent to:
//   socket.write(getCurrentTimeString() + '\n')
//   socket.end()
})

server.listen(portNumber)

function getCurrentTimeString () {
  const date = new Date()
  const year = date.getFullYear()
  const month = pad2Digits(date.getMonth() + 1)
  const day = pad2Digits(date.getDate())
  const hours = pad2Digits(date.getHours())
  const minutes = pad2Digits(date.getMinutes())
  return `${year}-${month}-${day} ${hours}:${minutes}`
}

function pad2Digits(number) {
  return ('0' + number).slice(-2)
//   return number.toString().padStart(2, '0') // available in ES8
}

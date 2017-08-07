const http = require('http')
const concat = require('concat-stream')

const url = process.argv[2]

http.get(url, response => {
  const concatStream = concat(data => {
    console.log(data.length)
    console.log(data.toString())
  })
  response.on('error', console.error)
  response.pipe(concatStream)
})

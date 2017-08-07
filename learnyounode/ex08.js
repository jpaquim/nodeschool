const http = require('http')

const url = process.argv[2]

http.get(url, response => {
  let result = ''
  response.setEncoding('utf-8')
  response.on('data', data => {
    result += data
  })
  response.on('end', () => {
    console.log(result.length)
    console.log(result)
  })
  response.on('error', console.error)
}).on('error', console.error)

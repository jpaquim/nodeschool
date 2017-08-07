const http = require('http')

const urls = process.argv.slice(2)
const numUrls = urls.length

let results = []
let count = 0
for (let i = 0; i < numUrls; ++i) {
  results[i] = ''
  http.get(urls[i], response => {
    response.setEncoding('utf-8')
    response.on('data', data => {
      results[i] += data
    })
    response.on('end', () => {
      ++count
      if (count === numUrls) {
        results.forEach(result => console.log(result))
      }
    })
  })
}

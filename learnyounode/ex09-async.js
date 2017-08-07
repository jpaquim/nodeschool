const http = require('http')
const async = require('async')
const bl = require('bl')

const urls = process.argv.slice(2)

async.map(urls, getResult, (err, results) => {
  if (err) {
    return console.error(err)
  }
  results.forEach(result => console.log(result))
})

function getResult (url, callback) {
  http.get(url, response => {
    response.pipe(bl((err, data) => {
      if (err) {
        callback(err)
      }
      callback(null, data.toString())
    }))
  }).on('error', err => callback(err))
}

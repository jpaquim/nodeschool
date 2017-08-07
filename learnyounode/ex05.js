let fs = require('fs')
let path = require('path')

let dir = process.argv[2]
let ext = '.' + process.argv[3]

fs.readdir(dir, (err, files) => {
  if (err) {
    return console.log(err)
  }
  files.forEach(file => {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})

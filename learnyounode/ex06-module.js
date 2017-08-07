let fs = require('fs')
let path = require('path')

module.exports = (dir, filterStr, callback) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return callback(err)
    }
    let ext = '.' + filterStr
    let filteredFiles = files.filter(file => {
      return path.extname(file) === ext
    })
    callback(null, filteredFiles)
  })
}

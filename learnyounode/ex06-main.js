let filterFn = require('./ex06-module')

let dir = process.argv[2]
let filterStr = process.argv[3]
filterFn(dir, filterStr, (err, filteredFiles) => {
  if (err) {
    return console.log(err)
  }
  filteredFiles.forEach(file => {
    console.log(file)
  })
})

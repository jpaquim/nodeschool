let fs = require('fs')
let filename = process.argv[2]

fs.readFile(filename, 'utf8', (err, contents) => {
  if (err) {
    return console.log(err)
  }
  let nLines = contents.split('\n').length - 1
  console.log(nLines)
})

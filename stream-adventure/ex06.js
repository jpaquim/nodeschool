const concat = require('concat-stream')

var lineNumber = 0
const concatReverseLog = concat(data => {
  console.log(data.toString().split('').reverse().join(''))
})

process.stdin
  .pipe(concatReverseLog)

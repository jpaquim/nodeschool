const through2 = require('through2')
const split = require('split')

var lineNumber = 0
const caseAlternate = through2(function (chunk, enc, next) {
  const line = chunk.toString()
  ++lineNumber
  let convertedLine = (lineNumber % 2 !== 0) ? line.toLowerCase() : line.toUpperCase()
  this.push(convertedLine + '\n')
  next()
})

process.stdin
  .pipe(split())
  .pipe(caseAlternate)
  .pipe(process.stdout)

let fs = require('fs')

let file = fs.readFileSync(process.argv[2])
let lines = file.toString().split('\n')
console.log(lines.length - 1)

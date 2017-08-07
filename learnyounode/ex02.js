let sum = 0
const length = process.argv.length
for (let i = 2; i < length; ++i) {
  sum += Number(process.argv[i])
}

console.log(sum)

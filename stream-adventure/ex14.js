const crypto = require('crypto')

const passphrase = process.argv[2]
const cryptoStream = crypto.createDecipher('aes256', passphrase)

process.stdin
  .pipe(cryptoStream)
  .pipe(process.stdout)

const crypto = require('crypto')
const zlib = require('zlib')
const tar = require('tar')
const through2 = require('through2')

cipherAlgorithm = process.argv[2]
passphrase = process.argv[3]

const decipher = crypto.createDecipher(cipherAlgorithm, passphrase)
const gunzip = zlib.createGunzip()
const tarParse = new tar.Parse()
tarParse.on('entry', function (entry) {
  if (entry.type === 'File') {
    const calcHexMd5 = crypto.createHash('md5', { encoding: 'hex' })
    entry.pipe(calcHexMd5).on('finish', function () {
      console.log(`${this.read()} ${entry.path}`)
    })
  }
  entry.resume()
})

process.stdin
  .pipe(decipher)
  .pipe(gunzip)
  .pipe(tarParse)

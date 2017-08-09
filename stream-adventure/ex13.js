const Combine = require('stream-combiner')
const through2 = require('through2')
const split = require('split')
const zlib = require('zlib')

module.exports = function () {
  let genreObj
  const processGenreBooks = through2(function (objJSON, _, cb) {
    if (objJSON.length === 0) {
      return cb()
    }
    const obj = JSON.parse(objJSON)
    if (obj.type === 'genre') {
      if (genreObj) {
        console.log(JSON.stringify(genreObj))
        this.push(JSON.stringify(genreObj) + '\n')
      }
      genreObj = { name: obj.name, books: []}
    } else if (obj.type === 'book') {
      genreObj.books.push(obj.name)
    }
    cb()
  }, function (cb) {
    if (genreObj) {
      console.log('end')
      this.push(JSON.stringify(genreObj) + '\n')
    }
    cb()
  })

  return Combine(
    split(),
    processGenreBooks,
    zlib.createGzip()
  )
}

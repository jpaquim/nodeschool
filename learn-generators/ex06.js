function askFoo () {
  return new Promise(function (resolve, reject) {
    resolve('foo')
  })
}

function run (generator) {
  const it = generator()
  function go (result) {
    if (result.done) {
      return ret.value
    }
    result.value.then(value => go(it.next(value)),
                      error => go(it.throw(error)))
  }
  return go(it.next())
}

run(function *generator () {
  try {
    const foo = yield askFoo()
    console.log(foo)
  } catch (e) {
    console.log(e)
  }
})

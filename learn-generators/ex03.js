function *flat (arr) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i].length > 0) {
      yield *flat(arr[i])
    } else {
      yield arr[i]
    }
  }
}

let A = [1, [2, [3, 4], 5], 6]
for (let f of flat(A)) {
  console.log(f)
}

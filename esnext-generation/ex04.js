module.exports = function* generate(isEven) {
  let counter = isEven ? 0 : -1;
  for (;;) {
    counter += 2;
    yield counter;
  }
}

module.exports = function* multiplier() {
  let mult;
  for (let counter = 1; /* forever */ ; ++counter) {
    if (mult) {
      mult = yield counter * mult;
    } else {
      mult = yield counter;
    }
  }
}

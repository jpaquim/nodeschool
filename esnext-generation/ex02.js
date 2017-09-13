module.exports = function filterForNumbers(iterable) {
  let result = [];
  for (value of iterable) {
    if (typeof value == 'number') {
      result.push(value);
    }
  }
  return result;
}

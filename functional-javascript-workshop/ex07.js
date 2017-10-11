module.exports = function reduce(arr, fn, init, index) {
  if (index >= arr.length) {
    return init;
  }
  index = index || 0;
  return reduce(arr, fn, fn(init, arr[index], index, arr), index + 1);
};

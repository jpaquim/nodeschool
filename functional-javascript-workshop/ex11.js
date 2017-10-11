module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce((accum, current, index, arr) => {
    return [...accum, fn.call(thisArg, current, index, arr)];
  }, []);
};

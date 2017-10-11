module.exports = function curryN(fn, n = fn.length) {
  if (n <= 1) return fn;
  return arg => curryN(fn.bind(this, arg), n - 1);
};

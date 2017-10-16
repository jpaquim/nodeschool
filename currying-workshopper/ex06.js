module.exports = function curryFunc(fn) {
  return (...args) => {
    if (args.length >= fn.length) return fn(...args);
    return curryFunc(fn.bind(null, ...args));
  };
};

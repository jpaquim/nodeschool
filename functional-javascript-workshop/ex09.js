module.exports = function logger(namespace) {
  return function (...args) {
    console.log.apply(console, [namespace, ...args]);
  }
};

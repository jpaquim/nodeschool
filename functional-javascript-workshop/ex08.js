module.exports = function duckCount(...args) {
  return args.reduce((count, arg) => {
    return count + (Object.prototype.hasOwnProperty.call(arg, 'quack') ? 1 : 0);
  }, 0);
};

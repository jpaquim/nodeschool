module.exports = function Spy(target, method) {
  const spy = { count: 0  };
  const spiedFn = target[method];
  target[method] = function(...args) {
    ++spy.count;
    return spiedFn.apply(this, args);
  };
  return spy;
};

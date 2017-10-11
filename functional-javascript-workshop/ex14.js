function repeatThunk(operation, num) {
  if (num <= 0) return;
  operation();
  return () => repeatThunk(operation, num - 1);
}

function trampoline(fn) {
  return function trampolinedFn(...args) {
    fn = fn(...args);
    while (fn instanceof Function) {
      fn = fn();
    }
    return fn;
  }
}

module.exports = (operation, num) => {
  const repeat = trampoline(repeatThunk);
  return repeat(operation, num);
};

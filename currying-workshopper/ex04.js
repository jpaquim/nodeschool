module.exports = function delayInvoc(a) {
  if (a === undefined) {
    return 0;
  }
  let runningTotal = a;
  return function curryHelper(b) {
    if (b === undefined) {
      return runningTotal;
    }
    runningTotal += b;
    return curryHelper;
  }
}

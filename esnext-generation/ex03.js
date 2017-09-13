module.exports = function generate(isEven) {
  let counter = isEven ? 0 : -1;
  return {
    next(swap) {
      if (swap) {
        counter += 1;
      } else {
        counter += 2;
      }
      return { value: counter };
    }
  }
}

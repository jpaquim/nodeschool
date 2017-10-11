module.exports = function repeat(operation, num) {
  if (num <= 0) return;
  operation()
  if (num % 10 === 0) {
    setTimeout(() => repeat(operation, num - 1), 0)
  } else {
    repeat(operation, num - 1);
  };
};

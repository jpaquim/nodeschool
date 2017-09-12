module.exports = function average(...numbers) {
  const sum = numbers.reduce((sum, number) => sum + number);
  return sum / numbers.length;
};

module.exports = function makeImportant(str, numExclamations = str.length) {
  return str + '!'.repeat(numExclamations);
};

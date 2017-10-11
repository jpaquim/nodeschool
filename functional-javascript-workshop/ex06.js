module.exports = function countWords(inputWords) {
  return inputWords.reduce((counts, inputWord) => {
    counts[inputWord] = (counts[inputWord] || 0) + 1;
    return counts;
  }, {});
};

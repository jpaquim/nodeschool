const _ = require('lodash');

module.exports = function(listWords) {
  return _.chain(listWords)
    .map(word => word + 'Chained')
    .map(word => word.toUpperCase())
    .sort();
};

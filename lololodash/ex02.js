const _ = require('lodash');

module.exports = function(items) {
  return _.sortBy(items, item => -item.quantity);
};

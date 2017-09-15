const _ = require('lodash');

module.exports = function(list) {
  return _.filter(list, { active: true });
};

const _ = require('lodash');

module.exports = function(arrayComments) {
  return _.chain(arrayComments)
    .groupBy('username')
    .map((comments, username) => ({
      username,
      comment_count: _.size(comments)
    }))
    .sortBy(user => -user.comment_count);
};

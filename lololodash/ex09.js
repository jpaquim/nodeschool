const _ = require('lodash');

module.exports = function(user) {
  return _.template('Hello <%= userName %> (logins: <%= numLogins %>)')({
    userName: user.name,
    numLogins: _.size(user.login),
  });
};

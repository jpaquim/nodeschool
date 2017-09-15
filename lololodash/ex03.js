const _ = require('lodash');

module.exports = function(cities) {
  return _.forEach(cities, city => {
    city.size = city.population > 1.0 ? 'big' :
      city.population > 0.5 ? 'med' : 'small';
  });
}

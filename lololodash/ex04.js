const _ = require('lodash');

module.exports = function(cityTemperatures) {
  let result = { hot: [], warm: [] };
  _.forEach(cityTemperatures, (cityTemperature, city ) => {
    if (_.every(cityTemperature, temperature => temperature > 19)) {
      result.hot.push(city);
    } else if (_.some(cityTemperature, temperature => temperature > 19)) {
      result.warm.push(city);
    }
  })
  return result;
};

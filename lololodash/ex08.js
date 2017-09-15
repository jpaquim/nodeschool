const _ = require('lodash');

module.exports = function(listFreelancers) {
  const averageIncome = _.reduce(listFreelancers, (sum, freelancer) => {
    return sum + freelancer.income;
  }, 0) / _.size(listFreelancers);
  return {
    average: averageIncome,
    underperform: _.chain(listFreelancers)
      .filter(freelancer => freelancer.income <= averageIncome)
      .sortBy('income'),
    overperform: _.chain(listFreelancers)
      .filter(freelancer => freelancer.income > averageIncome)
      .sortBy('income'),
  }
};

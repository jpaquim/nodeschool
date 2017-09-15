const _ = require('lodash');

module.exports = function(arrayOrders) {
  return _.chain(arrayOrders)
    .groupBy('article')
    .map((articleOrders, article) => {
      return _.reduce(articleOrders, (orderSummary, order) => {
        orderSummary.total_orders += order.quantity;
        return orderSummary;
      }, { article: Number(article), total_orders: 0 });
    })
    .sortBy('total_orders')
    .reverse();
};

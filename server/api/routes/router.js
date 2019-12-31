'use strict';
module.exports = function (app) {
    var order = require('../controllers/orderController');
    var restaurant = require('../controllers/restaurantController');

    // todoList Routes
    app.route('/orders')
        .get(order.list)
        .post(order.create);


    app.route('/orders/:orderId')
        .get(order.read)
        .put(order.update)
        .delete(order.delete);

    app.route('/restaurants')
        .get(restaurant.list)
        .post(restaurant.create);


    app.route('/restaurants/:restaurantId')
        .get(restaurant.read)
        .put(restaurant.update)
        .delete(restaurant.delete);
};

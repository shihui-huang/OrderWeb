'use strict';
module.exports = function (app) {
    var orderList = require('../controllers/orderController');

    // todoList Routes
    app.route('/orders')
        .get(orderList.list)
        .post(orderList.create);


    app.route('/orders/:orderId')
        .get(orderList.read)
        .put(orderList.update)
        .delete(orderList.delete);
};

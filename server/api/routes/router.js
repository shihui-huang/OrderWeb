'use strict';
module.exports = function (app) {
    let owner = require('../controllers/ownerController');
    let restaurant = require('../controllers/restaurantController');
    let menu = require('../controllers/menuController');
    let user = require('../controllers/userController');
    let order = require('../controllers/orderController');

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

    app.route('/menus')
        .get(menu.list)
        .post(menu.create);

    app.route('/menus/:menuId')
        .get(menu.read)
        .put(menu.update)
        .delete(menu.delete);

    app.route('menu/:menuId/orders')
        .get(menu.orders);

    app.route('/owners')
        .get(owner.list)
        .post(owner.create);

    app.route('/owners/:ownerId')
        .get(owner.read)
        .put(owner.update)
        .delete(owner.delete);

    app.route('/owners/:ownerId/restaurants')
        .get(owner.restaurants);

    app.route('/users')
        .get(user.list)
        .post(user.create);

    app.route('/users/:userId')
        .get(user.read)
        .put(user.update)
        .delete(user.delete);

    app.route('/users/:userId/orders')
        .get(user.orders);

    app.route('*')
        .all(function (req, res) {
            res.status(404).json({message: "Bad Route"});
        });
};

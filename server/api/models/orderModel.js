'use strict';
let sql = require('./db.js');
let builder = require('./modelsBuilder');

//Order object constructor
let Order = function (order) {
    this.userId = order.userId;
    this.status = order.status;
    this.menuId = order.menuId;
    this.created_at = new Date();
};
Order.createOrder = builder.create('orders');
Order.getOrderById = function (orderId, result) {
    builder.read('orders')(orderId, function (err, order) {
        if (err)
            result(err, null);
        else {
            try {

                sql.query('SELECT restaurantId FROM menus WHERE id = ' + order[0].menuId, [], function (err, res) {
                    if (err)
                        result(err, null);
                    else {
                        order[0].restaurantId = res[0].restaurantId;
                        result(null, order);
                    }
                })
            }catch (e) {
                result(e.toString(), null);
                console.log(e);
            }
        }
    });
};
Order.getAllOrder = function (result) {
    sql.query('SELECT orders.id, status, userId, menuId, created_at, restaurantId FROM orders JOIN menus ON menuId = menus.id', [], function (err, orders) {
        if(err)
            result(err, null);
        else
            result(null, orders);
    });
};
Order.updateById = builder.update('orders');
Order.remove = builder.delete('orders');

let createTable = 'create table if not exists orders(' +
    'id int unsigned auto_increment primary key, ' +
    'status enum("pending", "achieved") default "pending" null, ' +
    'userId int unsigned null, ' +
    'menuId int unsigned null, ' +
    'created_at datetime null, ' +
    'constraint orders_menus_id_fk foreign key (menuId) references menus (id), ' +
    'constraint orders_users_id_fk foreign key (userId) references users (id));';

sql.query(createTable, function (err, res) {
    if (err) {
        console.log("error: ", err);
    } else {
        console.log("Table 'orders' exists");
    }
});

module.exports = Order;
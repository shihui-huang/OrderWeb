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
Order.getOrderById = builder.read('orders');
Order.getAllOrder = builder.list('orders');
Order.updateById = builder.update('orders');
Order.remove = builder.delete('orders');

let createTable = 'create table if not exists orders(id int unsigned auto_increment primary key, status enum("pending", "achieved") default "pending" null, userId int unsigned null, menuId int unsigned null, created_at datetime null);';
sql.query(createTable, function (err, res) {
    if (err) {
        console.log("error: ", err);
    } else {
        console.log("Table 'orders' exists");
    }
});

module.exports = Order;
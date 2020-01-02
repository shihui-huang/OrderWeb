'use strict';
let sql = require('./db.js');

//Order object constructor
let Order = function (order) {
    this.userId = order.userId;
    this.status = order.status;
    this.menuId = order.menuId;
    this.created_at = new Date();
};
Order.createOrder = function (newOrder, result) {
    sql.query("INSERT INTO orders set ?", newOrder, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res.insertId);
        }
    });
};
Order.getOrderById = function (orderId, result) {
    sql.query("Select ordr from orders where id = ? ", orderId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);

        }
    });
};
Order.getAllOrder = function (result) {
    sql.query("Select * from orders", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('orders : ', res);

            result(null, res);
        }
    });
};
Order.updateById = function (id, order, result) {
    sql.query("UPDATE orders SET ordr = ? WHERE id = ?", [order, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Order.remove = function (id, result) {
    sql.query("DELETE FROM orders WHERE id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {

            result(null, res);
        }
    });
};

let createTable = 'create table if not exists orders(id int unsigned auto_increment primary key, status enum("pending", "achieved") default "pending" null, userId int unsigned null, menuId int unsigned null, created_at datetime null);';
sql.query(createTable, function (err, res) {
    if (err) {
        console.log("error: ", err);
    } else {
        console.log("Table 'orders' exists");
    }
});

module.exports = Order;
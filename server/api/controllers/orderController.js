'use strict';

var Order = require('../models/orderModel.js');

exports.list = function (req, res) {
    Order.getAllOrder(function (err, order) {
        if (err)
            res.send(err);
        else
            res.json(order);
    });
};


exports.create = function (req, res) {
    var new_order = new Order(req.body);
    Order.createOrder(new_order, function (err, order) {

        if (err)
            res.send(err);
        res.json(order);
    });
};


exports.read = function (req, res) {
    Order.getOrderById(req.params.orderId, function (err, order) {
        if (err)
            res.send(err);
        else
            res.json(order);
    });
};


exports.update = function (req, res) {
    Order.updateById(req.params.orderId, new Order(req.body), function (err, order) {
        if (err)
            res.send(err);
        else
            res.json(order);
    });
};


exports.delete = function (req, res) {


    Order.remove(req.params.orderId, function (err, order) {
        if (err)
            res.send(err);
        else
            res.json({message: 'Order successfully deleted'});
    });
};
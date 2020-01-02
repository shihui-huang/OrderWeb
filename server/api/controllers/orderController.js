'use strict';

var Order = require('../models/orderModel.js');

exports.list = function(req, res) {
    Order.getAllOrder(function(err, order) {

        console.log('controller');
        if (err)
            res.send(err);
        console.log('res', order);
        res.send(order);
    });
};



exports.create = function(req, res) {
    var new_order = new Order(req.body);
/*
    //handles null error 
    if( !new_order.status){

        res.status(400).send({ error:true, message: 'Please provide order/status' });

    }
    else{
*/
        Order.createOrder(new_order, function(err, order) {

            if (err)
                res.send(err);
            res.json(order);
        });
    //}
};


exports.read = function(req, res) {
    Order.getOrderById(req.params.orderId, function(err, order) {
        if (err)
            res.send(err);
        res.json(order);
    });
};


exports.update = function(req, res) {
    Order.updateById(req.params.orderId, new Order(req.body), function(err, order) {
        if (err)
            res.send(err);
        res.json(order);
    });
};


exports.delete = function(req, res) {


    Order.remove( req.params.orderId, function(err, order) {
        if (err)
            res.send(err);
        res.json({ message: 'Order successfully deleted' });
    });
};
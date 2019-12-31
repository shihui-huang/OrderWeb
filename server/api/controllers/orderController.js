'use strict';

var mongoose = require('mongoose'),
    Order = mongoose.model('Order');

exports.list = function (req, res) {
    Order.find()
        .populate('restaurant')
        .exec(function (err, order) {
                if (err)
                    res.send(err);
                res.json(order);
            }
        );
};


exports.create = function (req, res) {
    var newOrder = new Order(req.body);
    newOrder.save(function (err, order) {
        if (err)
            res.send(err);
        res.json(order);
    });
};


exports.read = function (req, res) {
    Order.findById(req.params.orderId)
        .populate('restaurant')
        .exec( function (err, order) {
        if (err)
            res.send(err);
        res.json(order);
    });
};


exports.update = function (req, res) {
    Order.findOneAndUpdate({_id: req.params.orderId}, req.body, {new: true}, function (err, order) {
        if (err)
            res.send(err);
        res.json(order);
    });
};


exports.delete = function (req, res) {
    Order.remove({
        _id: req.params.orderId
    }, function (err, order) {
        if (err)
            res.send(err);
        res.json({message: 'Task successfully deleted'});
    });
};
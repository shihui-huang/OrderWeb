'use strict';

var mongoose = require('mongoose'),
    Restaurant = mongoose.model('Restaurant');

exports.list = function (req, res) {
    Restaurant.find({}, function (err, restaurant) {
        if (err)
            res.send(err);
        res.json(restaurant);
    });
};


exports.create = function (req, res) {
    var newRestau = new Restaurant(req.body);
    newRestau.save(function (err, restaurant) {
        if (err)
            res.send(err);
        res.json(restaurant);
    });
};


exports.read = function (req, res) {
    Restaurant.findById(req.params.restaurantId, function (err, restaurant) {
        if (err)
            res.send(err);
        res.json(restaurant);
    });
};


exports.update = function (req, res) {
    Restaurant.findOneAndUpdate({_id: req.params.restaurantId}, req.body, {new: true}, function (err, restaurant) {
        if (err)
            res.send(err);
        res.json(restaurant);
    });
};


exports.delete = function (req, res) {
    Restaurant.remove({
        _id: req.params.restaurantId
    }, function (err, restaurant) {
        if (err)
            res.send(err);
        res.json({message: 'Restaurant successfully deleted'});
    });
};
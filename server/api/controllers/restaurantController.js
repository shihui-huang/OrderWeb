'use strict';

var Restaurant = require('../models/restaurantModel.js');

exports.list = function (req, res) {
    Restaurant.getAllRestaurant(function (err, restaurant) {
        if (err)
            res.send(err);
        console.log('res', restaurant);
        res.send(restaurant);
    });
};


exports.create = function (req, res) {
    var new_restaurant = new Restaurant(req.body);

    //handles null error 
    if (!new_restaurant.ownerId) {

        res.status(400).send({error: true, message: 'Please provide restaurant/ownerId'});

    } else if (!new_restaurant.name) {

        res.status(400).send({error: true, message: 'Please provide restaurant/name'});

    } else {

        Restaurant.createRestaurant(new_restaurant, function (err, restaurant) {

            if (err)
                res.send(err);
            res.json(restaurant);
        });
    }
};


exports.read = function (req, res) {
    Restaurant.getRestaurantById(req.params.restaurantId, function (err, restaurant) {
        if (err)
            res.send(err);
        res.json(restaurant);
    });
};


exports.update = function (req, res) {
    Restaurant.updateById(req.params.restaurantId, new Restaurant(req.body), function (err, restaurant) {
        if (err)
            res.send(err);
        res.json(restaurant);
    });
};


exports.delete = function (req, res) {


    Restaurant.remove(req.params.restaurantId, function (err, restaurant) {
        if (err)
            res.send(err);
        res.json({message: 'Restaurant successfully deleted'});
    });
};
'use strict';

var User = require('../models/userModel.js');

exports.list = function (req, res) {
    User.getAllUser(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.create = function (req, res) {
    var new_user = new User(req.body);

    //handles null error
    if (!new_user.name) {

        res.status(400).send({error: true, message: 'Please provide user/name'});

    } else {

        User.createUser(new_user, function (err, user) {

            if (err)
                res.send(err);
            res.json(user);
        });
    }
};

exports.read = function (req, res) {
    User.getUserById(req.params.userId, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.update = function (req, res) {
    User.updateById(req.params.userId, new User(req.body), function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.delete = function (req, res) {


    User.remove(req.params.userId, function (err, user) {
        if (err)
            res.send(err);
        res.json({message: 'User successfully deleted'});
    });
};

exports.orders = function(req, res){
    User.getOrders(req.params.userId, function (err, orders) {
        if(err)
            res.send(err);
        res.json(orders);
    })
};
'use strict';

let Owner = require('../models/ownerModel.js');

exports.list = function (req, res) {
    Owner.getAllOwner(function (err, owner) {
        if (err)
            res.send(err);
        console.log('res', owner);
        res.send(owner);
    });
};

exports.create = function (req, res) {
    let new_owner = new Owner(req.body);

    //handles null error
    if (!new_owner.name) {
        res.status(400).send({error: true, message: 'Please provide owner/name'});
    } else {
        Owner.createOwner(new_owner, function (err, owner) {
            if (err)
                res.send(err);
            res.json(owner);
        });
    }
};

exports.read = function (req, res) {
    Owner.getOwnerById(req.params.ownerId, function (err, owner) {
        if (err)
            res.send(err);
        res.json(owner);
    });
};

exports.update = function (req, res) {
    Owner.updateById(req.params.ownerId, new Owner(req.body), function (err, owner) {
        if (err)
            res.send(err);
        res.json(owner);
    });
};

exports.delete = function (req, res) {
    Owner.remove(req.params.ownerId, function (err, owner) {
        if (err)
            res.send(err);
        res.json({message: 'Owner successfully deleted'});
    });
};

exports.restaurants = function(req, res){
    Owner.getRestaurants(req.params.ownerId, function (err, restaurants) {
        if(err)
            res.send(err);
        res.json(restaurants);
    })
};
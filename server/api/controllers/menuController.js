'use strict';

var Menu = require('../models/menuModel.js');

exports.list = function (req, res) {
    Menu.getAllMenu(function (err, menu) {
        if (err)
            res.send(err);
        console.log('res', menu);
        res.send(menu);
    });
};

exports.create = function (req, res) {
    var new_menu = new Menu(req.body);

    //handles null error
    if (!new_menu.name) {

        res.status(400).send({error: true, message: 'Please provide menu/status'});

    } else {

        Menu.createMenu(new_menu, function (err, menu) {

            if (err)
                res.send(err);
            res.json(menu);
        })
    }
};

exports.read = function (req, res) {
    Menu.getMenuById(req.params.menuId, function (err, menu) {
        if (err)
            res.send(err);
        res.json(menu);
    });
};

exports.update = function (req, res) {
    Menu.updateById(req.params.menuId, new Menu(req.body), function (err, menu) {
        if (err)
            res.send(err);
        res.json(menu);
    });
};

exports.delete = function (req, res) {
    Menu.remove(req.params.menuId, function (err, menu) {
        if (err)
            res.send(err);
        res.json({message: 'Menu successfully deleted'});
    });
};

exports.orders = function (req, res) {
    Menu.getOrders(req.params.menuId, function (err, orders) {
        if (err)
            res.send(err);
        res.json(orders)
    })
};
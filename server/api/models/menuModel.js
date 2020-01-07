'use strict';
let sql = require('./db.js');
let builder = require('./modelsBuilder');

//Menu object constructor
let Menu = function (menu) {
    this.name = menu.name;
    this.price = menu.price;
    this.description = menu.description;
    this.restaurantId = menu.restaurantId;
    this.is_available = menu.is_available;
    this.category = menu.category;
};

Menu.createMenu = builder.create('menus');
Menu.getMenuById = builder.read('menus');
Menu.getAllMenu = builder.list('menus');
Menu.updateById = builder.update('menus');
Menu.remove = builder.delete('menus');

Menu.getOrders = function (id, result) {
    sql.query("SELECT * from orders WHERE menuId = ?", id, function (err, res) {
        if(err){
            console.log("error:", err);
            result(err, null);
        } else {
            result(null, res);
        }
    })
};

let createTable = 'create table if not exists menus(' +
    'id int unsigned auto_increment primary key, ' +
    'name char(255) not null, ' +
    'description char(255) null, ' +
    'price int unsigned null, ' +
    'is_available tinyint(1) default 1 null, ' +
    'restaurantId int unsigned null, ' +
    'category char(255) null, ' +
    'constraint menus_restaurants_id_fk foreign key (restaurantId) references restaurants (id) on delete cascade' +
    ');';

sql.query(createTable, function (err, res) {
    if (err) {
        console.log("error: ", err);
    } else {
        console.log("Table 'menus' exists");
    }
});

module.exports = Menu;
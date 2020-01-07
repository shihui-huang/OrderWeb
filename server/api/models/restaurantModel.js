'use strict';

var sql = require('./db.js');
let builder = require('./modelsBuilder');

//Restaurant object constructor
var Restaurant = function (restaurant) {
    this.name = restaurant.name;
    this.ownerId = restaurant.ownerId;
    this.address = restaurant.address;
    this.phone = restaurant.phone;
    this.category = restaurant.category;
};

Restaurant.createRestaurant = builder.create('restaurants');
Restaurant.getRestaurantById = builder.read('restaurants');
Restaurant.getAllRestaurant = builder.list('restaurants');
Restaurant.updateById = builder.update('restaurants');
Restaurant.remove = builder.delete('restaurants');
Restaurant.getMenus = function (id, result) {
    sql.query("SELECT * from menus WHERE restaurantId = ?", id, function (err, res) {
        if (err) {
            console.log("error:", err);
            result(err, null);
        } else {
            result(null, res);
        }
    })
};


var createScript = 'create table if not exists restaurants(' +
    'id int unsigned auto_increment primary key, ' +
    'name char(255) not null, ' +
    'ownerId int unsigned not null, ' +
    'address char(255) null, ' +
    'phone char(20) null, ' +
    'category char(255) null, ' +
    'constraint restaurants_owners_id_fk foreign key (ownerId) references owners (id) on delete cascade' +
    ');';

sql.query(createScript, [], function (err, res) {
    if (err) {
        console.log("error:", err);
    } else {
        console.log("Table 'restaurants' exists");
    }
});

module.exports = Restaurant;
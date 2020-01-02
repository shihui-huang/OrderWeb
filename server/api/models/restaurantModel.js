'use strict';

var sql = require('./db.js');
let builder = require('./modelsBuilder');

//Restaurant object constructor
var Restaurant = function (restaurant) {
    this.name = restaurant.name;
    this.ownerId = restaurant.ownerId;
    this.address = restaurant.address;
    this.phone = restaurant.phone;
    this.menuId = restaurant.menuId;
};

Restaurant.createRestaurant = builder.create('restaurants');
Restaurant.getRestaurantById = builder.read('restaurants');
Restaurant.getAllRestaurant = builder.list('restaurants');
Restaurant.updateById = builder.update('restaurants');
Restaurant.remove = builder.delete('restaurants');

var createScript = 'create table if not exists restaurants(id int unsigned auto_increment primary key, ownerId int unsigned not null, address char(255) null, phone char(20) null, constraint restaurants_orders_id_fk foreign key (ownerId) references orders (id) on delete cascade);';

sql.query(createScript, [], function (err, res) {
    if (err) {
        console.log("error:", err);
    } else {
        console.log("Table 'restaurants' exists");
    }
});

module.exports = Restaurant;
'use strict';

var sql = require('./db.js');

//Restaurant object constructor
var Restaurant = function(restaurant){
    this.name = restaurant.name;
    this.ownerId = restaurant.ownerId;
    this.address = restaurant.address;
    this.phone = restaurant.phone;
    this.menuId = restaurant.menuId;
};

Restaurant.createRestaurant = function (newRestaurant, result) {
    sql.query("INSERT INTO restaurants set ?", newRestaurant, function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Restaurant.getRestaurantById = function (restaurantId, result) {
    sql.query("Select restaurant from restaurants where id = ? ", restaurantId, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);

        }
    });
};
Restaurant.getAllRestaurant = function (result) {
    sql.query("Select * from restaurants", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('restaurants : ', res);

            result(null, res);
        }
    });
};
Restaurant.updateById = function(id, restaurant, result){
    sql.query("UPDATE restaurants SET restaurant = ? WHERE id = ?", [restaurant, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
Restaurant.remove = function(id, result){
    sql.query("DELETE FROM restaurants WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{

            result(null, res);
        }
    });
};

var createScript = 'create table if not exists restaurants(id int unsigned auto_increment primary key, ownerId int unsigned not null, address char(255) null, phone char(20) null, constraint restaurants_orders_id_fk foreign key (ownerId) references orders (id) on delete cascade);';

sql.query(createScript, [], function (err, res) {
    if(err){
        console.log("error:", err);
    }else{
        console.log("Table 'restaurants' exists");
    }
});

module.exports= Restaurant;
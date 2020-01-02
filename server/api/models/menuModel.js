'use strict';
var sql = require('./db.js');

//Menu object constructor
var Menu = function(menu){
    this.userId = menu.userId;
    this.status = menu.status;
    this.menuId = menu.menuId;
    this.created_at = new Date();
};
Menu.createMenu = function (newMenu, result) {
    sql.query("INSERT INTO menus set ?", newMenu, function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res.insertId);
        }
    });
};
Menu.getMenuById = function (menuId, result) {
    sql.query("Select menu from menus where id = ? ", menuId, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);

        }
    });
};
Menu.getAllMenu = function (result) {
    sql.query("Select * from menus", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('menus : ', res);

            result(null, res);
        }
    });
};
Menu.updateById = function(id, menu, result){
    sql.query("UPDATE menus SET menu = ? WHERE id = ?", [menu, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
Menu.remove = function(id, result){
    sql.query("DELETE FROM menus WHERE id = ?", [id], function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{

            result(null, res);
        }
    });
};

var createTable ='create table if not exists menus(id int unsigned auto_increment primary key, name char(255) not null, description char(255) null, price int unsigned null, is_available tinyint(1) default 1 null, restaurantId int unsigned null, constraint menus_restaurants_id_fk foreign key (restaurantId) references restaurants (id) on delete cascade);';
sql.query(createTable, function (err, res) {
    if(err) {
        console.log("error: ", err);
    }
    else{
        console.log("Table 'menus' exists");
    }
});

module.exports= Menu;
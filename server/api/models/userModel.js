'use strict';
var sql = require('./db.js');

//User object constructor
var User = function (user) {
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
    this.phone = user.phone;
    this.address = user.address;
};
User.createUser = function (newUser, result) {
    sql.query("INSERT INTO users set ?", newUser, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res.insertId);
        }
    });
};
User.getUserById = function (userId, result) {
    sql.query("Select user from users where id = ? ", userId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);

        }
    });
};
User.getAllUser = function (result) {
    sql.query("Select * from users", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('users : ', res);

            result(null, res);
        }
    });
};
User.updateById = function (id, user, result) {
    sql.query("UPDATE users SET user = ? WHERE id = ?", [user, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
User.remove = function (id, result) {
    sql.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {

            result(null, res);
        }
    });
};

var createTable = 'create table if not exists users(id int unsigned auto_increment primary key, name char(255) not null, email char(255) null, password char(255) null, phone char(255) null, address char(255) null);';
sql.query(createTable, function (err, res) {
    if (err) {
        console.log("error: ", err);
    } else {
        console.log("Table 'users' exists");
    }
});

module.exports = User;
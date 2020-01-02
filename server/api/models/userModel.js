'use strict';
var sql = require('./db.js');
let builder = require('./modelsBuilder');

//User object constructor
var User = function (user) {
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
    this.phone = user.phone;
    this.address = user.address;
};
User.createUser = builder.create('users');
User.getUserById = builder.read('users');
User.getAllUser = builder.list('users');
User.updateById = builder.update('users');
User.remove = builder.delete('users');

var createTable = 'create table if not exists users(id int unsigned auto_increment primary key, name char(255) not null, email char(255) null, password char(255) null, phone char(255) null, address char(255) null);';
sql.query(createTable, function (err, res) {
    if (err) {
        console.log("error: ", err);
    } else {
        console.log("Table 'users' exists");
    }
});

module.exports = User;
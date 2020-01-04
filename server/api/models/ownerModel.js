'use strict';
var sql = require('./db.js');
let builder = require('./modelsBuilder');

//Owner object constructor
var Owner = function(owner){
    this.name = owner.name;
};

Owner.createOwner = builder.create('owners');
Owner.getOwnerById = builder.read('owners');
Owner.getAllOwner = builder.list("owners");
Owner.updateById = builder.update('owners');
Owner.remove = builder.delete('owners');

Owner.getRestaurants = function (id, result) {
    sql.query("SELECT * from restaurants WHERE ownerId = ?", id, function (err, res) {
        if(err){
            console.log("error:", err);
            result(err, null);
        } else {
            result(null, res);
        }
    })
};

var createTable ='create table if not exists owners(id int unsigned auto_increment primary key, name char(255) not null);';

sql.query(createTable, function (err, res) {
    if(err) {
        console.log("error: ", err);
    }
    else{
        console.log("Table 'owners' exists");
    }
});

module.exports= Owner;
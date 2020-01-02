'use strict';
var sql = require('./db.js');

//Owner object constructor
var Owner = function(owner){
    this.name = owner.name;
};
Owner.createOwner = function (newOwner, result) {
    sql.query("INSERT INTO owners set ?", newOwner, function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res.insertId);
        }
    });
};
Owner.getOwnerById = function (ownerId, result) {
    sql.query("Select owner from owners where id = ? ", ownerId, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);

        }
    });
};
Owner.getAllOwner = function (result) {
    sql.query("Select * from owners", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('owners : ', res);

            result(null, res);
        }
    });
};
Owner.updateById = function(id, owner, result){
    sql.query("UPDATE owners SET owner = ? WHERE id = ?", [owner, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
Owner.remove = function(id, result){
    sql.query("DELETE FROM owners WHERE id = ?", [id], function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{

            result(null, res);
        }
    });
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
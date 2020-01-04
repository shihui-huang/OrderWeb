'use strict';
var sql = require('./db.js');

exports.create = function (objectName) {
    return function (newObject, result) {
        sql.query("INSERT INTO " + objectName + " set ?", [newObject], function (err, res) {

            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                sql.query("SELECT * FROM " + objectName + " WHERE id =?", [res.insertId], function (err, res) {
                    if (err) {
                        console.log("error:", err);
                        result(err, null);
                    } else {
                        result(null, res);
                    }
                });
            }
        });
    }
};

exports.read = function (objectName) {
    return function (objectId, result) {
        sql.query("Select * from " + objectName + " where id = ? ", objectId, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };
};

exports.list = function (objectName) {
    return function (result) {
        sql.query("Select * from " + objectName, function (err, res) {

            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                console.log('owners : ', res);

                result(null, res);
            }
        });
    }
};

exports.update = function (objectName) {
    return function (id, object, result) {
        sql.query("UPDATE " + objectName + " SET ? WHERE id = ?", [object, id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                sql.query("SELECT * FROM " + objectName + " WHERE id =?", [id], function (err, res) {
                    if (err) {
                        console.log("error:", err);
                        result(err, null);
                    } else {
                        result(null, res);
                    }
                });
            }
        });
    };
};

exports.delete = function (objectName) {
    return function (id, result) {
        sql.query("DELETE FROM " + objectName + " WHERE id = ?", [id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    };
};
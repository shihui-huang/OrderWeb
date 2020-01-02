'use strict';

let mysql = require('mysql');

//local mysql db connection
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'user',
    password : 'password',
    database : 'javascript_project'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
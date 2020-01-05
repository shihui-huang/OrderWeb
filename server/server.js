var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    cors = require('cors');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


var routes = require('./api/routes/router'); //importing routes
routes(app); //register the routes


app.listen(port);


console.log('orders RESTful API server started on port: ' + port);
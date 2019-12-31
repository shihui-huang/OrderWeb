var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Order = require('./api/models/orderModel'),
    Restaurant = require('./api/models/restaurantModel'),
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Orderdb');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var routes = require('./api/routes/router'); //importing route
routes(app); //register the route


app.listen(port);


console.log('orders RESTful API server started on: ' + port);
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RestaurantSchema = new Schema({
    name: {
        type: String,
        required: 'Entrez le nom du restaurant'
    },
    address: {
        type: String
    }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OrderSchema = new Schema({
    name: {
        type: String,
        required: 'Entrez le nom de la commande'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Restaurant'
    }
});

module.exports = mongoose.model('Order', OrderSchema);
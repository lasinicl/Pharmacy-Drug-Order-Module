'use strict';

const mongoose = require('mongoose');
const autoIncrement = require('mongodb-autoincrement');
const Schema = mongoose.Schema;

const RequestsSchema = new Schema({
    request_id:{
        type:String,
        required:true
    },

    drugName: {
        type: String
    },

    requestQty:{
        type:Number
    },

    date:{
        type:ISODate
    },

    status:{
        type:String,

    }


});

RequestsSchema.plugin(autoIncrement.mongoosePlugin);
const Request = mongoose.model('Request', RequestsSchema);
module.exports = Request;



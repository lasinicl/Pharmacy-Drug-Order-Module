
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const newOreder = new Schema ({
    name: {
        type:String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
});

const Order = mongoose.model('orders', newOreder);

module.exports = Order;
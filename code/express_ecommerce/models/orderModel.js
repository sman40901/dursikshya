const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema  // id of a model
// const User = require('../models/authModel');


const orderSchema = new mongoose.Schema({
    orderItems: [{
        // since more than one items will be ordered at a time we are using array
        type: ObjectId,
        required: true,
        ref: 'OrderItem'
    }],
    shippingAddress1: {
        type: String,
        required: true
    },
    shippingAddress2: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Pending',
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    }
    // dateOrdered:{
    //     type:Date,
    //     required:true,
    //     default:Date.now()
    // }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema // id of a model

const orderItemSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type: ObjectId,
        required: true,
        ref: 'Product'
    }
}, { timestamps: true })

module.exports = mongoose.model('OrderItem', orderItemSchema);
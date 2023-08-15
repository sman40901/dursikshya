const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const productSchema = new mongoose.Schema({
    product_name: {
        type: String, // filed type is string
        required: true, // this is a required filed
        trim: true // removes whitespace from start and end
    },
    product_price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    product_description: {
        type: String,
        required: true
    },
    product_image: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        default: 0,
        max: 5
    },
    category: {
        type: ObjectId,
        required: true,
        ref: 'Category'
    }
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema);
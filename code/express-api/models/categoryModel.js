const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({ // curly braces means object
    category_name: {
        type: String, // filed type is string
        required: true, // this is a required filed
        unique: true, // this field value must be unique
        trim: true // removes whitespace from start and end
    }
}, { timestamps: true }) // auto creates and populates created at and updated at

module.exports = mongoose.model('Category', categorySchema);
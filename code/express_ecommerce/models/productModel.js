const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema // id of a model
//ObjectId is used to link data between different collections(table)

const productSchema=new mongoose.Schema({
    product_name:{
        required:true,
        type:String,
        trim:true
    },
    product_price:{
        type:Number,
        required:true
    },
    countInStock:{
        type:Number,
        required:true
    },
    product_description:{
        type:String,
        required:true
    },
    product_image:{
        type:String,
        required:true
    },
    product_rating:{
        type:Number,
        default:0,
        max:5
    },
    category:{
        type:ObjectId, // can only be used after importing
        required:true,
        ref:'Category'
    }
},{timestamps:true});

module.exports=mongoose.model('Product',productSchema);
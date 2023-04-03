const mongoose=require('mongoose');

const {ObjectId}=mongoose.Schema; 
// this required to get a foreign key from other tables

const tokenSchema=new mongoose.Schema({
    token:{
        type:String,
        required:true
    },
    userId:{
        type:ObjectId,
        ref:'User',
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:24*60*60
    }
})

module.exports=mongoose.model('token',tokenSchema);
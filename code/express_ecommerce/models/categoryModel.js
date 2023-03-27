// tables are called collection in node
const mongoose=require('mongoose');

const categorySchema=new mongoose.Schema({
    category_name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    }
},{timeStamps:true}) // created and updated time stamp is recorded -> timestamps:true

module.exports=mongoose.model('Category',categorySchema);
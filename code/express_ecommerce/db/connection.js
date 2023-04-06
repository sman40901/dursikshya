const mongoose=require('mongoose');
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true, // json data parse
    useUnifiedTopology:true // so that data does not collide
})
.then(()=>console.log('database connected'))
.catch(err=>console.log(err))
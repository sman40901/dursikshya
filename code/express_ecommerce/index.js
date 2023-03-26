// this index.js file could be named as Server.js or app.js

const express=require("express"); 
// express is famework for Node.js
const app=express();
require('dotenv').config(); // if we dont import like this we wont be able to use dotenv file
require('./db/connection');

// app.get('/',(req,res)=>{
//     res.send("hello ecommerce service is running");
// })

app.get('/lifeCheck',(req,res)=>{
    res.send("hello ecommerce service is running");
})

// app.get('/test',(req,res)=>{
//     res.send('this is a test fucntion');
// })

const categoryRoute=require('./routes/categoryRoutes');

//routes
app.use('/api',categoryRoute);

const port=process.env.PORT || 8000
app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
});

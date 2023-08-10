const express=require('express');
const app=express()
require('dotenv').config()


app.get('/',(req,res)=>{
    res.send('this is a sever file of our project')
})


const port=process.env.PORT||8000

app.listen(port ,()=>{
    console.log(`server started on port ${port}`)
})
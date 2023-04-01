// this index.js file could be named as Server.js or app.js

const express = require("express");
// express is famework for Node.js
const app = express();
require('dotenv').config(); // if we dont import like this we wont be able to use dotenv file
require('./db/connection');

const bodyParser = require('body-parser');
const morgan = require("morgan");

//middleware
app.use(bodyParser.json());
app.use(morgan('dev')); // use in development mode only
app.use('/public/uploads', express.static('public/uploads'));
//express.static is used for static path, 
// this should match with let fileDestination = 'public/uploads/'; in file-upload.js

// app.get('/',(req,res)=>{
//     res.send("hello ecommerce service is running");
// })

app.get('/lifeCheck', (req, res) => {
    res.send("hello ecommerce service is running");
})

// app.get('/test',(req,res)=>{
//     res.send('this is a test fucntion');
// })

const categoryRoute = require('./routes/categoryRoutes');
const productRoute = require('./routes/productRoutes');

//routes
app.use('/api', categoryRoute);
app.use('/api', productRoute);

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

const express = require('express');
const app = express()
require('dotenv').config();
require('./db/connection');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const categoryRoute = require('./routes/categoryRoute');
const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');
const orderRoute = require('./routes/orderRoute');


app.get('/', (req, res) => {
    res.send('this is a sever file of our project');
})

// middle ware: if condition is ok, then forward the request to backend
app.use(morgan('dev')); // only can be use in dev mode
app.use(bodyParser.json());
app.use('/public/uploads', express.static('public/uploads')); // so that front end can access public folder to access the pics

//routes
app.use('/api', categoryRoute); // prefixed with 'api' path
app.use('/api', productRoute);
app.use('/api', userRoute);
app.use('/api', orderRoute);


const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})
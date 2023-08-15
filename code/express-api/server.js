const express = require('express');
const app = express()
require('dotenv').config();
require('./db/connection');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const categoryRoute = require('./routes/categoryRoute');
const productRoute = require('./routes/productRoute');


app.get('/', (req, res) => {
    res.send('this is a sever file of our project');
})

// middle ware: if condition is ok, then forward the request to backend
app.use(morgan('dev')); // only can be use in dev mode
app.use(bodyParser.json());

//routes
app.use('/api', categoryRoute) // prefixed with 'api' path
app.use('/api', productRoute)


const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})
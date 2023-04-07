const express = require('express');
const { postOrders } = require('../controllers/orderController');
const router = express.Router();

router.get('/postorders', postOrders); 
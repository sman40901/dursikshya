const express = require('express');
const { postOrders, orderList, orderDetails } = require('../controllers/orderController')
const router = express.Router();

router.post('/postorders', postOrders);
router.get('/orderlist', orderList);
router.get('/orderdetails/:id', orderDetails);

module.exports = router
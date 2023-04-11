const express = require('express');
const { postOrders, orderList, orderDetails, orderUpdate, userOrderDetails, deleteOrder } = require('../controllers/orderController')
const router = express.Router();

router.post('/postorders', postOrders);
router.get('/orderlist', orderList);
router.get('/orderdetails/:id', orderDetails);
router.put('/orderupdate/:id', orderUpdate);
router.get('/userorderlist/:userid', userOrderDetails);
router.delete('/orderdelete/:id', deleteOrder);

module.exports = router
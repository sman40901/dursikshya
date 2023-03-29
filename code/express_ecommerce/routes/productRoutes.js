const express = require('express');
const { productPost, productList, productId } = require('../controllers/productControllers');

const router = express.Router();

router.post("/productpost", productPost)
router.get('/productlist/:order',productList);
router.get('/productdetails/:id',productId);
module.exports = router
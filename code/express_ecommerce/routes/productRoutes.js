const express = require('express');
const { productPost, productList, productId, productUpdate, productDelete } = require('../controllers/productControllers');

const router = express.Router();

router.post("/productpost", productPost)
router.get('/productlist/:order',productList);
router.get('/productdetails/:id',productId);
router.put('/productupdate/:id',productUpdate);
router.put('/productdelete/:id',productDelete);

module.exports = router
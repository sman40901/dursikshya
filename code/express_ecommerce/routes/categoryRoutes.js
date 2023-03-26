const express=require('express');
const { testFunction } = require('../controllers/categoryControllers');
const router=express.Router();


router.get('/demo',testFunction);

module.exports=router
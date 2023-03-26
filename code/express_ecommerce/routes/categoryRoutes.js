const express=require('express');
const { testFunction } = require('../controllers/categoryControllers');
const router=express.Router();


router.get('/demo',testFunction); //since function is getting called we dont need paranthesis

module.exports=router
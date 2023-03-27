const express=require('express');
const { testFunction, postCategory } = require('../controllers/categoryControllers');
const router=express.Router();


router.get('/demo',testFunction); //since function is getting called we dont need paranthesis
router.post('/postcategory',postCategory);
module.exports=router
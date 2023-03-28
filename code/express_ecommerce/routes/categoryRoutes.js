const express=require('express');
const { testFunction, postCategory, categoryList, categoryDetails, categoryUpdate, categoryDelete } = require('../controllers/categoryControllers');

const router=express.Router();


router.get('/demo',testFunction); //since function is getting called we dont need paranthesis
router.post('/postcategory',postCategory);
router.get('/categorylist',categoryList);
router.get('/categorydetails/:id',categoryDetails);
router.put('/categoryupdate/:id',categoryUpdate);
router.delete('/categorydelete/:id',categoryDelete);

module.exports=router
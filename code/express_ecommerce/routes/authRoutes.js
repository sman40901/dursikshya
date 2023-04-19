const express = require('express');
const router = express.Router();

const { userPost, userList, postEmailConfirmation, signIn, forgotPassword, resetPassword, userDetails, requireSignin, signOut, changePassword, userDelete, userActivate } = require('../controllers/userController');
const { userValidation, validation, passwordValidation } = require('../validation/validator');

router.post('/userpost', userValidation, validation, userPost);
router.get('/userlist', requireSignin, userList);
router.post('/confirmation/:token', postEmailConfirmation);
router.post('/signin', signIn);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:token', passwordValidation, validation, resetPassword);
router.get('/userdetails/:id', requireSignin, userDetails);
router.get('/signout', requireSignin, signOut);
router.post('/activate', userActivate);

// change password - DIY
router.post('/changepassword', requireSignin, changePassword);

// delete user -DIY
router.delete('/deleteuser/:email', requireSignin, userDelete);
module.exports = router;
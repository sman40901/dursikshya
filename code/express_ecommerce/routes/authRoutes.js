const express = require('express');
const router = express.Router();

const { userPost, userList, postEmailConfirmation, signIn, forgotPassword, resetPassword, userDetails, requireSignin, signOut } = require('../controllers/userController');
const { userValidation, validation, passwordValidation } = require('../validation/validator');

router.post('/userpost', userValidation, validation, userPost);
router.get('/userlist', requireSignin, userList);
router.post('/confirmation/:token', postEmailConfirmation);
router.post('/signin', signIn);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:token', passwordValidation, validation, resetPassword);
router.get('/userdetails/:id', requireSignin, userDetails);
router.get('/signout', requireSignin, signOut);

// change password - DIY
// delete user -DIY
module.exports = router;
const express = require('express');
const router = express.Router();

const { userPost, userList, postEmailConfirmation, signIn, forgotPassword, resetPassword } = require('../controllers/userController');

router.post('/userpost', userPost);
router.get('/userlist', userList);
router.post('/confirmation/:token', postEmailConfirmation);
router.post('/signin', signIn);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:token', resetPassword);


module.exports = router;
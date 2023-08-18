const User = require('../models/userModel');
const Token = require('../models/tokenModel');
const crypto = require('crypto');
const sendEmail = require('../utils/set-email');

//to register user
exports.postRegister = async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    // check for unique user / email
    User.findOne({ email: user.email })
        .then(async data => {
            if (data) {
                return res.status(400).json({ error: "this user already exists" })
            } else {
                user = await user.save();
                if (!user) {
                    return res.status(500).json({ error: 'user creation failed' });
                }

                // save token in the token model
                let token = new Token({
                    token: crypto.randomBytes(16).toString('hex'),
                    userId: user._id
                });
                token = await token.save();
                if (!token) {
                    return res.status(500).json({ error: 'failed to create token' })
                }

                // send email process
                sendEmail({
                    from: 'no-reply@ecommerce.com',
                    to: user.email,
                    subject: 'email verification link',
                    text: `Hello,\n\n
                    Please verify your email by clicking the link below:\n\n
                    http:\/\/${req.headers.host}\/api\/confirmation\/${token.token}
                    `
                    //http://localhost:5000/api/confirmation/454ABCDEF
                })
                res.send(user);
            }
        }).catch(err => {
            return res.status(400).json({ error: err });
        })

}

// to show the list of categories
exports.getUserList = async (req, res) => {
    const user = await User.find();
    if (!user) {
        return res.status(500).json({ error: 'could not retrive data' });
    }
    res.send(user);
}
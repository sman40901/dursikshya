const User = require('../models/authModel');
const crypto = require('crypto');
const Token = require('../models/tokenModel')



exports.userPost = async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    })

    User.findOne({ email: user.email })
        .then(async data => {
            if (data) {
                return res.status(400).json({ error: 'email already exists' })
            } else {
                user = await user.save();
                if (!user) {
                    return res.status(400).json({ error: 'something went wrong' });
                }
                let token = new Token({
                    token: crypto.randomBytes(16).toString(),
                    userId: user._id
                })
                token = await token.save();
                if (!token) {
                    return res.status(400).json({ error: 'failed to create token' });
                }
                // send email process
                sendEmail({
                    from: 'no-reply@express.com',
                    to: user.email,
                    subject: 'email verification',
                    text: `hello, \n\n
                    please verify your email address by clicking on the link:\n\n
                    http:\/\/${req.headers.host}\/api\/confirmation
                    `
                })
                res.send(user);
            }
        })
        .catch(err => {
            return res.status(400).json({ error: err })
        })


}

exports.userList = async (req, res) => {
    const user = await User.find();
    if (!user) {
        return res.status(400).json({ error: 'something went wrong' });
    }
    res.send(user);
}
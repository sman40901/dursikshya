const User = require('../models/authModel');
const crypto = require('crypto');
const Token = require('../models/tokenModel');
const sendEmail = require('../utils/setEmail');


// to register user 
exports.userPost = async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    })

    // to check if email already exists
    User.findOne({ email: user.email })
        .then(async data => {
            if (data) {
                return res.status(400).json({ error: 'email already exists' })
            } else {
                user = await user.save();
                if (!user) {
                    return res.status(400).json({ error: 'something went wrong' });
                }
                // create a token to send thru email,
                // why do we need this token?
                let token = new Token({
                    token: crypto.randomBytes(16).toString('hex'),
                    userId: user._id
                })
                token = await token.save();
                if (!token) {
                    return res.status(400).json({ error: 'failed to create token' });
                }
                // send email process for verification purpose
                sendEmail({
                    from: 'no-reply@express.com',
                    to: user.email,
                    subject: 'email verification',
                    text: `hello, \n\n
                    please verify your email address by clicking on the link:\n\n
                    http:\/\/${req.headers.host}\/api\/confirmation\/${token.token}
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

exports.postEmailConfirmation = (req, res) => {

    Token.findOne({ token: req.params.token })
        .then(token => {
            if (!token) {
                return res.status(400).json({ error: 'invalid token or token has expired' })
            }
            // if we find token find the user associated with that token
            User.findOne({ _id: token.userId })
                .then(user => {
                    if (!user) {
                        return res.status(400).json({ error: 'we are unable to find the valid user for this token' });
                    }
                    // chekc if user is already verified or not
                    if (user.isVerified) {
                        return res.status(400).json({ error: 'email already verfied, login to continue' });
                    }
                    // save the verified user
                    user.isVerified = true;
                    user.save()
                        .then(user => {
                            if (!user) {
                                // what if the server is down, should this be 400 or 500 error?
                                return res.status(400).json({ error: 'failed to verify your email, please try again' })
                            }
                            res.json({ message: 'your email has been verified' });
                        })
                        .catch(err => {
                            return res.status(400).json({ error: err });
                        })
                })
                .catch(err => {
                    return res.status(400).json({ error: err });
                })
        })
        .catch(err => {
            return res.status(400).json({ error: err });
        })

}


//sign in process
exports.signIn = async (req, res) => {
    const { email, password } = req.body;
    // at 1st check email is registered in db or not
    const user = await User.findOne({ email });
    if (!user) {
        // return res.status(400).json({ error: 'email you provided is not our system, please try again with another email' });
        return res.status(400).json({ error: 'email or password does not match!!!' });
    }
    // if email is found then check password for that email
    if (!user.authenticate(password)) {
        return res.status(400).json({ error: 'email or password does not match!!' });
    }
    // check if user is verified if user and passowrd matches
    if (!user.isVerified) {
        return res.status(400).json({ error: 'email is not verified yet, please verify your email' });
    }
    return res.json({ user: user });
}
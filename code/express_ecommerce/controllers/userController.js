const User = require('../models/authModel');
const crypto = require('crypto');
const Token = require('../models/tokenModel');
const sendEmail = require('../utils/setEmail');
const jwt = require('jsonwebtoken'); // needed for authencation
const { expressjwt } = require("express-jwt"); // needed for authorization



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

// get user list
exports.userList = async (req, res) => {
    const user = await User.find()
        .select('-hashed_password')
        .select('-salt');
    if (!user) {
        return res.status(400).json({ error: 'something went wrong' });
    }
    res.send(user);
}

exports.userDetails = async (req, res) => {
    const user = await User.findById(req.params.id)
        .select('-hashed_password')
        .select('-salt');
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
                                return res.status(500).json({ error: 'failed to verify your email, please try again' })
                            }
                            res.json({ message: 'your email has been verified' });
                        })
                        .catch(err => {
                            return res.status(500).json({ error: err });
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

    // now generate token with user id and jwt secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    // store jwt token in cookie
    res.cookie('myCookie', token, { expire: Date.now() + 99999 }) // expiry date is of cookie
    // return user information to frontend 
    const { _id, name, role } = user;
    // return res.json({ user: user });
    return res.json({ token, user: { name, email, role, _id } });
}

// forgot password
exports.forgotPassword = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ error: "email not found, please register" })
    }
    if (!user.isVerified) {

    }
    let token = new Token({
        userId: user._id,
        token: crypto.randomBytes(16).toString('hex')
    })
    token = await token.save();
    if (!token) {
        return res.status(500).json({ error: 'failed to create a token' });
    }

    // send email process for verification purpose
    // to reset password
    sendEmail({
        from: 'no-reply@express.com',
        to: user.email,
        subject: 'password reset link',
        text: `hello, \n\n
        please reset your password by clicking on the link:\n\n
        http:\/\/${req.headers.host}\/api\/resetpassword\/${token.token}
        `
    })
    res.json({ message: 'password reset link has been sent to your email' });
}

exports.resetPassword = async (req, res) => {
    // find valid token
    let token = await Token.findOne({ token: req.params.token })
    if (!token) {
        return res.status(400).json({ error: 'invalid token or token has expired' })
    }
    // if token foudn then find valid user
    let user = await User.findOne({ _id: token.userId })
    if (!user) {
        return res.status(400).json({ error: "user not found" })
    }
    user.password = req.body.password;
    user = await user.save();
    if (!user) {
        return res.status(500).json({ error: 'failed to reset password' })
    }
    res.json({ message: 'password has been reset' });
}

// require sign in
exports.requireSignin = expressjwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"]
});

//sign out
exports.signOut = (req, res) => {
    res.clearCookie('myCookie');
    res.json({ message: 'signout success' });
}

// change password
exports.changePassword = async (req, res) => {

    // not sure how not to let this user to change other user's password
    // we would need to deconstruct the token and check email against this user??
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ error: 'email or password does not match!!!' });
    }

    let oldHashedPass = user.authenticate(req.body.oldpassword);
    let newHashedPass = user.authenticate(req.body.newpassword);

    // if email is found then check password for that email
    if (!oldHashedPass) {
        return res.status(400).json({ error: 'old password does not match!!' });
    }

    // make sure new password is not old password
    if (oldHashedPass == newHashedPass) {
        return res.status(400).json({ error: 'your new password cannot be your old password' })
    }

    // reset new password
    user.password = req.body.newpassword;
    user = await user.save();
    if (!user) {
        return res.status(500).json({ error: 'failed to reset password' })
    }
    res.json({ message: 'password has been reset' });
}

// delete user
exports.userDelete = async (req, res) => {
    const u = await User.findOne({ email: req.params.email });
    const user = User.findByIdAndRemove(
        u._id,
    )
        .then(user => {
            if (!user) {
                return res.status(403).json({ error: 'user not found' });
            }
            else {
                return res.status(200).json({ message: 'user deleted' })
            }
        })
        .catch(err => {
            return res.status(400).json({ error: 'user not found' })
        })
}

exports.userActivate = async (req, res) => {

    let user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(400).json({ error: "user not found" })
    }
    user.isVerified = true;
    user = await user.save();
    if (!user) {
        return res.status(500).json({ error: 'user could not be updated' });
    }
    res.send(user);
}
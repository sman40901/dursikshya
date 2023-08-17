const nodemailer = require('nodemailer');


const sendEmail = options => {
    const transport = nodemailer.createTransport({ // get these values from env file
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "bb2786058d386e", 
            pass: "42b121ab9f978c"
        }
    });

    const mailOptions = {
        from: options.from,
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html
    }

    transport.sendMail(mailOptions);
}

module.exports = sendEmail
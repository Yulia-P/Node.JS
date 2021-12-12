const nodemailer = require('nodemailer');

module.exports = (message) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'pocikovskaau@gmail.com',
            pass: 'zalesse2015'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: 'pocikovskaau@gmail.com',
        to: 'pochikovskaja@gmail.com',
        subject: 'Module m0603',
        html: `<p>${message}</p>`
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
        });
};
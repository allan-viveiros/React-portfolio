require('dotenv').config(); 

const nodemailer = require('nodemailer');


function EmailSender () {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailOptions = {
        form: 'viveiros.dev@gmail.com',
        to: 'viveiros.dev@gmail.com',
        subject: 'Testing send email',
        text: 'Email test sent ok.'
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if(err) {
            console.log('Error!' + err);
        }
        else {
            console.log('Email sent!')
        }
    });

}


export default EmailSender;

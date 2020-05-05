import React from 'react';

import './formContact-style.scss';
// import EmailSender from './server';




function ContactForm () {

    require('dotenv').config(); 
    const nodemailer = require('nodemailer');

    const HandlerEmailSender = () => {
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


    return(
        <div className="main-form">
            <div className="container-form">
                <h3 className="h3-form"> Contact me directly </h3> 

                <form>

                    <div className="row100">
                        <div className="col">
                            <div className="inputBox">
                                <input type="text" name="" required="required" />
                                <span className="text"> Name: </span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>

                    <div className="row100">
                        <div className="col">
                            <div className="inputBox">
                                <input type="text" name="" required="required" />
                                <span className="text"> Email: </span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>

                    <div className="row100">
                        <div className="col">
                            <div className="inputBox">
                                <input type="text" name="" required="required" />
                                <span className="text"> Phone: </span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>

                    <div className="row100">
                        <div className="col">
                            <div className="inputBox textarea">
                                <textarea required="required" ></textarea>
                                <span className="text"> Type your message here. </span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>

                    <div className="row100">
                        <div className="col">
                            <input type="submit" value="Send" className="submit-button" />
                        </div>
                    </div>            

                </form> 
            </div>
            <br />
          
        </div>
    )
}


export default ContactForm;

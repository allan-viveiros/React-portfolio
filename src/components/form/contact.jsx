import React from 'react';

import './formContact-style.scss';


function ContactForm () {
  
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

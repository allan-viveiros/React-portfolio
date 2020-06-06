import React from 'react';

import './contactMe-style.scss';
// import CardContact from '../../components/form/cardContact';


function ContactMe () {
  
    return(
        <div className="main-form">
            <h3 className="h3-form"> Contact me directly </h3> 

            <div className="container-form">
                <div className="contact-info">
                    <span>viveirosallan@gmail.com</span>
                    <span>(519)639-6427</span>
                    <span>London, ON Canada</span>
                </div>
            
                <div className="icons"> 
                    <a href="https://www.linkedin.com/in/viveirosallan" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i> </a>           
                    <a href="https://github.com/allan-viveiros" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github"></i> </a>            
                    <a href="#!"> <i className="fab fa-facebook"></i> </a>
                    <a href="#!"> <i className="fab fa-instagram"></i> </a>
                </div>
            
            </div>          


            <div className="container-card">
                <div className="img-contact">
                       <span> </span>        

                </div>
                                           
            </div>
            

        </div>
    )
}


export default ContactMe;

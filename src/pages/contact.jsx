import React from 'react';

//import ContactForm from '../components/form/contact';
import ContactMe from '../components/form/contactMe';
import Footer from '../components/footer/footer';


const Contact = () => (
    <div className="div-contact">
        <main id="contact">
            <h1 className="lg-heading" > How to reach 
                <span className="text-secondary"> Me </span> 
            </h1>

            <ContactMe />
                       
        </main>

        <Footer /> 
    </div>
)


export default Contact;

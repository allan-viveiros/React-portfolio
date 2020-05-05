import React from 'react';

import ContactForm from '../components/form/contact';

//import Footer from '../component/footer';

const Contact = () => (
    <div className="div-contact">
        <main id="contact">
            <h1 className="lg-heading" > How to reach 
                <span className="text-secondary"> Me </span> 
            </h1>

            <ContactForm />


            {/* <Footer /> */}
        </main>

    </div>
)


export default Contact;

import React from 'react';
import '../css/index.css';
import ContactForm from '../components/contact/ContactForm';
import NavMenu from '../components/common/NavMenu';
import Footer from '../components/common/footer';

function ContactPage(){
  return(
    <div>
        <NavMenu />
        <ContactForm />
        <Footer />
    </div>
  )
}

    export default ContactPage;
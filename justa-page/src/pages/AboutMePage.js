import React from 'react';
import '../css/index.css';
import AboutMe from '../components/aboutme/AboutMe';
import NavMenu from '../components/common/NavMenu';
import Footer from '../components/common/footer';

function ContactPage(){
  return(
    <div>
        <NavMenu />
        <AboutMe />
        <Footer />
    </div>
  )
}

    export default ContactPage;
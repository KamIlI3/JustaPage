import React from 'react';
import '../css/index.css';
import Presentation from '../components/home/Presentation';
import AboutMe  from '../components/home/Omnie';
// import Gallery from '../components/home/Gallery';
import Contact from '../components/home/Contact';
import SocialMedia from '../components/common/SocialMedia';
import Footer from '../components/common/footer';
import Products from '../components/home/Products';

function HomePage(){
  return(
    <div>
        <Presentation />
        <AboutMe />
        <Products />
        {/* <Gallery /> */}
        <Contact />
        <SocialMedia />
        <Footer />
        
    </div>
  )
}

    export default HomePage;
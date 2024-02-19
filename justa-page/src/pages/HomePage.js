import React from 'react';
import '../css/index.css';
import Presentation from '../components/home/Presentation';
import AboutMe  from '../components/home/Omnie';
// import Gallery from '../components/home/Gallery';
import Contact from '../components/home/Contact';
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
        <Footer />
        
    </div>
  )
}

    export default HomePage;
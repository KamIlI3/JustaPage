import React from 'react';
import '../css/index.css';
import Gallery from '../components/gallery/Gallery';
import NavMenu from '../components/common/NavMenu';
import Footer from '../components/common/footer';

function GalleryPage(){
  return(
    <div>
        <NavMenu />
        <Gallery />
        <Footer />
    </div>
  )
}

    export default GalleryPage;
import React from 'react';
import '../css/index.css';
import NavMenu from '../components/common/NavMenu';
import Footer from '../components/common/footer';
import PolitykaODO from '../components/common/PolitykaODO';

function PolitykaODOPage(){
  return(
    <div>
        <NavMenu />
        <PolitykaODO />
        <Footer />
    </div>
  )
}

    export default PolitykaODOPage;
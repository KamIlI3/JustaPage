import React from 'react';
import '../css/index.css';
import NavMenu from '../components/common/NavMenu';
import Footer from '../components/common/footer';
import Regulamin from '../components/common/Regulamin';

function RegulaminPage(){
  return(
    <div>
        <NavMenu />
        <Regulamin />
        <Footer />
    </div>
  )
}

    export default RegulaminPage;
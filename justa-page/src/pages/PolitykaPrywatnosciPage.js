import React from 'react';
import '../css/index.css';
import NavMenu from '../components/common/NavMenu';
import Footer from '../components/common/footer';
import PolitykaPrywatnosci from '../components/common/PolitykaPrywatnosci';

function PolitykaPrywatnosciPage(){
  return(
    <div>
        <NavMenu />
        <PolitykaPrywatnosci />
        <Footer />
    </div>
  )
}

    export default PolitykaPrywatnosciPage;
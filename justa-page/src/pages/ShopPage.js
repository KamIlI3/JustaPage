import React from 'react';
import '../css/index.css';
import NavMenu from '../components/common/NavMenu';
import Footer from '../components/common/footer';
import Shop from '../components/shop/Shop';

function ShopPage(){
  return(
    <div>
        <NavMenu />
        <Shop />
        <Footer />
        
    </div>
  )
}

    export default ShopPage;
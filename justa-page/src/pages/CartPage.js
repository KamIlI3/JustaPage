import React from 'react';
import '../css/index.css';
import NavMenu from '../components/common/NavMenu';
import Footer from '../components/common/footer';
import Cart from '../components/cart/Cart';

function CartPage(){
  return(
    <div>
        <NavMenu />
        <Cart />
        <Footer />
        
    </div>
  )
}

    export default CartPage;
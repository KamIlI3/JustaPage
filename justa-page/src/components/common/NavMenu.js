import '../../css/index.css';
import React from 'react';
import { Link } from 'react-router-dom';

function NavMenu() {
  return (
    <div className="Nav">
        <div className="Nav-title">
          <h3>
            Justyna Gawryś
          </h3>
        </div>
        <div className='Nav-subpages'>
        <Link to="/">Strona Główna</Link>
        <Link to="/aboutme">O Mnie</Link>
        <Link to="/gallery">Galeria</Link>
        <Link to="/contact">Kontakt</Link>
        <Link to="/shop">Sklep</Link>
        <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
        </div>
    </div>
  );
}



export default NavMenu;

import "../../css/index.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "../cart/CartContext";

function NavMenu() {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="Nav">
      <div className="Nav-title">
        <h3>Justyna Gawryś</h3>
      </div>
      <div className="Nav-subpages">
        <Link to="/">Strona Główna</Link>
        <Link to="/aboutme">O Mnie</Link>
        <div className="dropdown-container" onMouseLeave={handleMouseLeave}>
        <Link to="/courses">Kurs <span className="sub-arrow" onMouseEnter={handleMouseEnter}><i className="fas fa-caret-down"></i></span></Link>
        {isDropdownOpen && (
        <div className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`} onMouseLeave={handleMouseLeave}>
          <Link to="/kursy/kurs1">Kurs 1</Link>
          <Link to="/kursy/kurs2">Kurs 2</Link>
        </div>
      )}
      </div>
        {/* <Link to="/gallery">Galeria</Link> */}
        <Link to="/contact">Kontakt</Link>
        <Link to="/shop">Sklep</Link>
        <Link to="/cart">
        <i id='cart-icon' className="fa-solid fa-cart-shopping">{totalQuantity > 0 && (
            <span className="Product-count">{totalQuantity}</span>
          )}</i>
          
        </Link>
      </div>
    </div>
  );
}

export default NavMenu;

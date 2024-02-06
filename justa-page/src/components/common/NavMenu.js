import "../../css/index.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "../cart/CartContext";

function NavMenu() {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="Nav">
      <div className="Nav-title">
        <h3>Justyna Gawryś</h3>
      </div>
      <div className="Nav-subpages">
        <Link to="/">Strona Główna</Link>
        <Link to="/aboutme">O Mnie</Link>
        <Link to="/gallery">Galeria</Link>
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

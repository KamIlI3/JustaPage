import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "../../css/Cart.css";

function Cart() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const totalValue = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="Cart">
      <div className="Cart-content">
        <h2>Twój Koszyk</h2>
        <div className="Cart-content2">
        {!cart || cart.length === 0 ? (
              <p>Koszyk jest pusty</p>
            ) : (
              <>
          <div className="Cart-products">
            
                <span className="Opis">
                  <p>Produkt</p>
                  <p>Cena</p>
                  <p>Ilość</p>
                  <p>Suma</p>
                  <p></p>
                </span>
                {cart.map((item, index) => (
                  <div key={index} className="Cart-item">
                    <img src={item.product_imgURL} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.price} zł</p>
                    <span>
                      <button onClick={() => addToCart(item, -1)}>-</button>
                      <p>{item.quantity}</p>
                      <button onClick={() => addToCart(item, 1)}>+</button>
                    </span>

                    <p>{item.quantity * item.price} zł</p>
                    <button onClick={() => removeFromCart(item)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                ))}
              
          </div>
          <div className="Cart-summary">
            <h2>Podsumowanie koszyka</h2>
            <label htmlFor="suma">SUMA</label>
            <p name="suma">{totalValue}</p>
            <button className="Go-to-payment">Przejdz do płatności</button>
          </div>
          </>
            )}
        </div>
      </div>
    </div>
  );
}

export default Cart;

import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import "../../css/Cart.css";

function Cart() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const totalValue = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discountName = "aaa";
  const discountValue = 0.05;
  const vat = 0.03;
  
  const [totalValueAfterDiscount, setTotalValueAfterDiscount] = useState(
    totalValue - totalValue * discountValue
  );
  const [totalValueAfterVat, setTotalValueAfterVat] = useState(
    totalValue + totalValue * vat
  );
  const [vatInZl, setVatInZl] = useState(
    totalValueAfterVat-totalValue
  );
  const [discountNameFromUser, setDiscountName] = useState("");
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);

  useEffect(() => {
    setTotalValueAfterDiscount(totalValue - totalValue * discountValue);
    setTotalValueAfterVat(totalValue + totalValue * vat);
  }, [totalValue, discountValue, vat, totalValueAfterDiscount]);

  const handleDiscountInputChange = (event) => {
    setDiscountName(event.target.value);
  };

  const handleApplyDiscount = () => {
    if (discountNameFromUser === discountName) {
      setIsDiscountApplied(true);
      setTotalValueAfterVat(totalValueAfterDiscount + totalValueAfterDiscount * vat);
    } else {
      setIsDiscountApplied(false);
    }
  };
  useEffect(() => {
    if (isDiscountApplied) {
      setVatInZl(totalValueAfterVat - totalValueAfterDiscount);
    } else {
      setTotalValueAfterVat(totalValue + totalValue * vat);
    }
  }, [isDiscountApplied, totalValue, totalValueAfterDiscount, vat, totalValueAfterVat]);

  return (
    <div className="Cart">
      <div className='Front-img'>
        <h1>Koszyk</h1>
        <img src='https://images.unsplash.com/photo-1588541536236-a65adf58af7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MjQ3fDB8MXxzZWFyY2h8MjZ8fGNhcnR8ZW58MHx8fHwxNzA4NTE1ODI4fDA&ixlib=rb-4.0.3&q=80&w=1620' alt="zdjecie"/></div>
      
        <div className="Cart-content">
        {!cart || cart.length === 0 ? (
              <p id="empty"><i className="fa-solid fa-circle-check"></i> Koszyk jest pusty</p>
            ) : (
              <>
              <div className="Cart-content2">
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
                          <p>{parseFloat(item.price).toLocaleString("pl-PL", {style:"currency", currency:"PLN"})}</p>
                          <span>
                            <button id="minus" onClick={() => addToCart(item, -1)}>-</button>
                            <p>{item.quantity}</p>
                            <button id="plus" onClick={() => addToCart(item, 1)}>+</button>
                          </span>

                          <p>{parseFloat(item.quantity * item.price).toLocaleString("pl-PL", {style:"currency", currency:"PLN"})}</p>
                          <button id="remove" onClick={() => removeFromCart(item)}><i className="fa-solid fa-xmark fa=2xl"></i></button>
                        </div>
                      ))}
                    
                </div>
                <span className="discount">
                  <input id="discountInput" type="text" placeholder="KOD" value={discountNameFromUser} onChange={handleDiscountInputChange}></input>
                  <button onClick={handleApplyDiscount}>Zastosuj rabat</button>
                </span>
          </div>
          <div className="Cart-summary">
            <h2>Podsumowanie koszyka</h2>
            <div>
            <p className="Summary-title">SUMA</p>
            <p>{parseFloat(totalValue).toLocaleString("pl-PL", {style:"currency", currency:"PLN"})}</p>
            <div className="line-cart"></div>
            </div>
            <div className={`no-discount-code  ${isDiscountApplied ? "discount-code " : "no-discount-code"}`}>
              <p className="Summary-title">Cena po rabacie - {discountValue*100}%</p>
              <p>{parseFloat(totalValueAfterDiscount).toLocaleString("pl-PL", {style:"currency", currency:"PLN"})}</p>
              <div className="line-cart"></div>
            </div>
            <div>
              <p className="Summary-title">Vat</p>
              <p>{parseFloat(vatInZl).toLocaleString("pl-PL", {style:"currency", currency:"PLN"})}</p>
              <div className="line-cart"></div>
            </div>
            <div>
              <p className="Summary-title">Suma całkowita</p>
              <p>{parseFloat(totalValueAfterVat).toLocaleString("pl-PL", {style:"currency", currency:"PLN"})}</p>
              <div className="line-cart"></div>
            </div>
            <button className="Go-to-payment">Przejdź do płatności</button>
          </div>
          </>
            )}
        </div>
    </div>
  );
}

export default Cart;

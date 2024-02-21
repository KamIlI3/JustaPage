import '../../css/Shop.css';
import React from 'react';
// import { useContext } from 'react';
// import useProductsData from '../../hooks/useProductsData';
// import { CartContext } from '../cart/CartContext';
import useCoursesData from '../../hooks/useCoursesData';
import { Link } from 'react-router-dom';

function Shop(){
    // const {products} = useProductsData();
    // const { addToCart } = useContext(CartContext);
    const {courses} = useCoursesData();

    return(
        <div className='Products'>
 <div className='Front-img'>
        <h1>Sklep</h1>
        <img src='https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MjQ3fDB8MXxzZWFyY2h8NjN8fHByb2R1Y3RzfGVufDB8fHx8MTcwODUxMzQ2M3ww&ixlib=rb-4.0.3&q=80&w=1440' alt="zdjecie"/></div> 
            <div className='Products-items'>
            {courses.map((cours) => (
                <div key={cours.id} className='Item'>
                    <div className='Item-img'>
                    <img src={cours.imgURL} alt={cours.name}/>
                    </div>
                    <div className='Item-content'>
                        <h3>{cours.name}</h3>
                        <Link to={cours.reference} className='Find-out-more'>Zobacz więcej!</Link>
                        {/* <h4>{parseFloat(product.price).toLocaleString("pl-PL", {style:"currency", currency:"PLN"})}</h4>
                        <button onClick={() => addToCart(product)} className="Add-to-cart">Dodaj do koszyka</button> */}

                    </div>
                </div>
                ))}
            </div>
            
            {/* <div className='Products-items'>
            {products.map((product) => (
                <div key={product.id} className='Item'>
                    <div className='Item-img'>
                    <img src={product.product_imgURL} alt={product.name}/>
                    </div>
                    <div className='Item-content'>
                        <h3>{product.name}</h3>
                        <h4>{parseFloat(product.price).toLocaleString("pl-PL", {style:"currency", currency:"PLN"})}</h4>
                        <button onClick={() => addToCart(product)} className="Add-to-cart">Dodaj do koszyka</button>

                    </div>
                </div>
                ))}
            </div> */}
            
        </div>
    )
}
    export default Shop;
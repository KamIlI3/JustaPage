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

            <div className='Products-items'>
            {courses.map((cours) => (
                <div key={cours.id} className='Item'>
                    <div className='Item-img'>
                    <img src={cours.imgURL} alt={cours.name}/>
                    </div>
                    <div className='Item-content'>
                        <h3>{cours.name}</h3>
                        <Link to={cours.reference} className='Find-out-more'>Dowiedz się więcej</Link>
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
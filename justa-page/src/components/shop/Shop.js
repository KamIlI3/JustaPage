import '../../css/Shop.css';
import React from 'react';
import { Link } from 'react-router-dom';
import useProductsData from '../../hooks/useProductsData';

function Shop(){
    const {products} = useProductsData();

    return(
        <div className='Products'>
            
            <div className='Products-items'>
            {products.map((product) => (
                <div key={product.id} className='Item'>
                    <div className='Item-img'>
                    <img src={product.product_imgURL} alt={product.name}/>
                    </div>
                    <div className='Item-content'>
                        <h3>{product.name}</h3>
                        <h4>{product.price}</h4>
                        <Link to="/shop" className="Add-to-cart">Dodaj do koszyka</Link>

                    </div>
                </div>
                ))}
            </div>
            
        </div>
    )
}
    export default Shop;
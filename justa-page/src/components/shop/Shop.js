import '../../css/Shop.css';
import React,{useContext} from 'react';
import useProductsData from '../../hooks/useProductsData';
import { CartContext } from '../cart/CartContext';

function Shop(){
    const {products} = useProductsData();
    const { addToCart } = useContext(CartContext);

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
                        <h4>{product.price}zł</h4>
                        <button onClick={() => addToCart(product)} className="Add-to-cart">Dodaj do koszyka</button>

                    </div>
                </div>
                ))}
            </div>
            
        </div>
    )
}
    export default Shop;
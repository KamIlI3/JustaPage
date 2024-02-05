import React from 'react';
import '../../css/Home.css';
import useProductsData from '../../hooks/useProductsData';

function Products(){
    const {products} = useProductsData();

    return (
        <div className='Products-home'>
            {products.slice().reverse().slice(0, 3).map((product, index) => (
                <div key={product.id} className={`Products-home-item ${index % 2 !== 0 ? 'Products-home-item-reverse' : ''}`}>
                    <div className='Products-home-item-img'>
                        <img src={product.product_imgURL} alt={product.name}/>
                    </div>
                    <div className='Products-home-item-content'>
                        <h3>{product.name}</h3>
                        <p>{product.short_description}</p>
                        <a href='index.html' className='Find-out-more'>Więcej informacji</a>
                    </div>
                </div>
             ))}
        </div>
    );
}

export default Products;

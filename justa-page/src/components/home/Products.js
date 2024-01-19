import React from 'react';
import '../../css/App.css';
import useProductsData from '../../hooks/useProductsData';

function Products(){
    const {products} = useProductsData();

    return (
        <div className='Products'>
            {products.map((product) =>(
                <div key={product.id} className='Products-item'>
            <div className='Products-item-img'>
                <img src={product.product_imgURL} alt={product.name}/>
            </div>
            <div className='Products-item-content'>
                <h3>{product.name}</h3>
                <p>{product.short_description}</p>
                <a href='index.html' className='Find-out-more'>Dowiedz się więcej!</a>
            </div>
        </div>
             ) )
            
        }
            
        </div>
      );
}

export default Products;
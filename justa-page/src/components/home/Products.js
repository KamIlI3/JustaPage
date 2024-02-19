import React from 'react';
import '../../css/Home.css';
// import useProductsData from '../../hooks/useProductsData';
import useCoursesData from '../../hooks/useCoursesData';
import { Link } from 'react-router-dom';

function Products(){
    // const {products} = useProductsData();
    const {courses} = useCoursesData();

    return (
        <div className='Products-home'>

                {courses.map((course, index) => (
                <div key={course.id} className={`Products-home-item ${index % 2 !== 0 ? 'Products-home-item-reverse' : ''}`}>
                    <div className='Products-home-item-img'>
                    <div className='Little-circle-products'></div>
                    <div className='Medium-circle-products'></div>
                    <div className='Square-products'></div>
                        <img src={course.imgURL} alt={course.name}/>
                    </div>
                    <div className='Products-home-item-content'>
                        <h3>{course.name}</h3>
                        <p>{course.short_description}</p>
                        <Link to={course.reference} className='Find-out-more'>Więcej informacji</Link>
                    </div>
                </div>
            ))}

            {/* {products.slice().reverse().slice(0, 3).map((product, index) => (
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
             ))} */}
        </div>
    );
}

export default Products;

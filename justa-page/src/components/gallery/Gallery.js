import React from 'react';
import '../../css/Gallery.css';
import useGalleryData from '../../hooks/useGalleryData';

function Gallery() {
  const { data } = useGalleryData();
  return (
    <div className="Gallery">
      <div className='Gallery-content'>
      {data.reverse().map((item) => (
        <div key={item.id} className='Gallery-image'>
            <p>{item.description}</p>
            <img src={item.imgURL} alt={item.description}/>
        </div>
        ))}
      </div>
    </div>
  );
}
export default Gallery;

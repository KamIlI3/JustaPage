import React from 'react';
import '../../css/Home.css';
import useGalleryData from '../../hooks/useGalleryData';
import { Link } from 'react-router-dom';

function Gallery() {
  const { images } = useGalleryData();
  return (
    <div className="Gallery">
      <h2>Efekty mojej pracy</h2>

      <div className="Gallery-effects">
        {images.map((image) => (
          <div key={image.id} className="Gallery-img">
            <img src={image.imgURL} alt="zdjecie z galerii" />
          </div>
        ))}
      </div>
      <Link to="/gallery" className="See-more">Zobacz więcej zdjęć</Link>
    </div>
  );
}
export default Gallery;

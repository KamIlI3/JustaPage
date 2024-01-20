import React from 'react';
import '../../css/Home.css';
import useGalleryData from '../../hooks/useGalleryData';

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
      <a className="See-more" href="Gallery.html">Zobacz więcej zdjęć</a>
    </div>
  );
}
export default Gallery;

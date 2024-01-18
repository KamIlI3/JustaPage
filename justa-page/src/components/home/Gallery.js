import '../../css/App.css';
import React, { useState, useEffect } from "react";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/gallery")
      .then((response) => response.json())
      .then((data) => {
        // Zakładając, że 'data' to tablica obiektów z polami 'id' i 'imgURL'
        setImages(data.slice(0, 3)); // Pobiera tylko trzy pierwsze obrazy
      })
      .catch((error) => console.error("Error fetching gallery:", error));
  }, []);
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
      <a className="See-more" href="Gallery.html">
        Zobacz więcej zdjęć
      </a>
    </div>
  );
}
export default Gallery;

import React from "react";
import "../../css/Home.css";
import useGalleryData from "../../hooks/useGalleryData";
import { Link } from "react-router-dom";

function Gallery() {
  const { data } = useGalleryData();
  return (
    <div className="Gallery-home">
      <h2>Efekty mojej pracy</h2>

      <div className="Gallery-home-effects">
      {[...data].reverse().slice(-3).map((item) => (
  <div key={item.id} className="Gallery-home-img">
    <img src={item.imgURL} alt="zdjecie z galerii" />
  </div>
))}
      </div>
      <Link to="/gallery" className="See-more">
        Zobacz więcej zdjęć
      </Link>
    </div>
  );
}
export default Gallery;

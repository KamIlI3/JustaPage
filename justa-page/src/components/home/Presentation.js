import React, { useContext, useState} from "react";
import "../../css/Home.css";
import useSlidesData from "../../hooks/useSlidesData";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartContext } from "../cart/CartContext";

function Presentation() {
  const { data } = useSlidesData();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    adaptiveHeight: true,
  };

  const sklepBackground = data.find(
    (item) => item.description === "sklep"
  )?.imgURL;
  const omnieBackground = data.find(
    (item) => item.description === "omnie"
  )?.imgURL;
  const kontaktBackground = data.find(
    (item) => item.description === "kontakt"
  )?.imgURL;

  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const [isShowMenuActive, setIsShowMenuActive] = useState(false);
  const handleMouseClick = () => {
    setIsShowMenuActive(!isShowMenuActive);
  };
    

  return (
    <div className="Presentation">
      <div className="Nav-title-home">
        <h3 className="justyna-gawrys">Justyna Gawryś</h3>
      </div>
      {isShowMenuActive ? (
        <button className={`Show-menu-bar`} onClick={handleMouseClick}> <i className="fa-solid fa-times fa-xl"></i></button>
      ) : (
        <button className="Show-menu-bar" onClick={handleMouseClick}><i className="fa-solid fa-bars fa-xl"></i></button>
      )}
      <div
        className={`Nav-subpages-home ${isShowMenuActive ? "Nav-subpages-home-active" : "" }`}
      >
        <Link to="/">Strona Główna</Link>
        <Link to="/aboutme">O Mnie</Link>
        <div className="dropdown-container" onMouseLeave={handleMouseLeave}>
          <Link to="/courses">Kurs{" "}
            <span className="sub-arrow" onMouseEnter={handleMouseEnter}><i className="fas fa-caret-down"></i></span>
          </Link>
          {isDropdownOpen && (
            <>
              <div
                className={`dropdown-menu ${isDropdownOpen ? "active" : ""}`} onMouseLeave={handleMouseLeave}>
                <Link to="/courses/kurs1">Kurs 1</Link>
              </div>
            </>
          )}
        </div>
        <Link to="/contact">Kontakt</Link>
        <Link to="/shop">Sklep</Link>
        <Link to="/cart"><i id="cart-icon" className="fa-solid fa-cart-shopping">
            {totalQuantity > 0 && (
              <span className="Product-count">{totalQuantity}</span>
            )}
          </i></Link>
      </div>
      <div className="Slides">
        <Slider {...settings}>
          <div className="Slides-item" id="shop-slide">
            <img src={sklepBackground} alt="sklep"></img>
            <Link to="/shop" className="slides-button"> Sklep</Link>
          </div>
          <div id="aboutme-slide" className="Slides-item">
            <img src={omnieBackground} alt="o_mnie" />
            <Link to="/aboutme" className="slides-button">O mnie</Link>
          </div>
          <div id="contact-slide" className="Slides-item">
            <img src={kontaktBackground} alt="kontakt" />
            <Link to="/contact" className="slides-button">Kontakt</Link>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Presentation;

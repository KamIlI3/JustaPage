// components/Presentation.js
import React from 'react';
import '../../css/Home.css';
import useSlidesData from "../../hooks/useSlidesData";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Presentation() {
  const { data } = useSlidesData();

  const settings = {
    dots: true,
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 5000, 
    swipeToSlide: true, 
    adaptiveHeight: true 
  };

    const sklepBackground = data.find(item => item.description === 'sklep')?.imgURL; // Zakładając, że URL znajduje się w właściwości `url`
    const omnieBackground = data.find(item => item.description === 'omnie')?.imgURL; 
    const kontaktBackground = data.find(item => item.description === 'kontakt')?.imgURL; 
  return (
    <div className='Presentation'>
    <div className='Slides'>
      <Slider {...settings}>
      <div className='Slides-item' id='shop-slide'> 
        <img src={sklepBackground} alt='sklep'></img>
        <Link to="/shop" className='slides-button'>Sklep</Link>
      </div>
       <div id='aboutme-slide' className='Slides-item' > 
      <img src={omnieBackground} alt='o_mnie'/>
      <Link to="/aboutme" className='slides-button'>O mnie</Link>
      </div>
      <div id='contact-slide' className='Slides-item'>
      <img src={kontaktBackground} alt='kontakt'/>
      <Link to="/contact" className='slides-button'>Kontakt</Link>
      </div>
      </Slider>
      
      
    </div>
    </div>
  );
}

export default Presentation;

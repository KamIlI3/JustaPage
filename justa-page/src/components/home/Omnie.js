import React from 'react';
import '../../css/Home.css';
import useOmnieData from '../../hooks/useOmnieData';
import { Link } from 'react-router-dom';

function AboutMe() {
  const { data } = useOmnieData();
  
  return (
    <div className="AboutMe-home">
      <div className="AboutMe-home-img">
        <div className='Little-circle'></div>
        <div className='Medium-circle'></div>
        <img src={data.imgURL} alt="JustynaGawryś" />
      </div>
      <div className="AboutMe-home-content">
        <img src='https://onedrive.live.com/embed?resid=BCC91EA560507C0D%2119670&authkey=%21AHQdMX-uSPhgfOw&width=1237&height=210' alt='omnieImg'></img>
        { <p>{data.entry}</p>}
        <Link to="/aboutme" className="Find-out-more">Czytaj dalej</Link>
      </div>
    </div>
  );
}

export default AboutMe;

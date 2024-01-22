import React from 'react';
import '../../css/Home.css';
import useOmnieData from '../../hooks/useOmnieData';
import { Link } from 'react-router-dom';

function AboutMe() {
  const { imgURL, entries } = useOmnieData();
  
  return (
    <div className="AboutMe">
      <div className="AboutMe-img">
        <img src={imgURL} alt="JustynaGawryś" />
      </div>
      <div className="AboutMe-content">
        <h2>O Mnie</h2>
        { <p>{entries}</p>}
        <Link to="/aboutme" className="Find-out-more">Czytaj dalej</Link>
      </div>
    </div>
  );
}

export default AboutMe;

import React from 'react';
import '../../css/Home.css';
import useOmnieData from '../../hooks/useOmnieData';
import { Link } from 'react-router-dom';

function AboutMe() {
  const { data } = useOmnieData();
  
  return (
    <div className="AboutMe-home">
      <div className="AboutMe-home-img">
        <img src={data.imgURL} alt="JustynaGawryś" />
      </div>
      <div className="AboutMe-home-content">
        <h2>O Mnie</h2>
        { <p>{data.entry}</p>}
        <Link to="/aboutme" className="Find-out-more">Czytaj dalej</Link>
      </div>
    </div>
  );
}

export default AboutMe;

import React from 'react';
import '../../css/Home.css';
import useOmnieData from '../../hooks/useOmnieData';

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
        <a className="Find-out-more" href="Omnie.html">Czytaj dalej</a>
      </div>
    </div>
  );
}

export default AboutMe;

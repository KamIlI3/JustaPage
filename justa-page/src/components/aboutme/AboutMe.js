import React from 'react';
import '../../css/AboutMe.css';
import useOmnieData from '../../hooks/useOmnieData';

function AboutMe() {
    const { data } = useOmnieData();
  
  return (
    <div className="AboutMe">
      <div className='AboutMe-lvl1'>
        <div className='AboutMe-img'>
            <img src={data.imgURL} alt="justyna"/>
        </div>
        <div className='AboutMe-entry'>
            <h2>O mnie</h2>
            <p>{data.entry}</p>
        </div>
      </div>
      <div className='AboutMe-lvl2'>
        <div className='AboutMe-presentation'>
            <p>{data.presentation}</p>
        </div>
        <div className='AboutMe-images'>
            <img id='img1' src={data.first_imgURL} alt="justyna"/>
            <img id='img2' src={data.second_imgURL} alt="justyna"/>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

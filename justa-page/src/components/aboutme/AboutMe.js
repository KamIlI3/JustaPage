import React from 'react';
import '../../css/AboutMe.css';
import useOmnieData from '../../hooks/useOmnieData';

function AboutMe() {
    const { data } = useOmnieData();
  
  return (
    <div className="AboutMe">
      <div className='Front-img'>
        <h1>O mnie</h1>
        <img src='https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MjQ3fDB8MXxzZWFyY2h8MTZ8fG1ha2V1cCUyMHByb2R1Y3RzfGVufDB8fHx8MTcwODQyOTc2OHww&ixlib=rb-4.0.3&q=80&w=1619' alt="zdjecie"/></div>
      <div className='AboutMe-lvl1'>
        <div className='AboutMe-img'>
            <img src={data.imgURL} alt="justyna"/>
        </div>
        <div className='AboutMe-entry'>
        <img src='https://onedrive.live.com/embed?resid=BCC91EA560507C0D%2119670&authkey=%21AHQdMX-uSPhgfOw&width=1237&height=210' alt='omnieImg'></img>
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

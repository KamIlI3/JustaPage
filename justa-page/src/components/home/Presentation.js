// components/Presentation.js
import React from 'react';
import '../../css/App.css';
import usePresentationData from '../../hooks/usePresentationData';

function Presentation() {
  const { title, content, imgURL } = usePresentationData();

  return (
    <div className='Presentation'>
      <div className='Presentation-content'>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <div className='Presentation-img'>
        <div className='PresImg'>
        <img src={imgURL} alt='JustynaGawryś' />
        </div>
        
      </div>
    </div>
  );
}

export default Presentation;

import './App.css';
import React, { useState, useEffect } from "react";

function Presentation(){
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  const [imgURL, setImgURL] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/presentation")
      .then((response) => response.json())
      .then((data) => {
        // Zakładając, że 'data' to tablica obiektów z polem 'entry'
        const retrievedTitle = data.map((presentation) => presentation.title);
        const retrievedContent = data.map((presentation) => presentation.content);
        const retrievedImgURL = data.map((presentation) => presentation.imgURL);
        setTitle(retrievedTitle);
        setContent(retrievedContent);
        setImgURL(retrievedImgURL);
      })
      .catch((error) => console.error("Error fetching Omnie:", error));
  }, []);
  return(
  <div className='Presentation'>
        <div className='Presentation-content'>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        <div className='Presentation-img'>
          <img src={imgURL} alt='JustynaGawryś'/>
        </div>
      </div>
  )   
}

    export default Presentation;
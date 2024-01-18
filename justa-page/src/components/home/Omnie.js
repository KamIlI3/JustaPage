import '../../css/App.css';
import React, { useState, useEffect } from "react";

function AboutMe() {

  const [entries, setEntries] = useState([]);
  const [imgURL, setURL] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/omnie")
      .then((response) => response.json())
      .then((data) => {
        // Zakładając, że 'data' to tablica obiektów z polem 'entry'
        const retrievedEntries = data.map((omnie) => omnie.entry);
        const retrievedURL = data.map((omnie) => omnie.imgURL);
        setEntries(retrievedEntries);
        setURL(retrievedURL);
      })
      .catch((error) => console.error("Error fetching Omnie:", error));
  }, []);

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

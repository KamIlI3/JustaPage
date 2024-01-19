import { useState, useEffect } from "react";

function useOmnieData() {
  const [entries, setEntries] = useState([]);
  const [imgURL, setURL] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/omnie")
      .then((response) => response.json())
      .then((data) => {
        const retrievedEntries = data.map((omnie) => omnie.entry);
        const retrievedURL = data.map((omnie) => omnie.imgURL);
        setEntries(retrievedEntries);
        setURL(retrievedURL);
      })
      .catch((error) => console.error("Error fetching Omnie:", error));
  }, []);
  return { imgURL, entries };
}

export default useOmnieData;

import { useState, useEffect } from "react";

function useGalleryData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/gallery")
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData); // fetchedData powinno być tablicą
      })
      .catch((error) => {
        console.error("Error fetching gallery:", error);
        setData([]); // Ustaw pustą tablicę w przypadku błędu
      });
  }, []);

  return { data };
}


export default useGalleryData;

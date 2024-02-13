import { useState, useEffect } from "react";

function useSlidesData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/slides")
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching slides:", error);
        setData([]); 
      });
  }, []);

  return { data };
}


export default useSlidesData;

import { useState, useEffect } from "react";

function useOpinionData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/opinions")
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


export default useOpinionData;

import { useState, useEffect } from "react";

function useOmnieData() {
  const [data, setData] = useState({ entries: [], imgURL: [], presentation: [], first_imgURL: [], second_imgURL: [] });

  useEffect(() => {
    fetch("http://localhost:3001/api/omnie")
      .then((response) => response.json())
      .then((fetchedData) => {
        setData({
          entry: fetchedData.map((item) => item.entry),
          imgURL: fetchedData.map((item) => item.imgURL),
          presentation: fetchedData.map((item) => item.presentation),
          first_imgURL: fetchedData.map((item) => item.first_imgURL),
          second_imgURL: fetchedData.map((item) => item.second_imgURL),
        });
      })
      .catch((error) => console.error("Error fetching Omnie:", error));
  }, []);
  return { data };
}

export default useOmnieData;

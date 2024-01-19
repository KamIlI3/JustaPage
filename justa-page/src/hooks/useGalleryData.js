import { useState, useEffect } from "react";

function useGalleryData() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/gallery")
      .then((response) => response.json())
      .then((data) => {
        setImages(data.slice(0, 3));
      })
      .catch((error) => console.error("Error fetching gallery:", error));
  }, []);
  return { images };
}

export default useGalleryData;

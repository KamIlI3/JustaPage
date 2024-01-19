import { useState, useEffect } from "react";

function usePresentationData() {
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  const [imgURL, setImgURL] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/presentation")
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.map((item) => item.title));
        setContent(data.map((item) => item.content));
        setImgURL(data.map((item) => item.imgURL));
      })
      .catch((error) =>
        console.error("Error fetching presentation data:", error)
      );
  }, []);

  return { title, content, imgURL };
}

export default usePresentationData;

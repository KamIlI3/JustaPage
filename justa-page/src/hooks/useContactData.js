import { useState, useEffect } from "react";

function useContactData() {
  const [emailAdres, setEmail] = useState([]);
  const [imgURL, setURL] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/contact")
      .then((response) => response.json())
      .then((data) => {
        const retrievedEmail = data.map((contact) => contact.email);
        const retrievedURL = data.map((contact) => contact.imgURL);
        setEmail(retrievedEmail);
        setURL(retrievedURL);
      })
      .catch((error) => console.error("Error fetching Omnie:", error));
  }, []);
  return { imgURL, emailAdres };
}

export default useContactData;

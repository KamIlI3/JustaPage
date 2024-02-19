import { useState } from 'react';
function useOpinionForm() {
    const [rating, setRating] = useState(0);
    const [nick, setNick] = useState("");
  const [opinionEmail, setOpinionEmail] = useState("");
  const [opinion, setOpinion] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3001/api/opinions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ opinionEmail, nick, opinion, rating }),
        });
    
        if (response.ok) {
          setNick("");
          setOpinionEmail("");
          setOpinion("");
        }
      };
      const ratingChanged = (newRating) => {
        setRating(newRating);
      };

  return { handleSubmit, ratingChanged, rating, setRating, nick, setNick, opinionEmail, setOpinionEmail, opinion, setOpinion };
}

export default useOpinionForm;
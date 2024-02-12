import React, { useState } from "react";
import "../../css/Courses.css";
import useCoursesData from "../../hooks/useCoursesData";
import useContactForm from "../../hooks/useContactForm";
import ReactStars from "react-rating-stars-component";

function Cours1() {
  const [activeTab, setActiveTab] = useState("description");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { courses } = useCoursesData();
  const { sendFormData, isSubmitting } = useContactForm();

  const submitApplication = async () => {
    const courseData = {
      name: name,
      email: email,
      subject: `Kurs: Kurs1`,
      message: "Chcę się zapisać na kurs.",
    };
    await sendFormData(courseData);
    setName("");
    setEmail("");
  };

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

  return (
    <div className="Cours">
      {courses
        .filter((cours) => cours.id === 1)
        .map((cours) => (
          <div key={cours.id} className="Cours-content">
            <div className="Cours-lvl1">
              <div className="Cours-img">
                <img src={cours.imgURL} alt={cours.name} />
              </div>
              <div className="Cours-apply">
                <h3>{cours.name}</h3>
                <p>zapisz sie na kurs</p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    submitApplication();
                  }}
                >
                  <input
                    type="text"
                    placeholder="Imie"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>

                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>

                  <button
                    type="submit"
                    className={isSubmitting ? "loading" : ""}
                    disabled={isSubmitting}
                  >
                    Zapisz się!
                  </button>
                </form>
              </div>
            </div>

            <div className="Cours1-lvl2">
              <div className="Cours-tabs">
                <button onClick={() => setActiveTab("description")}>
                  Opis
                </button>
                <button onClick={() => setActiveTab("opinions")}>Opinie</button>
              </div>
              {activeTab === "description" && (
                <div className="Cours-description">
                  <p>{cours.full_description}</p>
                </div>
              )}
              {activeTab === "opinions" && (
                <div className="Cours-opinion">
                  {/* Tutaj wyświetl opinie */}
                  <p>Opinie użytkowników...</p>

                  <form onSubmit={handleSubmit}>
                    <ReactStars
                      count={5} 
                      onChange={ratingChanged} 
                      size={24} 
                      isHalf={true} 
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>} 
                      activeColor="#ffd700" 
                    />
                    <input
                      type="text"
                      value={nick}
                      onChange={(e) => setNick(e.target.value)}
                      placeholder="Twoje imię"
                      required
                    />
                    <textarea
                      value={opinion}
                      onChange={(e) => setOpinion(e.target.value)}
                      placeholder="Twoja opinia"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={opinionEmail}
                      onChange={(e) => setOpinionEmail(e.target.value)}
                    ></input>
                    <button type="submit">Wyślij opinię</button>
                  </form>
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
export default Cours1;

import React, { useState } from "react";
import "../../css/Courses.css";
import useCoursesData from "../../hooks/useCoursesData";
import useContactForm from "../../hooks/useContactForm";

function Cours1() {
  const { courses } = useCoursesData();
  const [activeTab, setActiveTab] = useState("description");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
export default Cours1;

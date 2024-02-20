import React, { useState } from "react";
import "../../css/Courses.css";
import useCoursesData from "../../hooks/useCoursesData";
import useContactForm from "../../utils/useContactForm";
import ReactStars from "react-rating-stars-component";
import useOpinionData from "../../hooks/useOpinionData";
import useOpinionFrom from "../../utils/useOpinionForm"
import  useSubmitForm  from "../../utils/useSubmitForm";
function Cours1() {
  const { handleSubmit, ratingChanged, nick, setNick, opinionEmail, setOpinionEmail, opinion, setOpinion} = useOpinionFrom();
  const { submitApplication, name, setName, email, setEmail  } = useSubmitForm();
  const {data} = useOpinionData();
  const {courses} = useCoursesData();
  const {isSubmitting} = useContactForm();
  const [activeTab, setActiveTab] = useState("description");
  const averageRating = data.length > 0
    ? data.reduce((sum, opinion) => sum + opinion.rating, 0) / data.length
    : 0;



  return (
    <div className="Cours">
      <div className='Front-img'>
        <h1>Kurs makijażu</h1>
        <img src='https://images.unsplash.com/photo-1487412912498-0447578fcca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MjQ3fDB8MXxzZWFyY2h8MTh8fE1ha2V1cCUyMEFwcGxpY2F0aW9ufGVufDB8fHx8MTcwODQ1NTY5M3ww&ixlib=rb-4.0.3&q=80&w=1620' alt="zdjecie"/></div>
      {courses
        .filter((cours) => cours.id === 1)
        .map((cours) => (
          <div key={cours.id} className="Cours-content">
            <div className="Cours-lvl1">
              <div className="Cours-img">
                <img src={cours.imgURL} alt={cours.name} />
              </div>
              <div className="Cours-apply">
              <ReactStars
                        count={5}
                        value={averageRating}
                        edit={false}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="rgb(0, 136, 204)"
                      />
                <h3>{cours.name}</h3>
                <p>zapisz sie na kurs</p>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    submitApplication();
                  }}>
                  <input
                    id="name-course-application"
                    type="text"
                    placeholder="Imie"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  ></input>

                  <input
                    id="email-course-application"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></input>

                  <button
                    id="button-course-application"
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
                <div className="line">
                  <div className={`highlight ${activeTab}`}></div>
                </div>
              <div className="Cours-tabs">
              
                <button className={activeTab === 'description' ? 'active' : ''} onClick={() => setActiveTab("description")}>Opis</button>
                <button className={activeTab === 'opinions' ? 'active' : ''} onClick={() => setActiveTab("opinions")}>Opinie</button>
              </div>
              {activeTab === "description" && (<>
                <div className="Cours-description">
                  <p>{cours.full_description}</p>
                </div>
                </>
              )}
              {activeTab === "opinions" && (
                <>
                <div className="Cours-opinion">
                {data.map((opinion, index) => (
                  <div key={index} className="Cours-opinion-display">
                    <div className="Opinion-avatar">
                      <img src="https://secure.gravatar.com/avatar/dba6969f85dee4dbd385debf1a25000b?s=60&d=mm&r=g" alt="user" />
                    </div>
                    <div className="Opinion-data">
                      <span>
                      <h3>{opinion.nick}</h3>
                      <ReactStars
                        count={5}
                        value={opinion.rating}
                        edit={false}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="rgb(0, 136, 204)"
                      /></span>
                      <p id="date">{new Date(opinion.date).toLocaleDateString()}</p>
                      <p><i>{opinion.opinion}</i></p>
                    </div>
                  </div>
                ))}
                </div>

                  <form className="Opinion-form" onSubmit={handleSubmit}>
                    <label>Ocena:</label>
                    <ReactStars
                      count={5} 
                      onChange={ratingChanged} 
                      size={24} 
                      isHalf={true} 
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>} 
                      activeColor="rgb(0, 136, 204)" 
                      required
                    />
                    <label htmlFor="nick">Nazwa:</label>
                    <input
                    id="nick"
                      type="text"
                      value={nick}
                      onChange={(e) => setNick(e.target.value)}
                      required
                    />
                    <label htmlFor="opinion">Opinia:</label>
                    <textarea
                    id="opiniion"
                      value={opinion}
                      onChange={(e) => setOpinion(e.target.value)}
                      required
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={opinionEmail}
                      onChange={(e) => setOpinionEmail(e.target.value)}
                      required
                    ></input>
                    <button type="submit">Dodaj</button>
                  </form>
                </>
              )}
              
            </div>
            
          </div>
          
        ))}

    </div>
  );
}
export default Cours1;

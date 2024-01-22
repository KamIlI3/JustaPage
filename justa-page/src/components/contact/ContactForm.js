// src/components/ContactForm.js
import React, { useState } from "react";
import "../../css/Contact.css";

function ContactForm() {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
  const validate = (formData) => {
    if (!formData.name) {
      return " Imię jest wymagane";
    } else if (formData.name.length < 3) {
      return " Imię musi się składać z min. 3 znaków";
    }

    if (!formData.email) {
      return " E-mail jest wymagany";
    } else if (!reg.test(formData.email)) {
      return " Niepoprawny adres e-mail";
    }

    if (!formData.subject) {
      return " Tytuł jest wymagany";
    } else if (
      formData.subject.charAt(0) !== formData.subject.charAt(0).toUpperCase()
    ) {
      return " Temat musi zaczynać się z dużej litery";
    }
    return null;
  };

  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMsg = validate(formData);
    if (errorMsg) {
      setError(errorMsg);
      return;
    } else {
      setIsSubmitting(true);
      try {
        const response = await fetch("http://localhost:3001/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await response.text();
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setSuccessMessage(data);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      } catch (error) {
        setErrorMessage("Błąd podczas wysyłania. Spróbuj ponownie");
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      }finally {
        setIsSubmitting(false); // Zakończenie wysyłania, niezależnie od wyniku
      }
    }
  };

  return (
    <div className="Contact">
      <div className="Contact-img">
        <img src="Justyna.jpg" alt="asd" />
      </div>
      <div className="Contact-form">
        <form onSubmit={handleSubmit} className="Form">
          {error && (
            <div className="error-message"><p><i className="fa-solid fa-circle-info"></i>{error}</p></div>
          )}

          <label htmlFor="name">Imię:</label>
          <input
            className=""
            type="text"
            name="name"
            placeholder="Twoje imię"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            name="email"
            placeholder="Twój email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="subject">Temat:</label>
          <input
            type="text"
            name="subject"
            placeholder="Temat"
            value={formData.subject}
            onChange={handleChange}
            autoComplete="off"
          />

          <label htmlFor="message">Wiadomość:</label>
          <textarea
            name="message"
            placeholder="Twoja wiadomość"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className={isSubmitting ? 'loading' : ''} disabled={isSubmitting}>Wyślij</button>

          {successMessage && (
            <p className="msg-status success">{successMessage}</p>
          )}

          {errorMessage && <p className="msg-status error">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

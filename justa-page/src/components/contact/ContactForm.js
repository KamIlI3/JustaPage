// src/components/ContactForm.js
import "../../css/Contact.css";
import useContactForm from '../../utils/useContactForm';

function ContactForm() {
    const {
      formData, handleChange, handleSubmit, imgURL, error, successMessage, errorMessage, isSubmitting
    } = useContactForm();

  return (
    <div className="Contact">
      <div className="Contact-img">
        <img src={imgURL} alt="asd" />
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

          {errorMessage && (<p className="msg-status error">{errorMessage}</p>)}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

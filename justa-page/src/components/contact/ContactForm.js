// src/components/ContactForm.js
import "../../css/Contact.css";
import useContactForm from '../../utils/useContactForm';

function ContactForm() {
    const { formData, handleChange, handleSubmit, error, isSubmitting } = useContactForm();

  return (
    <div className="Contact">
      <div className='Front-img'>
        <h1>Kontakt</h1>
        <img src='https://images.unsplash.com/photo-1547887538-047f814bfb64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MjQ3fDB8MXxzZWFyY2h8MTF8fG1ha2V1cCUyMHByb2R1Y3RzfGVufDB8fHx8MTcwODQyOTc2OHww&ixlib=rb-4.0.3&q=80&w=720' alt="zdjecie"/></div>
      <div className="Contact-content">
      <div className="Contact-data">
        <h2>Skontaktuj się ze mną</h2>
        <h3><i className="fa-solid fa-location-dot fa-2xl"></i> Sowiogórska 2/2, Dzierżoniów 58-200</h3>
        <h3><i className="fa-regular fa-envelope fa-2xl"></i> info@brand.pl</h3>
        <h3><i className="fa-solid fa-phone-volume fa-2xl"></i> (+48) 123-456-789</h3>
      </div>
      <div className="Contact-form">
        <form onSubmit={handleSubmit} className="Form">
          <h2>Napisz do mnie</h2>
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
        </form>
      </div>
      </div>
    </div>
  );
}

export default ContactForm;

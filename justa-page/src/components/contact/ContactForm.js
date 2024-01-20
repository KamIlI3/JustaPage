// src/components/ContactForm.js
import React, { useState } from 'react';
import '../../css/Contact.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await response.text();
      console.log(data);
      // Tutaj możesz dodać logikę po pomyślnym wysłaniu, np. wyświetlenie powiadomienia
    } catch (error) {
      console.error('Błąd przy wysyłaniu formularza:', error);
      // Tutaj możesz dodać obsługę błędów
    }
  };

  return (
    <div className='Contact'>
      <div className='Contact-img'> 
      <img src='Justyna.jpg' alt='asd'/>

      </div>
      <div className='Contact-form'>
        <form onSubmit={handleSubmit} className='Form'>
        <input
        className=''
          type="text"
          name="name"
          placeholder="Twoje imię"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Twój email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Twoja wiadomość"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Wyślij</button>
        </form>
      </div>
    </div>
    
  );
}

export default ContactForm;

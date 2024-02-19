import { useState } from 'react';
import useContactData from '../hooks/useContactData';
function useContactForm() {
    const {imgURL, emailAdres} = useContactData();
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
    if (!formData.message) {
      return " Treść jest wymagana";
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

  const sendFormData = async ({e, name, email, subject, message }) => {
    const formValues = {
      name,
      email,
      subject,
      message,
    };
    if (e && e.preventDefault) {
      e.preventDefault();
  }
  let errorMsg = validate(formValues);
  if (errorMsg) {
    setError(errorMsg);
    return;
  } else {
    setError(null);
    setIsSubmitting(true);
    try {
      const dataToSend = {
        ...formValues,
        targetEmail: emailAdres 
      };
      const response = await fetch("http://localhost:3001/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      if (!response.ok) {
        throw new Error("Błąd serwera");
      }
      console.log("Wysłano!")
    } catch (error) {
      console.log("Błąd podczas wysyłania. Spróbuj ponownie");
    }finally {
      setIsSubmitting(false); 
    }
  }
};
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, courseName = null) => {
        e.preventDefault();
    let errorMsg = validate(formData);
    if (errorMsg) {
      setError(errorMsg);
      return;
    } else {
      setError(null);
      setIsSubmitting(true);
      try {
        const dataToSend = {
          ...formData,
          targetEmail: emailAdres 
        };
        const response = await fetch("http://localhost:3001/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        });
        if (!response.ok) {
          throw new Error("Błąd serwera");
        }
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
        setIsSubmitting(false); 
      }
    }
  };

  return { formData, handleChange, handleSubmit, imgURL, error, successMessage, errorMessage, isSubmitting, sendFormData};
}

export default useContactForm;
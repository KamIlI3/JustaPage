import useContactForm from "../utils/useContactForm";
import { useState } from "react";

function useOpinionForm() {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { sendFormData } = useContactForm();

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

  return { submitApplication, name, setName, email, setEmail };
}

export default useOpinionForm;
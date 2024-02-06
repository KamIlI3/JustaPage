const nodemailer = require('nodemailer');
const emailValidator = require('email-validator');

const sendEmailHandler = (req, res) => {
  let returnObj = {};
  const { name, email, subject, message, targetEmail } = req.body;
  if (!emailValidator.validate(email)) {
    if (!returnObj.errors) returnObj.errors = [];
    returnObj.errors.push("email");
  }

  if (name === undefined || name === "") {
    if (!returnObj.errors) returnObj.errors = [];
    returnObj.errors.push("name");
  }

  if (subject === undefined || subject === "") {
    if (!returnObj.errors) returnObj.errors = [];
    returnObj.errors.push("subject");
  }

  if (message === undefined || message === "") {
    if (!returnObj.errors) returnObj.errors = [];
    returnObj.errors.push("message");
  }

  if (returnObj.errors) {
    res.status(400).json(returnObj);
  } else {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: email,
      to: targetEmail || "kami3x3s@gmail.com",
      subject: `${subject}`,
      text: `Wiadomość od: ${name}\nEmail: ${email}\n\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res
          .status(500)
          .send("Błąd podczas wysyłania e-maila. Spróbuj ponownie.");
      } else {
        console.log("Email wysłany: " + info.response);
        res.send("Wiadomość wysłana pomyślnie!");
      }
    });
  }
};

module.exports = sendEmailHandler;
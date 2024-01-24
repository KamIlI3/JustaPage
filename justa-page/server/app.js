const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const connectToDatabase = require("./config/db");
const omnieRouter = require("./routes/omnieRouter");
const presentationRouter = require("./routes/presentationRouter");
const galleryRouter = require("./routes/galleryRouter");
const productsRouter = require("./routes/productsRouter");
const formData = require("express-form-data");
const emailValidator = require("email-validator");
const contactRouter = require("./routes/contactRouter");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(formData.parse());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send", (req, res) => {
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
    returnObj.errors.push("name");
  }

  if (message === undefined || message === "") {
    if (!returnObj.errors) returnObj.errors = [];
    returnObj.errors.push("message");
  }

  if (returnObj.errors) {
    res.send(JSON.stringify(returnObj));
  } else {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kami3x3s@gmail.com",
        pass: "xqzs wzwy fiwh szzg",
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
});

app.use("/api/omnie", omnieRouter);
app.use("/api/presentation", presentationRouter);
app.use("/api/gallery", galleryRouter);
app.use("/api/products", productsRouter);
app.use("/api/contact", contactRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectToDatabase();
});

module.exports = app;

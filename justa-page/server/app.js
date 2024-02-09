const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./config/db");

const bodyParser = require("body-parser");
const omnieRouter = require("./routes/omnieRouter");
const presentationRouter = require("./routes/presentationRouter");
const galleryRouter = require("./routes/galleryRouter");
const productsRouter = require("./routes/productsRouter");
const formData = require("express-form-data");
const contactRouter = require("./routes/contactRouter");
const coursesRouter = require("./routes/coursesRouter");

require('dotenv').config();

const app = express();
const sendEmailHandler = require('./emailSender/sendEmailHandler');

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(formData.parse());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send", sendEmailHandler);

app.use("/api/omnie", omnieRouter);
app.use("/api/presentation", presentationRouter);
app.use("/api/gallery", galleryRouter);
app.use("/api/products", productsRouter);
app.use("/api/contact", contactRouter);
app.use("/api/courses", coursesRouter)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectToDatabase();
});

module.exports = app;

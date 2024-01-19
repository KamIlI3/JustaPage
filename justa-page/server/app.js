const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const connectToDatabase = require('./config/db');
const omnieRouter = require('./routes/omnieRouter');
const presentationRouter = require('./routes/presentationRouter');
const galleryRouter = require('./routes/galleryRouter');
const productsRouter = require('./routes/productsRouter')

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

// Skonfiguruj transportera nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Zmień na swojego dostawcę usług e-mail
  auth: {
    user: 'kami3x3s@gmail.com',
    pass: 'xqzs wzwy fiwh szzg'
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Endpoint do obsługi formularza kontaktowego
app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'kami3x3s@gmail.com',
    subject: `Nowa wiadomość od ${name}`,
    text: `Wiadomość od: ${name}\nEmail: ${email}\n\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Błąd podczas wysyłania e-maila.');
    } else {
      console.log('Email wysłany: ' + info.response);
      res.send('Wiadomość wysłana pomyślnie!');
    }
  });
});

app.use('/api/omnie', omnieRouter);
app.use('/api/presentation', presentationRouter);
app.use('/api/gallery', galleryRouter);
app.use('/api/products', productsRouter)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectToDatabase();
});

module.exports = app;

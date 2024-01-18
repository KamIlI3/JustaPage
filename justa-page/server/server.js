const mongoose = require('mongoose');
const config = require('./config/config');
const express = require('express');
const app = express();
const cors = require('cors');
const Omnie = require('../db/models/Omnie'); 
const PresentationModel = require('../db/models/presentationModel');
const GalleryModel = require('../db/models/galleryModel');

// Konfiguracja CORS, aby akceptować żądania z Twojej aplikacji frontendowej
app.use(cors({
  origin: 'http://localhost:3000'  // Adres Twojej aplikacji React
}));




const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

app.get('/api/omnie', async (req, res) => {
  try {
    const omnie = await Omnie.find();
    res.json(omnie);
  } catch (error) {
    console.error('Error fetching Omnie:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/presentation', async (req, res) => {
  try {
    const presentation = await PresentationModel.find();
    res.json(presentation);
  } catch (error) {
    console.error('Error fetching Omnie:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/gallery', async (req, res) => {
  try {
    const gallery = await GalleryModel.find();
    res.json(gallery);
  } catch (error) {
    console.error('Error fetching Omnie:', error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectToDatabase(); // Nawiązanie połączenia z bazą danych podczas uruchamiania serwera
});




module.exports = app;

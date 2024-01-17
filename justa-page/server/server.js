// db.js
const mongoose = require('mongoose');
const config = require('./config');
const express = require('express');
const app = express();
const User = require('./User');  // Upewnij się, że ścieżka jest poprawna
const cors = require('cors');

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

app.get('/api/users', async (req, res) => {
  try {
      const users = await User.find().select('name -_id'); // Pobieranie wszystkich użytkowników
      res.json(users);
  } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectToDatabase(); // Nawiązanie połączenia z bazą danych podczas uruchamiania serwera
});

// ... [reszta twojego kodu]



module.exports = app;

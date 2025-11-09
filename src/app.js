const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// DB bağlantısı
connectDB();

// Basit health-check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Smart City Data Hub çalışıyor 🚀' });
});

// Route’lar
const trafficRoutes = require('./routes/trafficRoutes');
const weatherRoutes = require('./routes/weatherRoutes');
const energyRoutes = require('./routes/energyRoutes');

app.use('/api/traffic', trafficRoutes);
app.use('/api/weather', weatherRoutes);
app.use('/api/energy', energyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor`));
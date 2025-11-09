const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  type: { type: String, required: true }, // traffic | weather | energy
  payload: { type: Object, required: true },
  source: { type: String },               // hangi API’den geldi
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Data', DataSchema);
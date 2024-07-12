const mongoose = require('mongoose');

const NumberSchema = new mongoose.Schema({
  value: { type: Number, unique: true },
});

const NumberModel = mongoose.model('Number', NumberSchema);

module.exports = NumberModel;

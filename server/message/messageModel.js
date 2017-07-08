const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const msgSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  msgTo: { type: String, required: true, unique: true },
  msgFrom: { type: String, required: true, unique: true },
  msgContent: { type: String, required: true }
});

module.exports = mongoose.model('Item', itemSchema);
const mongoose = require('mongoose');

const findata = new mongoose.Schema({
  step: { type: Number },
  customer: { type: String },
  age: { type: Number },
  gender: { type: String },  // 'M' or 'F'
  zipcodeOri: { type: String },
  merchant: { type: String },
  zipMerchant: { type: String },
  category: { type: String },
  amount: { type: Number },
  fraud: { type: Number }  // Integer
}, { collection: 'financial_data' }); // Specify collection name

module.exports = mongoose.model('Transaction', findata);

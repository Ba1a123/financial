const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');
const Transaction = require('../Models/findata'); 

// Connect to MongoDB
mongoose.connect(' ', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Path to your CSV file
const csvFilePath = '../data/data.csv';


fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', async (row) => {
    const data = new Transaction({
      step: parseInt(row.step, 10),
      customer: row.customer,
      age: parseInt(row.age, 10),
      gender: row.gender,  // Directly use 'M' or 'F'
      zipcodeOri: row.zipcodeOri,
      merchant: row.merchant,
      zipMerchant: row.zipMerchant,
      category: row.category,
      amount: parseFloat(row.amount),
      fraud: parseInt(row.fraud, 10)  // Convert to integer
    });
    try {
      await data.save();
    } catch (err) {
      console.error('Error saving data:', err);
    }
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    mongoose.disconnect();
  });

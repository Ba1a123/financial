// routes/financialData.js
const express = require('express');
const router = express.Router();
const FinancialData = require('../Models/findata.js');

// Get financial data with filters
router.get('/transactions', async (req, res) => {
  try {
    // Extract query parameters
    const { step, customer, age, gender, zipcodeOri, merchant, zipMerchant, category, amount, fraud, page = 1, limit = 10 } = req.query;

    // Build filter object
    const filter = {};
    if (step) filter.step = parseInt(step, 10);
    if (customer) filter.customer = customer;
    if (age) filter.age = parseInt(age, 10);
    if (gender) filter.gender = gender;
    if (zipcodeOri) filter.zipcodeOri = zipcodeOri;
    if (merchant) filter.merchant = merchant;
    if (zipMerchant) filter.zipMerchant = zipMerchant;
    if (category) filter.category = category;
    if (amount) filter.amount = parseFloat(amount);
    if (fraud) filter.fraud = parseInt(fraud);
    console.log('Filter object:', filter); // Log the filter
    // Pagination
    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);
    const transactions = await FinancialData.find(filter)

    res.json(transactions);
  } catch (error) {
    console.log("error");
    res.status(500).json({ message: error.message });
  }
});
router.post('/transactions', async (req, res) => {
    try {
      const newTransaction = new FinancialData(req.body); // Create a new instance with data from the request body
      await newTransaction.save(); // Save the document to the database
      res.status(201).json(newTransaction); // Return the saved document
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

module.exports = router;

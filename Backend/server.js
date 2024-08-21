const dotenv = require("dotenv")
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors")
const financialDataRouter = require('./Routes/finroute.js');
const port = process.env.PORT || 5000;

// MongoDB connection URI (replace with your own connection string)
const mongoURI = 'mongodb+srv://balapeesala1022:yushIG2E6JFaiI8l@fincluster.ti4zy.mongodb.net/?retryWrites=true&w=majority&appName=fincluster'; // Update this URI as needed



// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());

dotenv.config();

app.use(cors());
// Sample route
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.use('/api', financialDataRouter);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

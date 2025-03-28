const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/documents', require('./routes/documentRoutes'));
app.use('/api/tax-calculator', require('./routes/taxCalculatorRoutes'));
app.use('/api/user-profile', require('./routes/userProfileRoutes'));

// Error Handling Middleware
app.use(require('./middlewares/errorMiddleware'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
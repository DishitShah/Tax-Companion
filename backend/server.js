const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

console.log(`PORT: ${process.env.PORT}`);
console.log(`MONGO_URI: ${process.env.MONGO_URI}`);
console.log(`JWT_SECRET: ${process.env.JWT_SECRET}`);
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Define routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/documents', require('./routes/documentRoutes'));
app.use('/api/tax-calculator', require('./routes/taxCalculatorRoutes'));
app.use('/api/user-profile', require('./routes/userProfileRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Document = require('./models/Document');
const TaxCalculation = require('./models/TaxCalculation');
const User = require('./models/User');

// Load environment variables
dotenv.config();

// Connect to the database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => {
  console.log('MongoDB Connected');
}).catch((error) => {
  console.error(`Error: ${error.message}`);
  process.exit(1);
});

const seedData = async () => {
  try {
    // Create a sample user
    const user = await User.create({
      name: 'Sample User',
      email: 'sampleuser@example.com',
      password: 'password123', // Ensure this is hashed in the User model
    });

    // Create a sample document
    await Document.create({
      user: user._id,
      name: 'Sample Document',
      url: 'http://example.com/sample-document',
      status: 'Pending',
    });

    // Create a sample tax calculation
    await TaxCalculation.create({
      user: user._id,
      income: 50000,
      deductions: 10000,
      taxLiability: 7000,
    });

    console.log('Sample data inserted');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedData();
# Tax Companion Backend

This is the backend for the Tax Companion application, a comprehensive web application for managing and planning taxes.

## Features

- **User Authentication**: Register, login, and manage user profile.
- **Document Management**: Upload and manage tax-related documents.
- **Tax Calculator**: Calculate tax liability based on income and deductions.
- **Tax Filing Assistant**: Assistance with filing tax returns.
- **Learning Resources**: Access articles, videos, and a glossary to learn about taxes.

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT
- **APIs**: RESTful APIs

## Getting Started

### Prerequisites

- Node.js and npm installed on your computer
- MongoDB running locally or on a remote server

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tax-companion-backend.git
   cd tax-companion-backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   NODE_ENV=development
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. The server should be running on `http://localhost:5000`.

## Folder Structure

```plaintext
tax-companion-backend/
│
├── controllers/
│   ├── authController.js
│   ├── documentController.js
│   ├── taxCalculatorController.js
│   ├── userProfileController.js
│
├── models/
│   ├── User.js
│   ├── Document.js
│   ├── TaxCalculation.js
│
├── routes/
│   ├── authRoutes.js
│   ├── documentRoutes.js
│   ├── taxCalculatorRoutes.js
│   ├── userProfileRoutes.js
│
├── middlewares/
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   ├── validationMiddleware.js
│
├── utils/
│   ├── jwtUtils.js
│   ├── validationUtils.js
│
├── config/
│   ├── db.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

## API Endpoints

### Auth

- **POST /api/auth/register**: Register a new user
- **POST /api/auth/login**: Authenticate a user

### Documents

- **POST /api/documents**: Upload a new document (Protected)
- **GET /api/documents**: Get all documents for the logged-in user (Protected)
- **GET /api/documents/:id**: Get a document by ID (Protected)

### Tax Calculator

- **POST /api/tax-calculator**: Calculate tax liability (Protected)
- **GET /api/tax-calculator**: Get all tax calculations for the logged-in user (Protected)

### User Profile

- **GET /api/user-profile**: Get the logged-in user's profile (Protected)
- **PUT /api/user-profile**: Update the logged-in user's profile (Protected)

## Contributing

If you'd like to contribute to Tax Companion Backend, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License.
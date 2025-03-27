# Tax Companion

Tax Companion is a comprehensive web application for managing and planning your taxes. It provides various features such as tax calculation, document upload, tax filing assistant, and learning resources.

## Features

- **User Authentication**: Register, login, and manage your profile.
- **Dashboard**: Get an overview of your financial status, income breakdown, and tax liability.
- **Document Management**: Upload and manage your tax-related documents.
- **Tax Calculator**: Calculate your tax liability based on your income and deductions.
- **Tax Filing Assistant**: Get assistance with filing your tax returns.
- **Learning Resources**: Access articles, videos, and a glossary to learn about taxes.

## Tech Stack

- **Frontend**: React, Redux, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT
- **APIs**: Custom REST APIs

## Getting Started

### Prerequisites

- Node.js and npm installed on your computer
- MongoDB running locally or on a remote server

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tax-companion.git
   cd tax-companion
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

```plaintext
tax-companion-frontend/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
│
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   └── AuthWrapper.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── DashboardOverview.jsx
│   │   │   ├── TaxCalculator.jsx
│   │   │   ├── TaxPlanningWidget.jsx
│   │   │   └── QuickActionTiles.jsx
│   │   │
│   │   ├── documents/
│   │   │   ├── DocumentUpload.jsx
│   │   │   ├── DocumentList.jsx
│   │   │   └── DocumentDetails.jsx
│   │   │
│   │   ├── learning/
│   │   │   ├── ResourceHub.jsx
│   │   │   ├── BlogArticles.jsx
│   │   │   ├── VideoTutorials.jsx
│   │   │   └── TaxGlossary.jsx
│   │   │
│   │   ├── filing/
│   │   │   ├── FilingAssistant.jsx
│   │   │   ├── ITRForm.jsx
│   │   │   └── FilingStatus.jsx
│   │   │
│   │   └── common/
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       ├── Modal.jsx
│   │       └── Chart.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AuthPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── DocumentsPage.jsx
│   │   ├── LearningPage.jsx
│   │   └── FilingPage.jsx
│   │
│   ├── redux/
│   │   ├── store.js
│   │   ├── reducers/
│   │   │   ├── authReducer.js
│   │   │   ├── documentReducer.js
│   │   │   ├── taxCalculatorReducer.js
│   │   │   └── userProfileReducer.js
│   │   │
│   │   └── actions/
│   │       ├── authActions.js
│   │       ├── documentActions.js
│   │       ├── taxCalculatorActions.js
│   │       └── userProfileActions.js
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── documentService.js
│   │   └── taxCalculatorService.js
│   │
│   ├── utils/
│   │   ├── validation.js
│   │   ├── formatters.js
│   │   └── constants.js
│   │
│   ├── styles/
│   │   ├── tailwind.css
│   │   ├── global.css
│   │   └── theme.css
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useDocuments.js
│   │   └── useTaxCalculator.js
│   │
│   ├── App.jsx
│   └── index.jsx
│
├── package.json
├── tailwind.config.js
├── .env
└── README.md
```

## Contributing

If you'd like to contribute to Tax Companion, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License.
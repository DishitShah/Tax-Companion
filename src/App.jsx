import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import DocumentsPage from './pages/DocumentsPage';
import LearningPage from './pages/LearningPage';
import FilingPage from './pages/FilingPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import ErrorBoundary from './components/common/ErrorBoundary';
import AuthWrapper from './components/auth/AuthWrapper';
import './styles/global.css';
import './styles/accessibility.css';
import './styles/responsive.css';
import './styles/interactions.css';

function App() {
  const [authData, setAuthData] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [taxData, setTaxData] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Fetch authentication data
    axios.get('http://localhost:5000/api/auth')
      .then(response => setAuthData(response.data))
      .catch(error => console.error('Error fetching auth data:', error));

    // Fetch documents
    axios.get('http://localhost:5000/api/documents')
      .then(response => setDocuments(response.data))
      .catch(error => console.error('Error fetching documents:', error));

    // Fetch tax calculator data
    axios.get('http://localhost:5000/api/tax-calculator')
      .then(response => setTaxData(response.data))
      .catch(error => console.error('Error fetching tax data:', error));

    // Fetch user profile
    axios.get('http://localhost:5000/api/user-profile')
      .then(response => setUserProfile(response.data))
      .catch(error => console.error('Error fetching user profile:', error));
  }, []);

  return (
    <ErrorBoundary>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <div className="container mx-auto px-6 py-8">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<AuthWrapper><HomePage /></AuthWrapper>} />
                <Route path="/dashboard" element={<AuthWrapper><DashboardPage /></AuthWrapper>} />
                <Route path="/documents" element={<AuthWrapper><DocumentsPage /></AuthWrapper>} />
                <Route path="/learning" element={<AuthWrapper><LearningPage /></AuthWrapper>} />
                <Route path="/filing" element={<AuthWrapper><FilingPage /></AuthWrapper>} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
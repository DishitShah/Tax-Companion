import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import DocumentsPage from './pages/DocumentsPage';
import LearningPage from './pages/LearningPage';
import FilingPage from './pages/FilingPage';
import AuthWrapper from './components/auth/AuthWrapper';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import ErrorBoundary from './components/common/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <div className="container mx-auto px-6 py-8">
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/auth/*" element={<AuthPage />} />
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
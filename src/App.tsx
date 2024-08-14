import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserCardsPage from './pages/UserCardsPage';
import CompanyPage from './pages/CompanyPage';
import NotFoundPage from './pages/NotFoundPage';
import Home from './pages/Home';
import AccountsPage from './pages/AccountsPage';
import CompaniesPage from './pages/CompaniesPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<AccountsPage />} />
        <Route path="/user/:userId" element={<UserCardsPage />} />
        <Route path="/company/:companyId" element={<CompanyPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* 404 Route */}
      </Routes>
    </Router>
  );
};

export default App;

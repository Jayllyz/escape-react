import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App.tsx';
import Legals from './pages/legals.tsx';
import './index.css';
import Footer from './components/Footer.tsx';
import Header from './components/Header.tsx';
import EmployeeDashboard from './pages/EmployeeDashboard.tsx';
import Login from './pages/Login.tsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mention-legales" element={<Legals />} />
          <Route path="/employeeDashboard" element={<EmployeeDashboard />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>,
  );
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App.tsx';
import Legals from './pages/legals.tsx';
import './index.css';
import Footer from './components/Footer.tsx';
import Header from './components/Header.tsx';
import AdminBooking from './pages/AdminBooking.tsx';
import AdminEmployee from './pages/AdminEmployee.tsx';
import AdminSession from './pages/AdminSession.tsx';
import EmployeeDashboard from './pages/EmployeeDashboard.tsx';
import EmployeeSession from './pages/EmployeeSession.tsx';
import Login from './pages/Login.tsx';
import SessionPage from './pages/Session.tsx';

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
          <Route path="/employeeSession" element={<EmployeeSession />} />
          <Route path="/adminEmployee" element={<AdminEmployee />} />
          <Route path="/adminSession" element={<AdminSession />} />
          <Route path="/session" element={<SessionPage />} />
          <Route path="/adminBooking" element={<AdminBooking />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>,
  );
}

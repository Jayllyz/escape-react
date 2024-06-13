import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Legals from './pages/legals.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/mention-legales" element={<Legals />} />
        </Routes>
      </Router>
    </React.StrictMode>,
  );
}

import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Pages from './helpers/Pages';
import './index.css';
import './helpers/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Pages />
    </Router>
  </React.StrictMode>
);
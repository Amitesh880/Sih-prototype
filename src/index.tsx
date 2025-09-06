import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* This is the crucial wrapper that provides the routing context */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
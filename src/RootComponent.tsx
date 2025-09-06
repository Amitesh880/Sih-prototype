// src/RootComponent.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Assuming App.tsx is in the same directory

const RootComponent: React.FC = () => {
  return (
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
};

export default RootComponent;
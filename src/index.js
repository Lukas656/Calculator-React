import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Projeto Calculadora</h1>
    <Calculator />
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import CartProvider from './store/CartProvider';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
);
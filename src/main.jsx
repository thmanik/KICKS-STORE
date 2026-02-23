import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './routes/AppRoutes';
import ProductProvider from './context/ProductContext';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <ToastContainer theme="dark" position="top-right" autoClose={3000} />
      <RouterProvider router={router} />
    </ProductProvider>
  </React.StrictMode>
);
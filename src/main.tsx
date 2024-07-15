import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css'
import getRouter from './router';
import { AuthProvider } from './contexts/AuthContext';
import AxiosErrorHandler from './components/AxiosErrorHandler/AxiosErrorHandler';

const router = getRouter();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <AxiosErrorHandler>
        <RouterProvider router={router} />
      </AxiosErrorHandler>
    </AuthProvider>
    <ToastContainer/>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/router';
import AuthProvider from './provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HelmetProvider>
   <AuthProvider>
   <RouterProvider router={router} />
   <ToastContainer />
   </AuthProvider>
   </HelmetProvider>
  </StrictMode>,
)

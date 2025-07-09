
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './components/context/Storecontext.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
  <GoogleOAuthProvider clientId="152867217877-13vfve1lt3a5kdq05ugd2e17r9g4fopd.apps.googleusercontent.com">
  <App />
  </GoogleOAuthProvider>
  </StoreContextProvider>
  </BrowserRouter>
)

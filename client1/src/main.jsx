import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AuthProvider from './store/AuthProvider.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <StrictMode>
    <App />
   <ToastContainer />
  </StrictMode>
  </AuthProvider>,
)

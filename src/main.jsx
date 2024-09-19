import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n';
import { BrowserRouter } from 'react-router-dom';
import'../node_modules/bootstrap/dist/css/bootstrap.css';
import'../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)

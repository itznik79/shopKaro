import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { ShopContextProvider } from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ShopContextProvider>
         <App />
      </ShopContextProvider>
    </React.StrictMode>
  </BrowserRouter>
)

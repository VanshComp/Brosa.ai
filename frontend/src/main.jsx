import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

// Initialize Splitting.js for text animations
import Splitting from 'splitting'
import 'splitting/dist/splitting.css'

// Initialize Splitting
Splitting()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="app-wrapper">   {/* ← added */}
      <App />
    </div>
  </React.StrictMode>
)
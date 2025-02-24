import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import Home from './pages/home'
import Admin from './pages/admin/adm'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/admin" element={<Admin />} /> 
      </Routes>
    </Router>

  </StrictMode>
)

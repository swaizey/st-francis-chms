
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin/Admin.jsx'
import Register from './pages/Register/Register.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/register" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

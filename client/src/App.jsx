import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cars from './pages/Cars'
import CarDetails from './pages/CarDetails'
import MyBookings from './pages/MyBookings'

// Component that uses useLocation hook (must be inside Router)
const AppContent = () => {
  const [showLogin, setShowLogin] = useState(false)
  const location = useLocation()
  const isOwnerPath = location.pathname.startsWith('/owner')

  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/car-details/:id" element={<CarDetails/>} />
        <Route path="/cars" element={<Cars/>} />
        <Route path="/my-bookings" element={<MyBookings/>} />
        <Route path="/owner" element={<h1>Owner Dashboard</h1>} />
      </Routes>
    </>
  )
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
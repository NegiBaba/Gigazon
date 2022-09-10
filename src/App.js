import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/navbar'
import Home from './pages/home'
import Products from './pages/products'

function App() {
  const [currentPage, setCurrentPage] = useState('Home')
  return (
    <BrowserRouter>
      <NavBar currentPage={currentPage} redirectToPage={setCurrentPage} />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

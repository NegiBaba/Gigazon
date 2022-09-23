import { Box } from '@mui/material'
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/navbar'
import Cart from './pages/cart'
import Home from './pages/home'
import Products from './pages/products'

function App () {
  const [currentPage, setCurrentPage] = useState()

  return (
    <BrowserRouter>
      <NavBar currentPage={currentPage} redirectToPage={setCurrentPage} />
      <Box
        sx={{
          p: 3
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App

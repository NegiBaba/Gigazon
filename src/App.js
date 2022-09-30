import { Box } from '@mui/material'
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/navbar'
import Cart from './pages/cart'
import Products from './pages/products'
import Search from './pages/search'

function App() {
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
          <Route path="/" element={<Navigate replace to="/products" />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search:productName" element={<Search />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App

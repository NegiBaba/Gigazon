import { Box } from '@mui/material'
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/navbar'
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
          <Route path="/" element={<Navigate replace to="/products" />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App

import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/navbar'
import PageWithFilter from './hoc/pageWithFilter'
import Cart from './pages/cart'
import Products from './pages/products'
import Search from './pages/search'

function App() {
  const productPageWithFilter = PageWithFilter(Products)

  return (
    <BrowserRouter>
      <NavBar />
      <Box>
        <Routes>
          <Route path="/" element={<Navigate replace to="/products" />} />
          <Route path="/products" element={productPageWithFilter} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Navigate replace to="/products" />} />
          <Route path="/search/:string" element={<Search />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App

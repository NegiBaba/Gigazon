import { Box, Container } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React, { useEffect, useState } from 'react'
import { list } from '../api/api-products'
import Product from '../components/product'

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    list().then((res) => {
      setProducts(res.data)
    })
  }, [])
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item key={product.id} lg={3}>
              <Product key={product.id} product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Products

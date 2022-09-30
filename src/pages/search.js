import { Box, CircularProgress, Container } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import Product from '../components/product'
import { fetchProducts, selectAllProducts } from '../features/productSlice'

const Products = () => {
  const dispatch = useDispatch()
  const productsStatus = useSelector((state) => state.products.status)
  const products = useSelector(selectAllProducts)

  useEffect(() => {
    if (productsStatus === 'idle') {
      dispatch(fetchProducts())
    }
  }, [productsStatus, dispatch])

  let content

  if (productsStatus === 'loading') {
    content = (
      <Grid
        item
        lg={12}
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <CircularProgress
          sx={{
            color: 'secondary.main'
          }}
        />
      </Grid>
    )
  } else if (productsStatus === 'succeeded') {
    content = products.map((product) => (
      <Grid item key={product._id} lg={3}>
        <Product key={product._id} product={product} />
      </Grid>
    ))
  }

  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          {content}
        </Grid>
      </Container>
    </Box>
  )
}

export default Products

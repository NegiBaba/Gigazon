import { Box, CircularProgress, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import Product from '../components/product'
import { selectAllProducts } from '../features/productSlice'

import blob from '../assests/images/blob.svg'

const Products = () => {
  const dispatch = useDispatch()
  const productsStatus = useSelector((state) => state.products.status)
  const searchString = useSelector((state) => state.products.searchString)
  const products = useSelector(selectAllProducts)

  useEffect(() => {}, [dispatch])

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
    if (products.length === 0) {
      content = (
        <Grid item lg={12}>
          <Box
            sx={{
              alignItems: 'center',
              backgroundImage: `url(${blob})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              height: '500px',
              justifyContent: 'center'
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: 'text.secondary',
                fontFamily: 'Montserrat',
                fontWeight: 700
              }}
            >
              Your search term did not match any results.
            </Typography>
          </Box>
        </Grid>
      )
    } else {
      content = products.map((product) => (
        <Grid item key={product._id} lg={3}>
          <Product key={product._id} product={product} />
        </Grid>
      ))
    }
  }

  return (
    <Box>
      <Container>
        <Grid container>
          <Grid
            item
            lg={12}
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              p: 2
            }}
          >
            <Typography variant="h6">
              Search Result for :- {searchString}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {content}
        </Grid>
      </Container>
    </Box>
  )
}

export default Products

import Grid from '@mui/material/Unstable_Grid2'
import React from 'react';
import { Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import CartTile from '../components/carttile';

const Cart = () => {
  const products = useSelector(state => state.cart.products);

  return (
    <Container>
      <Grid container>

        {/* Cart Header */}
        <Grid item lg={12} sx={{
          display: 'flex',
          justifyContent: 'center',
          m: 4
        }} >
          <Typography variant='h4' sx={{
            fontWeight: 600
          }}>Cart</Typography>
        </Grid>

        {/* Cart Items container */}
        <Grid container item lg={12} sx={{
          borderLeft: '1px solid',
          borderRight: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'border.default',
          '& .MuiTypography-subtitle2': {
            color: 'text.secondary',
            fontWeight: 400
          }
        }}>

          <Grid container item lg={12} sx={{
            backgroundColor: 'background.secondary',
            borderBottom: '1px solid',
            borderColor: 'border.default',
            py: 1,
            '& .MuiGrid2-root': {
              px: '30px'
            }
          }}>

            {/* Image heading */}
            <Grid item lg={2}>
            </Grid>
            {/* Product name heading */}
            <Grid item lg={3}>
              <Typography variant='subtitle2'>Product</Typography>
            </Grid>
            {/* Product price */}
            <Grid item lg={2}>
              <Typography variant='subtitle2'>Price</Typography>
            </Grid>
            {/* Product quantity */}
            <Grid item lg={2}>
              <Typography variant='subtitle2'>Quantity</Typography>
            </Grid>
            {/* Product total */}
            <Grid item lg={2}>
              <Typography variant='subtitle2'>Total</Typography>
            </Grid>
            {/* Delete column */}
            <Grid item lg={1}></Grid>

          </Grid>

          {/* Product rows */}
          {products.map(product => <CartTile key={product._id} product={product.product} quantity={product.quantity} />)}

        </Grid>

      </Grid>

    </Container >
  );
}

export default Cart;
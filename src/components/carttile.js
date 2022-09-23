import React from 'react';
import PropTypes from 'prop-types'
import Grid from '@mui/material/Unstable_Grid2'
import { ButtonGroup, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { put, remove } from '../api/api-cart';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { fetchCartItems } from '../features/cartSlice'

const CartTile = ({ product, quantity }) => {

  const dispatch = useDispatch();

  const formattedPrice = () => Number.parseFloat(product.price - product.discount).toFixed(2)
  const formattedTotalPrice = () => Number.parseFloat((product.price - product.discount) * quantity).toFixed(2);

  const removeProduct = () => {
    remove(product._id)
      .then(res => {
        // show banner in the cart PAGE
      })
  }

  const decreaseProductQuantity = debounce(() => {
    if (quantity !== 1) {
      put(product, quantity - 1)
        .then(() => {
          dispatch(fetchCartItems())
        })
    }
  })

  const increaseProductQuantity = debounce(() => {
    put(product, quantity + 1)
      .then(() => {
        dispatch(fetchCartItems())
      })
  })

  return (
    <Grid container item lg={12} sx={{
      alignItems: 'center',
      borderTop: '1px',
      py: '20px',
      '& .MuiGrid2-root': {
        px: '30px'
      },
      '& .MuiTypography-body2': {
        fontWeight: 400,
        letterSpacing: '0.04px'
      },
      '& .MuiTypography-subtitle2': {
        color: 'text.primary',
        fontWeight: 600,
      },
      '& .MuiSvgIcon-root': {
        cursor: 'pointer'
      }
    }}>

      {/* Product image */}
      <Grid item lg={2} sx={{
        '& img': {
          objectFit: 'contain',
          height: '74px',
          width: '74px'
        }
      }}>
        <img src={product.image} alt={product.name} />
      </Grid>

      {/* Product name */}
      <Grid item lg={3}>
        <Typography variant='body2'>{product.name}</Typography>
      </Grid>

      {/* Product price */}
      <Grid item lg={2}>
        <Typography variant='subtitle2'>${formattedPrice()}</Typography>
      </Grid>

      {/* Product quantity and actions */}
      <Grid item lg={2}>
        <ButtonGroup
          variant="outlined"
          disableFocusRipple
          disableRipple
          sx={{
            alignItems: 'center',
            borderColor: 'border.default',
          }}
        >
          <IconButton
            disableFocusRipple
            disableRipple
            disableTouchRipple
            sx={{
              borderRadius: '0',
              mr: 1
            }}
            onClick={() => decreaseProductQuantity()}
          >
            <RemoveIcon />
          </IconButton>
          <Typography variant='subtitle2'>{quantity}</Typography>
          <IconButton
            disableFocusRipple
            disableRipple
            disableTouchRipple
            sx={{
              borderRadius: '0',
              ml: 1
            }}
            onClick={() => increaseProductQuantity()}
          >
            <AddIcon />
          </IconButton>
        </ButtonGroup>
      </Grid>

      {/* Product total price */}
      <Grid item lg={2}>
        <Typography variant='subtitle2'>${formattedTotalPrice()}</Typography>
      </Grid>

      {/* Remove CTA and icon */}
      <Grid item lg={1}>
        <DeleteOutlineIcon onClick={() => removeProduct()} />
      </Grid>

    </Grid>
  )
}

CartTile.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number
}

export default CartTile
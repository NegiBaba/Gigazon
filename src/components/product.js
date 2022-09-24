import { Button, ButtonGroup, IconButton, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/system'
import PropTypes from 'prop-types'
import { debounce, get } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartItems } from '../features/cartSlice'
import React from 'react'
import { put } from '../api/api-cart'

const Product = ({ product }) => {
  const dispatch = useDispatch()
  const currentProductInCart = useSelector((state) => state.cart.products.find(cartItem => {
    return get(cartItem, 'product._id', undefined) === get(product, '_id', null)
  }))

  const formattedPrice = () => {
    return Number.parseFloat(product.price).toFixed(2)
  }

  const productPrice = () => {
    return (
      <>
        <Typography
          variant="h6"
          sx={{
            color: 'success.main',
            fontSize: `${product.discount > 0 ? '14px' : '16px'}`,
            opacity: `${product.discount > 0 ? '0.6' : 1}`,
            textDecoration: `${product.discount > 0 ? 'line-through' : null}`
          }}
        >
          ₹{formattedPrice()}
        </Typography>
        {product.discount > 0 ? (
          <Typography
            variant="subtitle1"
            sx={{
              color: 'success.main',
              fontWeight: 600,
              ml: 1
            }}
          >
            ₹{Number.parseFloat(product.price - product.discount).toFixed(2)}
          </Typography>
        ) : null}
      </>
    )
  }

  const addProductsToCart = debounce(() => {
    put(product, 1)
      .then(() => {
        if (!currentProductInCart) {
          dispatch(fetchCartItems())
        }
      })
  }, 200)

  const decreaseProductQuantity = debounce(() => {
    if (currentProductInCart.quantity !== 1) {
      put(currentProductInCart.product, currentProductInCart.quantity - 1)
        .then(() => {
          dispatch(fetchCartItems())
        })
    }
  })

  const increaseProductQuantity = debounce(() => {
    put(currentProductInCart.product, currentProductInCart.quantity + 1)
      .then(() => {
        dispatch(fetchCartItems())
      })
  })

  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'transparent',
        borderRadius: 1,
        cursor: 'pointer',
        p: { lg: 4 },
        '&:hover': {
          borderColor: 'primary.dark',
          '& img': {
            transform: 'scale(1.05)'
          },
          '& .MuiButton-root': {
            display: 'flex'
          },
          '& .MuiButtonGroup-root': {
            display: 'flex'
          },
          '& .MuiTypography-subtitle2': {
            color: 'secondary.main'
          }
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <img src={product.image} alt={product.name} height="150px" />
      </Box>
      <Typography
        variant="subtitle2"
        sx={{
          fontFamily: 'Montserrat',
          fontSize: '14px',
          my: 3
        }}
      >
        {product.name}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start'
        }}
      >
        {productPrice()}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          m: 2
        }}
      >
        {
          currentProductInCart ?
            <ButtonGroup
              variant="outlined"
              disableFocusRipple
              disableRipple
              sx={{
                display: 'none'
              }}
            >
              <IconButton
                disableFocusRipple
                disableRipple
                disableTouchRipple
                sx={{
                  borderRadius: '0',
                  '&:hover': {
                    backgroundColor: 'secondary.main',
                    color: 'primary.main'
                  }
                }}
                onClick={() => decreaseProductQuantity()}
              >
                <RemoveIcon />
              </IconButton>
              <Box sx={{
                alignItems: 'center',
                display: 'flex',
                px: '10px'
              }}>{currentProductInCart.quantity}</Box>
              <IconButton
                disableFocusRipple
                disableRipple
                disableTouchRipple
                sx={{
                  borderRadius: '0',
                  '&:hover': {
                    backgroundColor: 'secondary.main',
                    color: 'primary.main'
                  }
                }}
                onClick={() => increaseProductQuantity()}
              >
                <AddIcon />
              </IconButton>
            </ButtonGroup>
            :
            <Button
              variant="contained"
              disableElevation
              disableFocusRipple
              disableRipple
              disableTouchRipple
              sx={{
                display: 'none'
              }}
              onClick={() => addProductsToCart()}
            >
              Add to Cart
            </Button>
        }
      </Box>
    </Box >
  )
}

Product.propTypes = {
  product: PropTypes.object
}

export default Product

import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import PropTypes from 'prop-types'
import { debounce } from 'lodash'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../features/cartSlice'
import React from 'react'
import { put } from '../api/api-cart'

const Product = ({ product }) => {
  const dispatch = useDispatch()

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
          ${formattedPrice()}
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
            ${product.discount}
          </Typography>
        ) : null}
      </>
    )
  }

  const addProductsToCart = debounce(() => {
    put(product, 1).then((res) => {
      console.log(res)
      dispatch(
        addProductToCart({
          product
        })
      )
    })
  }, 200)

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
        <img src={product.img} alt={product.name} height="150px" />
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
      </Box>
    </Box>
  )
}

Product.propTypes = {
  product: PropTypes.object
}

export default Product

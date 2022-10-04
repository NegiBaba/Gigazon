import { Badge, Box, Container, InputBase, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartItems } from '../features/cartSlice'
import EggIcon from '@mui/icons-material/Egg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { searchProducts, setSearchString } from '../features/productSlice'

const NavBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  const [cartItemsCount, setCartItemsCount] = useState(0)
  const [showCategories, setCategoriesDropwdownState] = useState(false)

  useEffect(() => {
    if (cart.status === 'idle') {
      dispatch(fetchCartItems())
      setCartItemsCount(cart.products.length)
    }
    setCartItemsCount(cart.products.length)
  }, [cart, dispatch])

  const categoriesDropdown = () => (
    <Box
      sx={{
        border: '1px solid red',
        left: '0',
        position: 'absolute',
        top: '50px',
        transform: 'translateX(-25%)',
        height: '300px',
        width: '300px'
      }}
    >
      dropdown
    </Box>
  )

  const redirectToCartPage = () => {
    navigate('/cart')
  }

  const redirectToHome = () => {
    navigate('/')
  }

  const handleSearch = (event) => {
    if (event.keyCode === 13) {
      // NOTE: move fetch methods to the useEffect block in search page
      dispatch(setSearchString(event.target.value))
      dispatch(searchProducts(event.target.value))
      navigate(`/search/${event.target.value}`)
    }
  }

  return (
    <Box
      sx={{
        borderBottom: '1px solid',
        borderColor: 'primary.dark'
      }}
    >
      <Container>
        <Box flexGrow={1}>
          <Grid
            container
            sx={{
              alignItems: 'center',
              py: '30px'
            }}
          >
            <Grid
              Item
              lg={2}
              onClick={() => redirectToHome()}
              sx={{
                alignItems: 'center',
                cursor: 'pointer',
                display: 'flex'
              }}
            >
              <EggIcon
                sx={{
                  color: 'secondary.main',
                  fontSize: '2.4rem'
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontFamily: 'poppins',
                  fontSize: '26px',
                  fontWeight: 700
                }}
              >
                Gigazon
              </Typography>
            </Grid>
            <Grid
              Item
              lg={8}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              {/* Search Bar */}
              <Box
                sx={{
                  alignItems: 'center',
                  backgroundColor: 'background.secondary',
                  borderRadius: '5px',
                  display: 'flex'
                }}
              >
                {/* Dropdown Box */}
                <Box
                  onClick={() => setCategoriesDropwdownState(!showCategories)}
                  sx={{
                    alignItems: 'center',
                    cursor: 'pointer',
                    display: 'flex',
                    p: '14px 20px',
                    position: 'relative'
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 400,
                      pr: '10px',
                      textTransform: 'uppercase'
                    }}
                  >
                    All Categories
                  </Typography>
                  <KeyboardArrowDownIcon />
                  {showCategories ? categoriesDropdown() : null}
                </Box>

                {/* Search Input */}
                <InputBase
                  placeholder={`I'm looking for....`}
                  sx={{
                    borderLeft: `1px solid rgba(0, 0, 0, 0.2)`,
                    fontSize: '13px',
                    minWidth: '300px',
                    px: '10px'
                  }}
                  onKeyDown={(event) => handleSearch(event)}
                ></InputBase>

                <Box
                  sx={{
                    display: 'flex',
                    cursor: 'pointer',
                    px: '20px'
                  }}
                >
                  <SearchOutlinedIcon />
                </Box>
              </Box>
            </Grid>
            <Grid Item lg={2}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  px: 3,
                  '& svg': {
                    cursor: 'pointer'
                  }
                }}
              >
                <Badge
                  badgeContent={cartItemsCount}
                  color="secondary"
                  onClick={() => redirectToCartPage()}
                >
                  <ShoppingCartOutlinedIcon
                    sx={{
                      fontSize: 28
                    }}
                  />
                </Badge>
                <AccountCircleIcon
                  sx={{
                    fontSize: 28
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default NavBar

import { Box, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import React from 'react'
import NavLink from './navlink'
import PropTypes from 'prop-types'

const NavBar = ({ currentPage, redirectToPage }) => {
  const pages = ['Home', 'Products', 'Orders', 'Discontinued']
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
              height: '60px'
            }}
          >
            <Grid Item lg={2}>
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
              {pages.map((page) => (
                <NavLink
                  key={page}
                  label={page}
                  isActive={page === currentPage}
                  redirectToPage={() => redirectToPage(page)}
                />
              ))}
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
                <SearchOutlinedIcon />
                <ShoppingCartOutlinedIcon />
                <AccountCircleIcon />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

NavBar.propTypes = {
  currentPage: PropTypes.string,
  redirectToPage: PropTypes.func
}

export default NavBar

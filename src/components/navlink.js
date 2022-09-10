import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavLink = ({ label, isActive, redirectToPage }) => {
  const navigate = useNavigate()
  const redirectTo = () => {
    redirectToPage(label)
    navigate(`/${label}`)
  }
  return (
    <Box
      sx={
        isActive
          ? {
              color: 'secondary.main'
            }
          : null
      }
    >
      <Typography
        variant="h6"
        sx={{
          cursor: 'pointer',
          fontFamily: 'Montserrat',
          fontSize: '16px',
          mx: '20px',
          '&:hover': {
            color: 'secondary.main'
          }
        }}
        onClick={() => redirectTo()}
      >
        {label}
      </Typography>
    </Box>
  )
}

NavLink.propTypes = {
  label: PropTypes.string,
  isActive: PropTypes.bool,
  redirectToPage: PropTypes.func
}

export default NavLink

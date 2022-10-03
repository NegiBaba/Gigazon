import { Box } from '@mui/material'
import React from 'react'
import SubMenu from '../components/submenu'

const PageWithFilter = (Children) => {
  return (
    <>
      <SubMenu />
      <Box
        sx={{
          p: 3
        }}
      >
        <Children />
      </Box>
    </>
  )
}

export default PageWithFilter

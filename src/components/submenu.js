import { Box, Container } from '@mui/material'
import Filter from './filter'
import Grid from '@mui/material/Unstable_Grid2'
import MenuIcon from '@mui/icons-material/Menu'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterProducts } from '../features/productSlice'

const SubMenu = () => {
  const dispatch = useDispatch()

  const cateforyList = [
    {
      id: '0',
      name: 'All Categories'
    },
    {
      id: '1',
      name: 'Food'
    },
    {
      id: '2',
      name: 'Drink'
    },
    {
      id: '3',
      name: 'Fruit'
    }
  ]

  const [selectedCategory, setSelectedCategory] = useState({
    id: '1',
    name: 'All Categories'
  })

  useEffect(() => {
    dispatch(filterProducts(selectedCategory.name))
  }, [selectedCategory])

  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'primary.dark',
        borderWidth: '0 0 1px',
        p: 1
      }}
    >
      <Container>
        <Grid container>
          <Grid item lg={3}>
            <Filter
              withIcon={true}
              StartIcon={MenuIcon}
              list={cateforyList}
              selected={selectedCategory}
              selectFilterItem={(category) => setSelectedCategory(category)}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default SubMenu

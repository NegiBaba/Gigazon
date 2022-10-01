import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'

const Filter = ({ withIcon, StartIcon, list, selected, selectFilterItem }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        '&:hover': {
          '& .dropdownBox': {
            top: '50px',
            transition: '0.3s',
            visibility: 'visible'
          }
        }
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: 'secondary.main',
          borderRadius: 1,
          cursor: 'pointer',
          display: 'flex',
          px: 3,
          py: 1.2
        }}
      >
        {withIcon ? (
          <StartIcon
            sx={{
              mr: 1
            }}
          />
        ) : null}
        {selected.name}
      </Box>
      <Box
        className="dropdownBox"
        sx={{
          backgroundColor: 'primary.main',
          border: '1px solid',
          borderColor: 'border.default',
          flexDirection: 'column',
          px: 3,
          py: 1,
          position: 'absolute',
          top: '40px',
          transition: '0.1s',
          visibility: 'hidden',
          width: '100%',
          zIndex: 1040
        }}
      >
        {list.map((item) => (
          <Box
            key={item.id}
            sx={{
              border: '1px solid',
              borderColor: 'border.default',
              borderWidth: '0 0 1px 0',
              cursor: 'pointer',
              p: 1,
              '&': {
                ':hover': {
                  color: 'secondary.main'
                },
                ':last-child': {
                  border: 'none'
                }
              }
            }}
            onClick={() => selectFilterItem(item)}
          >
            {item.name}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

Filter.propTypes = {
  withIcon: PropTypes.bool,
  StartIcon: PropTypes.object,
  list: PropTypes.array,
  selected: PropTypes.object,
  selectFilterItem: PropTypes.func
}

export default Filter

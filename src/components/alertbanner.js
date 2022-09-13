import { Alert, AlertTitle } from '@mui/material'
import { toLower } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

const AlertBanner = ({ type, message }) => {
  return (
    <Alert severity={toLower(type)}>
      <AlertTitle>{type}</AlertTitle>
      {message}
    </Alert>
  )
}

AlertBanner.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string
}

export default AlertBanner

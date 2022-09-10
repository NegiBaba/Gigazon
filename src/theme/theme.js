import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ffffff',
      dark: '#e5e5e5',
      contrastText: '#000000',
      light: '#ffffff'
    },
    secondary: {
      main: '#fab528'
    },
    background: {
      default: '#ffffff',
      secondary: '#f3f3f3'
    },
    text: {
      primary: '#000000'
    }
  }
})

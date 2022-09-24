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
      secondary: '#f3f3f3',
    },
    border: {
      default: '#eeeeee'
    },
    text: {
      primary: '#000000',
      secondary: '#555555'
    },
    success: {
      main: '#690'
    }
  },
  typography: {
    fontFamily: ['Poppins', 'Montserrat'].join(',')
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#fab528',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#fab528'
          }
        }
      }
    },
    MuiButtonGroup: {
      styleOverrides: {
        outlined: {
          border: '1px solid #fab528',
          color: '#000000'
        }
      }
    }
  }
})

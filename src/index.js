import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { theme } from './theme/theme'
import reportWebVitals from './reportWebVitals'
import axios from 'axios'
import { Provider } from 'react-redux'
import store from './store'

axios.defaults.baseURL = 'http://localhost:5000'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Provider store={store}>
          <App />
        </Provider>
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

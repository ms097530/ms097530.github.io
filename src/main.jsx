import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUseStyles, ThemeProvider } from 'react-jss'

// const ThemeContext = React.createContext({})

// const theming = createTheming(ThemeContext)
// export const { ThemeProvider, useTheme } = theming

// const useStyles = createUseStyles(
//   {
//     whiteText:
//     {
//       color: 'var(--white)'
//     }
//   },
//   { theming }
// )

const myTheme = {
  // '@global':
  // {
  // electrolize:
  // {
  //   fontFamily: 'var(--electrolize)',
  //   color: 'var(--light-blue)'
  // },
  // }
  '.span':
  {
    color: 'red'
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

import * as React from 'react'

//React router dom client to avoid deprecation warnings
import ReactDOM from 'react-dom/client'

//React browserRouter module
import { BrowserRouter as Router } from 'react-router-dom'

//AppProvider from usecontext file
import { AppProvider } from './Hooks/context/UseContext'

//Base index.css
import './index.css'

//App wrapper function
import App from './App'

//create root node
const root = ReactDOM.createRoot(document.getElementById('root'))

//Render App
root.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>
)

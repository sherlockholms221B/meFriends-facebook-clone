import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home, Login, Protector } from './Pages/exports'

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Protector>
            <Home />
          </Protector>
        }
      />

      <Route path='/dashbord/api/login' element={<Login />} />
    </Routes>
  )
}

export default App

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home, Login, Profile, Protector } from './Pages/exports'
import { Navbar } from './Components/exports'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <Protector>
              <Home />
            </Protector>
          }
        />
        <Route path='/backface/api/profile' element={<Profile />} />
        <Route path='/dashbord/api/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App

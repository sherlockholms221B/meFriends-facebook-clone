import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import {
  Home,
  Login,
  PostDetails,
  Profile,
  Protector,
  STPage,
} from './Pages/exports'
import { Navbar } from './Components/index'
import { useGlobalContext } from './Context/UseContext'
import { themeCheck } from './functions/darkTheme'
import ABS from './ABS'

const App = () => {
  const { isLoading } = useGlobalContext()
  useEffect(() => {
    themeCheck()
  }, [])

  const WTR = window.location.pathname

  return (
    <>
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
        <Route path={`/post/details/photo`} element={<PostDetails />} />
        <Route path={`api/search/random`} element={<STPage />} />
        <Route path='/dashbord/api/login' element={<Login />} />
      </Routes>
      <ABS />
    </>
  )
}

export default App

import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import {
  Home,
  Login,
  PostDetails,
  Profile,
  Protector,
  STPage,
  StoryDetails,
} from './Pages/exports'
import { Friends } from './Components/index'
import { themeCheck } from './functions/darkTheme'
import ABS from './ABS'

const App = () => {
  useEffect(() => {
    themeCheck()
  }, [])

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
        <Route path='/dashbord/api/login' element={<Login />} />
        <Route path='/backface/api/profile' element={<Profile />} />
        <Route path={`/post/details/photo`} element={<PostDetails />} />
        <Route path={`/story/details/photo`} element={<StoryDetails />} />
        <Route path={`api/search/random`} element={<STPage />} />
        <Route path={`menu/friends/fbid`} element={<Friends />} />
      </Routes>
      <ABS />
    </>
  )
}

export default App

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
} from './Pages'
import { Friends, Saved, Memories, MarketPlace, Watch } from './Controllers'
import { themeCheck } from './Functions/darkTheme'
import ABS from './ABS'

const App = () => {
  // const autoTheme = localStorage.getItem('theme')
  // const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

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
        <Route path='/dashbord/api-me-friends/login' element={<Login />} />
        <Route path='/backface/api/profile' element={<Profile />} />
        <Route path={`/post/details/photo`} element={<PostDetails />} />
        <Route path={`/story/details/photo`} element={<StoryDetails />} />
        <Route path={`api/search/random`} element={<STPage />} />
        <Route path={`menu/friends/fbid`} element={<Friends />} />
        <Route path={`menu/saved/fbid`} element={<Saved />} />
        <Route path={`menu/marketplace/fbid`} element={<MarketPlace />} />
        <Route path={`menu/memories/fbid`} element={<Memories />} />
        <Route path={`menu/watch/fbid`} element={<Watch />} />
      </Routes>
      <ABS />
    </>
  )
}

export default App

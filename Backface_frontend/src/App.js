import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home, Login, Profile, Protector } from './Pages/exports'
import { Navbar, CreatePost, PostAudience, AddToYour } from './Components/index'
import { useGlobalContext } from './Context/UseContext'

const App = () => {
  const { addToYourState, postAudienceState, createPostState, isLoading } =
    useGlobalContext()
  return (
    <>
      {!isLoading && <Navbar />}
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
      {createPostState && <CreatePost />}
      {postAudienceState && <PostAudience />}
      {addToYourState && <AddToYour />}
    </>
  )
}

export default App

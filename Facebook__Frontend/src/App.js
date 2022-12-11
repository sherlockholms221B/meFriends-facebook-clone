import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home, Login, Profile, Protector } from './Pages/exports'
import {
  Navbar,
  CreatePost,
  PostAudience,
  AddToYour,
  TagPeople,
  Notifications,
  Messages,
  GoPorfile,
  Support,
  Settings,
  Feedback,
  Display,
} from './Components/index'
import { useGlobalContext } from './Context/UseContext'

const App = () => {
  const {
    addToYourState,
    postAudienceState,
    createPostState,
    tagPeopleState,
    messageState,
    notificationState,
    profileState,
    settingsState,
    displayState,
    feedbackState,
    supportState,
    isLoading,
  } = useGlobalContext()
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
      {tagPeopleState && <TagPeople />}
      {addToYourState && <AddToYour />}
      {messageState && <Messages />}
      {notificationState && <Notifications />}
      {profileState && <GoPorfile />}
      {settingsState && <Settings />}
      {displayState && <Display />}
      {supportState && <Support />}
      {feedbackState && <Feedback />}
    </>
  )
}

export default App

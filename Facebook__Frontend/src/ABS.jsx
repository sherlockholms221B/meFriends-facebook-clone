import React from 'react'
import { useGlobalContext } from './Context/UseContext'
import {
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
  Chat,
  GPDT,
} from './Components/index'
import { MenuSl, GroupSl, ShortCutsSl } from './Controllers'
const ABS = () => {
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
    chatState,
    menuSl,
    shortCutSl,
    groupSl,
  } = useGlobalContext()
  return (
    <>
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
      {chatState && <Chat />}
      {menuSl && <MenuSl />}
      {shortCutSl && <ShortCutsSl />}
      {groupSl && <GroupSl />}
      <GPDT />
    </>
  )
}

export default ABS

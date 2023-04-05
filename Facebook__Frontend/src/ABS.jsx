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
import MOverlay from './Components/SideBars/components/MOverlay'
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
    mobileMenu,
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
      {mobileMenu && <MOverlay />}
      <GPDT />
    </>
  )
}

export default ABS

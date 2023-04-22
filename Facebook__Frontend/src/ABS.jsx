import React from 'react'
import { useGlobalContext } from './Hooks/context/UseContext'
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
import MOverlay from './Components/SideBars/components/MOverlay'
import MenuSL from './Controllers/menusl/index'
import GroupSl from './Controllers/groupsl/index'
import ShortCutsSl from './Controllers/shortcutsl/index'
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
    mobileMenu,
    value: [controller, dispatch],
  } = useGlobalContext()

  const { menuSideLink, shortCut, groupSlideLink } = controller
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
      {menuSideLink && <MenuSL />}
      {shortCut && <ShortCutsSl />}
      {groupSlideLink && <GroupSl />}
      {mobileMenu && <MOverlay />}
      <GPDT />
    </>
  )
}

export default ABS

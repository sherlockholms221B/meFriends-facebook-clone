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
    internalAction: [controller, dispatchAction],
  } = useGlobalContext()

  const {
    sidebaraction: {
      SIDE_MENU: { SIDE_MENU },
      SIDE_GROUP: { SIDE_GROUP },
      SIDE_SHORT_CUT: { SIDE_SHORT_CUT },
    },
  } = controller
  return (
    <React.Fragment>
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
      {SIDE_MENU && <MenuSL />}
      {SIDE_SHORT_CUT && <ShortCutsSl />}
      {SIDE_GROUP && <GroupSl />}
      {mobileMenu && <MOverlay />}
      <GPDT />
    </React.Fragment>
  )
}

export default ABS

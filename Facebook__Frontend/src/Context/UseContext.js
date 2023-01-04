import { useContext, createContext, useState, useRef } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [createPostState, setCreatePostState] = useState(false)
  const [postAudienceState, setPostAudienceState] = useState(false)
  const [addToYourState, setAddToYourState] = useState(false)
  const [addPictureState, setAddPictureState] = useState(false)
  const [tagPeopleState, setTagPeopleState] = useState(false)
  const [messageState, setMessageState] = useState(false)
  const [notificationState, setNotificationState] = useState(false)
  const [profileState, setProfileState] = useState(false)
  const [settingsState, setSettingsState] = useState(false)
  const [displayState, setDisplayState] = useState(false)
  const [feedbackState, setFeedbackState] = useState(false)
  const [supportState, setSupportState] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [chatState, setChatState] = useState(false)
  const [goBack, setGoBack] = useState(false)
  const [chatSettings, setChatSettings] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [menuSl, setMenuSl] = useState(false)
  const [groupSl, setGroupSl] = useState(false)
  const [shortCutSl, setShortCutSl] = useState(false)
  const [selectedFriends, setSelectedFriends] = useState([])
  const [audState, setAudState] = useState('Public')

  const [location, setLocation] = useState({
    height: 0,
    left: 0,
    center: 0,
  })
  const likeRef = useRef(null)

  const dynamicLocation = (cordinate) => {
    const { height, left, center } = cordinate
    setIsSubMenuOpen(true)
    setLocation({ height: height, center: center, left: left })

    return
  }

  const stateAcceptor = (states) => {}
  return (
    <AppContext.Provider
      value={{
        menuSl,
        setMenuSl,
        shortCutSl,
        setShortCutSl,
        groupSl,
        setGroupSl,
        isSubMenuOpen,
        setIsSubMenuOpen,
        stateAcceptor,
        location,
        setLocation,
        dynamicLocation,
        createPostState,
        setCreatePostState,
        addToYourState,
        setAddToYourState,
        postAudienceState,
        setPostAudienceState,
        addPictureState,
        setAddPictureState,
        tagPeopleState,
        setTagPeopleState,
        messageState,
        setMessageState,
        notificationState,
        setNotificationState,
        profileState,
        setProfileState,
        settingsState,
        setSettingsState,
        displayState,
        setDisplayState,
        feedbackState,
        setFeedbackState,
        supportState,
        setSupportState,
        selectedFriends,
        setSelectedFriends,
        isLoading,
        setIsLoading,
        goBack,
        setGoBack,
        likeRef,
        audState,
        setAudState,
        chatState,
        setChatState,
        chatSettings,
        setChatSettings,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

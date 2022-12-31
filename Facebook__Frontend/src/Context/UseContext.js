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
  const [goBack, setGoBack] = useState(false)
  const [selectedFriends, setSelectedFriends] = useState([])
  const [hed, setHed] = useState('')
  const [audState, setAudState] = useState('Public')

  const [location, setLocation] = useState({
    height: 0,
  })
  const likeRef = useRef(null)

  const dynamicLocation = (cordinate) => {
    const { height, HEDheight } = cordinate
    setHed(HEDheight)
    setLocation({ height: height })

    return
  }

  const stateAcceptor = (states) => {}
  return (
    <AppContext.Provider
      value={{
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
        hed,
        setHed,
        likeRef,
        audState,
        setAudState,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

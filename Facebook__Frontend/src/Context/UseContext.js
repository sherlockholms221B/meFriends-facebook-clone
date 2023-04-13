/**
  This file is used for controlling the global states of the components,
  Maintainer can customize the state for the different components here.
*/
import {
  useContext,
  createContext,
  useState,
  useRef,
  useReducer,
  useMemo,
} from 'react'

// import reducer functions
import reducer from '../Hooks/Reducer'

//set up react create context
const AppContext = createContext(null)

// Setting custom name for the context which is visible on react dev tools
AppContext.displayName = 'meFriends'

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
  const [chatState, setChatState] = useState(false)
  const [goBack, setGoBack] = useState(false)
  const [chatSettings, setChatSettings] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
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
  const initialState = {
    loading: true,
    menuSideLink: false,
    groupSlideLink: false,
    shortCut: false,
  }

  const [controller, dispatch] = useReducer(reducer, initialState)

  const value = useMemo(() => [controller, dispatch], [controller, dispatch])

  return (
    <AppContext.Provider
      value={{
        value,
        isSubMenuOpen,
        setIsSubMenuOpen,
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
        goBack,
        setGoBack,
        likeRef,
        audState,
        setAudState,
        chatState,
        setChatState,
        chatSettings,
        setChatSettings,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// meFriends  Dashboard React custom hook for using context
export const useGlobalContext = () => {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error(
      'useSoftUIController should be used inside the SoftUIControllerProvider.'
    )
  }

  return context
}

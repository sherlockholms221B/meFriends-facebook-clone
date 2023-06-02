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
  useEffect,
} from 'react'

// import reducer functions
import reducer from '../reducer/internal.js'
import externalReducer from '../reducer/extarnal.js'
//import action types
import { SIDE_GROUP, SIDE_SHORT_CUT, SIDE_MENU } from '../../Functions/type.js'

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
  const [postvalue, setPostvalue] = useState('')
  ////
  const [selectedChat, setSelectedChat] = useState()
  const [user, setUser] = useState()
  const [notification, setNotification] = useState([])
  const [chats, setChats] = useState([])
  const [fetchAgain, setFetchAgain] = useState(false)

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    setUser(userInfo)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  ////

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
    // menuSideLink: false,
    // groupSlideLink: false,
    // shortCut: false,
    sidebaraction: {
      SIDE_MENU: {
        SIDE_MENU: false,
        name: SIDE_MENU,
      },
      SIDE_GROUP: {
        SIDE_GROUP: false,
        name: SIDE_GROUP,
      },
      SIDE_SHORT_CUT: {
        SIDE_SHORT_CUT: false,
        name: SIDE_SHORT_CUT,
      },
    },
    postfile: [],
    video: [],
  }

  const [controller, dispatchAction] = useReducer(reducer, initialState)
  const [state, dispatchCall] = useReducer(externalReducer, [])

  const internalAction = useMemo(
    () => [controller, dispatchAction],
    [controller, dispatchAction]
  )
  const externalAction = useMemo(
    () => [state, dispatchCall],
    [state, dispatchCall]
  )

  return (
    <AppContext.Provider
      value={{
        //
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
        fetchAgain,
        setFetchAgain,
        //
        internalAction,
        externalAction,
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
        postvalue,
        setPostvalue,
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

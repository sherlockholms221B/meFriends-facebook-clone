import { useContext, createContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [createPostState, setCreatePostState] = useState(false)
  const [postAudienceState, setPostAudienceState] = useState(false)
  const [addToYourState, setAddToYourState] = useState(false)
  const [addPictureState, setAddPictureState] = useState(false)
  const [tagPeopleState, setTagPeopleState] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [goBack, setGoBack] = useState(false)
  const [location, setLocation] = useState({
    top: 0,
    center: 0,
  })

  const dynamicLocation = (cordinate) => {
    const { top, center } = cordinate
    setLocation({ top: top, center: center })
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
        isLoading,
        setIsLoading,
        goBack,
        setGoBack,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

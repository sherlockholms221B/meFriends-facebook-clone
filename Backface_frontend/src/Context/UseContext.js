import { useContext, createContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [createPostState, setCreatePostState] = useState(false)
  const [postAudienceState, setPostAudienceState] = useState(false)
  const [addToYourState, setAddToYourState] = useState(false)
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

  return (
    <AppContext.Provider
      value={{
        location,
        setLocation,
        dynamicLocation,
        createPostState,
        setCreatePostState,
        addToYourState,
        setAddToYourState,
        postAudienceState,
        setPostAudienceState,
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

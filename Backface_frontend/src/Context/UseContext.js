import { useContext, createContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [construction, setConstruction] = useState('')
  const [location, setLocation] = useState({
    top: 0,
    center: 0,
  })

  const menuLocation = (cordinate) => {
    setLocation(cordinate)
  }

  return (
    <AppContext.Provider
      value={{
        construction,
        setConstruction,
        location,
        setLocation,
        menuLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

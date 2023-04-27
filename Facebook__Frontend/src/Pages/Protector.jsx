import * as React from 'react'

//import react-router-dom module
import { Navigate } from 'react-router-dom'

//import user objects from zustand
import useAuthStore from '../Store/AuthStore'

const Protector = ({ children }) => {
  const { userProfile } = useAuthStore()

  const [user, setUser] = React.useState(userProfile)

  return user?._id ? (
    children
  ) : (
    <Navigate to={`/dashbord/api-me-friends/login`} />
  )
}

export default Protector

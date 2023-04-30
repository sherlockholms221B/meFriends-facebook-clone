/* Protect file returns the children, in this case the Home page if and only if there is a user profile id as imported from zustand */

import * as React from 'react'

//import react-router-dom module
import { Navigate } from 'react-router-dom'

//import user objects from zustand
import useAuthStore from '../Store/AuthStore'

const Protector = ({ children }) => {
  const { userProfile } = useAuthStore()

  return userProfile?._id ? (
    children
  ) : (
    <Navigate replace to='/dashbord/api-me-friends/login' />
  )
}

export default Protector

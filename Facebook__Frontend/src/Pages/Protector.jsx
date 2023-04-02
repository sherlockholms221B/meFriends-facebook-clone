import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
// import useAuthStore from '../Store/AuthStore'

const Protector = ({ children }) => {
  // const { userProfile } = useAuthStore()
  // console.log(userProfile)

  const userItem = localStorage.getItem('user')
  const [user, setUser] = useState(userItem)

  return user ? children : <Navigate to={`/dashbord/api-me-friends/login`} />
}

export default Protector

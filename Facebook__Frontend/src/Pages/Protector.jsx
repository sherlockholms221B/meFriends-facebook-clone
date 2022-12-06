import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Protector = ({ children }) => {
  const [user, setUser] = useState(true)

  return user ? children : <Navigate to={`/dashbord/api/login`} />
}

export default Protector

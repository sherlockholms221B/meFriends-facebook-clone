import React from 'react'

//import react-router module
import { Link } from 'react-router-dom'

const Redirect = ({ children, link, customstyles }) => {
  return (
    <Link to={link} className={customstyles}>
      {children}
    </Link>
  )
}

export default Redirect

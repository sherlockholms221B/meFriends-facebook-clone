import React from 'react'

//import react-rotuer module
import { Link } from 'react-router-dom'

//import styles form usestyles
import { barHarder } from '../utils/useStyles'

//import zutstand authstore from store
import useAuthStore from '../Store/AuthStore'

//import image url reader from sanity client
import { urlFor } from '../utils/client'

const Profile = ({ size, link, hidden, style }) => {
  const { userProfile } = useAuthStore()

  return (
    <Link to={link} className={`${style}`}>
      <img
        src={urlFor(userProfile?.profileImage.asset).url()}
        alt='profile'
        className={`object-contain  ${
          size ? 'w-7 h-7' : 'w-5 xs:w-8 h-5 xs:h-8 mdsm:w-11 mdsm:h-11'
        } } rounded-full object-cover`}
      />
      {hidden && (
        <p className={`capitalize ${barHarder}`}>{userProfile?.userName}</p>
      )}
    </Link>
  )
}

export default Profile

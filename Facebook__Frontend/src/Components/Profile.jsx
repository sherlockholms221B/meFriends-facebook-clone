import React from 'react'

//import customstyles form usestyles
import { barHarder } from '../utils/useStyles'

//import zutstand authstore from store
import useAuthStore from '../Store/AuthStore'

//import image url reader from sanity client
import { urlFor } from '../utils/client'

const Profile = ({ size, hidden, customstyle }) => {
  const { userProfile } = useAuthStore()

  return (
    <figure className={customstyle}>
      <img
        src={urlFor(userProfile?.profileImage.asset).url()}
        alt='profile'
        className={
          ' rounded-full object-cover ' +
          (size ? 'w-7 h-7' : 'w-5 h-5 xs:w-8 xs:h-8 mdsm:w-11 mdsm:h-11')
        }
      />
      <figcaption>
        {hidden && (
          <p className={' capitalize ' + barHarder}>{userProfile?.userName}</p>
        )}
      </figcaption>
    </figure>
  )
}

export default Profile

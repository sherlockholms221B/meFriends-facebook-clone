import React, { useState } from 'react'
import { barHarder } from '../utils/useStyles'
import { Link } from 'react-router-dom'
import useAuthStore from '../Store/AuthStore'
import { urlFor } from '../utils/client'

const Profile = ({ size, link, hidden, style }) => {
  const { userProfile } = useAuthStore()
  // const [media, setMedia] = useState({})

  // navigator.mediaDevices
  //   .getUserMedia({
  //     video: true,
  //     audio: true,
  //   })
  //   .then((media) => {
  //     setMedia({ ...media })
  //     console.log(media)
  //   })

  return (
    <Link to={link} className={`${style}`}>
      {/* <video src=''>
        <source src={media} />
      </video> */}
      <img
        src={urlFor(userProfile.profileImage.asset).url()}
        alt='profile'
        className={`object-contain  ${
          size
            ? 'w-7 h-7'
            : 'w-5 xtra_small:w-8 h-5 xtra_small:h-8 small:w-11 small:h-11'
        } } rounded-full object-cover`}
      />
      {hidden && (
        <p className={`capitalize ${barHarder}`}>{userProfile.userName}</p>
      )}
    </Link>
  )
}

export default Profile

import React from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../../Assets/exports'

const ProfilePicture = () => {
  return (
    <Link
      to={`/backface/api/profile`}
      className='relative border-2 border-white rounded-full cursor-pointer'
    >
      <img src={profile} alt='profile' className='object-cover w-10 h-10' />
    </Link>
  )
}

export default ProfilePicture

import React from 'react'
import { profile } from '../../Assets/exports'

const ProfilePicture = () => {
  return (
    <div className='relative border-2 dark:border-borderDark border-white rounded-full cursor-pointer'>
      <img src={profile} alt='profile' className='object-cover w-10 h-10' />
    </div>
  )
}

export default ProfilePicture

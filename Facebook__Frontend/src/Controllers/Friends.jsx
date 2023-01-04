import React from 'react'

import MenuPage from './MenuPage'

const Friends = () => {
  return (
    <div className='dark:bg-darkSecondary w-full h-full flex items-center justify-center'>
      <h4 className='text-white text-3xl'> Friends Component </h4>
    </div>
  )
}

const FriendsBtn = () => {
  return (
    <div className=''>
      <h4 className='text-white text-3xl'> FriendsBtn </h4>
    </div>
  )
}

export default MenuPage(Friends, FriendsBtn, 'friends')

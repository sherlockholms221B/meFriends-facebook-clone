import React from 'react'

import MenuPage from '../MenuPage'

const Watch = () => {
  return (
    <div className='dark:bg-dark400 w-full h-full flex items-center justify-center'>
      <h4 className='text-white text-3xl'> Watch Component </h4>
    </div>
  )
}

const WatchBtn = () => {
  return (
    <div className=''>
      <h4 className='text-white text-3xl'> WatchBtn </h4>
    </div>
  )
}

export default MenuPage(Watch, WatchBtn, 'watch')

import React from 'react'

import MenuPage from './MenuPage'
const Saved = () => {
  return (
    <div className='dark:bg-darkSecondary w-full h-full flex items-center justify-center'>
      <h4 className='text-white text-3xl'> Saved Component </h4>
    </div>
  )
}

const SavedBtn = () => {
  return (
    <div className=''>
      <h4 className='text-white text-3xl'> SavedBtn </h4>
    </div>
  )
}

export default MenuPage(Saved, SavedBtn, 'saved')

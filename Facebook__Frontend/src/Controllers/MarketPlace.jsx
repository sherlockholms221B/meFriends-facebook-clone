import React from 'react'

import MenuPage from './MenuPage'
const MarketPlace = () => {
  return (
    <div className='dark:bg-darkSecondary w-full h-full flex items-center justify-center'>
      <h4 className='text-white text-3xl'> MarketPlace Component </h4>
    </div>
  )
}

const MarketPlaceBtn = () => {
  return (
    <div className=''>
      <h4 className='text-white text-3xl'> MarketPlaceBtn </h4>
    </div>
  )
}

export default MenuPage(MarketPlace, MarketPlaceBtn, 'marketplace')

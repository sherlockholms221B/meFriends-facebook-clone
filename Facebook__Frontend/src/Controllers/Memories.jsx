import React from 'react'
import MenuPage from './MenuPage'

const Memories = () => {
  return (
    <div className='dark:bg-darkSecondary w-full h-full flex items-center justify-center'>
      <h4 className='text-white text-3xl'> Memories Component </h4>
    </div>
  )
}

const MemoriesBtn = () => {
  return (
    <div className=''>
      <h4 className='text-white text-3xl'> MemoriesBtn </h4>
    </div>
  )
}
export default MenuPage(Memories, MemoriesBtn, 'memories')

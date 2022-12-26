import React from 'react'
// import { motion } from 'framer-motion'

import MenuPage from '../MenuPage'

const Friends = () => {
  return (
    <div
      // whileInView={{ opacity: [0, 1] }}
      // transition={{ duration: 0.6, ease: 'easeInOut' }}
      className='dark:bg-darkSecondary w-full h-full flex items-center justify-center'
    >
      <h4 className='text-white text-3xl'> Component </h4>
    </div>
  )
}

export default MenuPage(Friends)

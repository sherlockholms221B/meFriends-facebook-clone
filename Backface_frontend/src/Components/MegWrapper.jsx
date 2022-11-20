import React from 'react'
import { motion } from 'framer-motion'

import { useGlobalContext } from '../Context/UseContext'

const MegWrapper = (Component, idName) =>
  function HOC() {
    const { megState } = useGlobalContext()
    return (
      <>
        {megState && (
          <motion.div
            whileInView={{ scale: [0, 1] }}
            className='flex justify-center items-center absolute top-0 right-0 bg-gray-400 z-10 h-screen w-screen'
          >
            <Component />
          </motion.div>
        )}
      </>
    )
  }

export default MegWrapper

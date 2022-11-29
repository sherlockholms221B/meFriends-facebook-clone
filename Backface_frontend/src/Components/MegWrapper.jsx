import React from 'react'
import { motion } from 'framer-motion'

import { useGlobalContext } from '../Context/UseContext'

const MegWrapper = (Component, idName) =>
  function HOC() {
    const {
      createPostState,
      addToYourState,
      setAddToYourState,
      setCreatePostState,
      postAudienceState,
    } = useGlobalContext()
    return (
      <>
        {createPostState || addToYourState || postAudienceState ? (
          <div className='flex justify-center items-center absolute top-0 backdrop-blur-sm right-0  z-10 h-screen w-screen'>
            <div className='w-[500px] h-max bg-white rounded-lg shadow-black '>
              <Component />
            </div>
          </div>
        ) : (
          <div className=''>No command found</div>
        )}
      </>
    )
  }

export default MegWrapper

import React from 'react'
import { motion } from 'framer-motion'

import { useGlobalContext } from '../Context/UseContext'
import NoPost from './NoPost'

const MegWrapper = (Component) =>
  function HOC() {
    const {
      createPostState,
      addToYourState,
      postAudienceState,
      tagPeopleState,
      notificationState,
      messageState,
    } = useGlobalContext()
    return (
      <>
        {createPostState ||
        addToYourState ||
        postAudienceState ||
        tagPeopleState ? (
          <div className='flex justify-center items-center absolute top-0 backdrop-blur-sm right-0  z-10 h-screen w-screen'>
            <div className='w-[500px] h-max bg-white rounded-lg shadow-black '>
              <Component />
            </div>
          </div>
        ) : (
          ''
        )}
        {messageState || notificationState ? (
          <div className='flex justify-center items-center absolute top-10 backdrop-blur-sm right-10 z-10  bg-red-500'>
            <div className='w-[500px] h-max bg-white  shadow-black '>
              <Component />
            </div>
          </div>
        ) : (
          <NoPost title={`No chart found`} />
        )}
      </>
    )
  }

export default MegWrapper

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
      profileState,
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
        {messageState || notificationState || profileState ? (
          <div className='flex justify-center items-center absolute top-10  bg-white  right-10 z-10 rounded-lg  shadow-lg'>
            <div
              className={`${
                profileState
                  ? 'w-[380px] h-fit bg-white rounded-lg p-4 '
                  : 'w-[380px] h-fit bg-white rounded-lg '
              }`}
            >
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

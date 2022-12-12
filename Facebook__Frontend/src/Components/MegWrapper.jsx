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
      settingsState,
      displayState,
      feedbackState,
      supportState,
    } = useGlobalContext()
    return (
      <>
        {createPostState ||
        addToYourState ||
        postAudienceState ||
        feedbackState ||
        tagPeopleState ? (
          <div className='flex justify-center items-center absolute top-0 backdrop-blur-sm right-0  z-10 h-screen w-screen'>
            <div className='w-[560px] h-max bg-white dark:bg-darkSecondary rounded-lg shadow-black '>
              <Component />
            </div>
          </div>
        ) : (
          ''
        )}
        {messageState ||
        notificationState ||
        profileState ||
        settingsState ||
        displayState ||
        supportState ? (
          <div className='flex justify-center items-center absolute top-10  bg-white  right-10 z-10 rounded-lg dark:bg-darkSecondary shadow-lg'>
            <div
              className={`${
                profileState
                  ? 'w-[380px] h-fit rounded-lg p-4 overflow-hidden'
                  : 'w-[380px] h-fit rounded-lg overflow-hidden '
              }`}
            >
              <Component />
            </div>
          </div>
        ) : (
          ''
        )}
      </>
    )
  }

export default MegWrapper

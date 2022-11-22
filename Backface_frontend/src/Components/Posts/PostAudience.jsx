import React from 'react'
import { MdArrowBack } from 'react-icons/md'
import { useGlobalContext } from '../../Context/UseContext'

import { previous, audience } from '../../utils/Functions'
import MegWrapper from '../MegWrapper'

const PostAudience = () => {
  const {
    createPostState,
    setCreatePostState,
    addToYourState,
    setAddToYourState,
    postAudienceState,
    setPostAudienceState,
  } = useGlobalContext()
  return (
    <div
      className={` ${
        postAudienceState ? 'translate_x' : ''
      } bg-white z-20  w-full h-full rounded-lg`}
    >
      <div className='relative flex flex-row py-4 items-center justify-center border-b border-gray-300'>
        <h3 className='text-xl font-bold text-gray-900'>Post audience</h3>
        <p
          className='absolute top-2 left-2 rounded-full hover:bg-gray-400 bg-gray-300 p-2 cursor-pointer'
          onClick={() => previous(setCreatePostState, setPostAudienceState)}
        >
          <MdArrowBack className='text-2xl ' />
        </p>
      </div>
      postAudienceState
    </div>
  )
}

export default MegWrapper(PostAudience)

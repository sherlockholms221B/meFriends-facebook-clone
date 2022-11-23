import React from 'react'
import {
  MdClose,
  MdArrowBack,
  MdArrowForward,
  MdPerson,
  MdOutlineDone,
  MdDoneAll,
  MdDownloadDone,
  MdOutlineLocationOn,
  MdFlag,
  MdOutlinePhotoLibrary,
  MdVideoCall,
} from 'react-icons/md'
import { GiEarthAmerica } from 'react-icons/gi'
import { HiDotsHorizontal, HiLockClosed } from 'react-icons/hi'
import { FaUserFriends } from 'react-icons/fa'
import { GoTriangleDown } from 'react-icons/go'
import { BsEmojiWink } from 'react-icons/bs'

import MegWrapper from '../MegWrapper'
import { useGlobalContext } from '../../Context/UseContext'
import { audience, iconHandler, previous } from '../../utils/Functions'

const AddToYour = () => {
  const {
    createPostState,
    setCreatePostState,
    addToYourState,
    setAddToYourState,
    postAudienceState,
    setPostAudienceState,
    setGoBack,
  } = useGlobalContext()
  return (
    <div
      className={` ${
        addToYourState ? 'translate_x' : ''
      } bg-white z-20  w-full h-full rounded-lg`}
    >
      <div className='relative flex flex-row py-4 items-center justify-center border-b border-gray-300'>
        <h3 className='text-xl font-bold text-gray-900'> Add to your post</h3>
        <p
          className='absolute top-2 left-2 rounded-full hover:bg-gray-400 bg-gray-300 p-2 cursor-pointer'
          onClick={() =>
            previous(setCreatePostState, setAddToYourState, setGoBack)
          }
        >
          <MdArrowBack className='text-2xl ' />
        </p>
      </div>
      <div className='flex flex-row flex-wrap  justify-around items-center gap-4  pt-2 pb-2'>
        {[
          { icon: <MdOutlinePhotoLibrary />, title: 'Photo/Video' },
          { icon: <MdPerson />, title: 'Tag people' },
          { icon: <BsEmojiWink />, title: 'Feeelings/activity' },
          {
            icon: <MdOutlineLocationOn />,
            title: 'Check in',
          },
          {
            icon: <MdFlag />,
            title: 'Life event',
          },
          {
            icon: <MdVideoCall />,
            title: 'Live Video',
          },
        ].map(({ icon, title }, i) => (
          <div
            className='flex flex-row items-center  gap-2 pl-2 pr-12 py-2 w-[40%] hover:bg-gray-100 rounded-md cursor-pointer'
            key={i}
          >
            <p
              className={`${i === 0 ? 'text-green-600' : ''} ${
                i === 1 ? 'text-blue-600' : ''
              } ${i === 2 ? 'text-yellow-600' : ''} ${
                i === 3 ? 'text-red-600' : ''
              } ${i === 4 ? 'text-blue-400' : ''} ${
                i === 5 ? 'text-red-600' : ''
              } text-3xl`}
              onClick={(e) => iconHandler(e)}
            >
              {icon}
            </p>
            <h5 className=''>{title}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MegWrapper(AddToYour)

import React, { useState } from 'react'
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
} from 'react-icons/md'
import { GiEarthAmerica } from 'react-icons/gi'
import { HiDotsHorizontal, HiLockClosed } from 'react-icons/hi'
import { FaUserFriends } from 'react-icons/fa'
import { GoTriangleDown } from 'react-icons/go'
import { BsEmojiWink } from 'react-icons/bs'

import MegWrapper from '../MegWrapper'
import { useGlobalContext } from '../../Context/UseContext'
import { ProfilePicture } from '../index'
import { previous, audience } from '../../utils/Functions'

const CreatePost = () => {
  const [postvalue, setPostvalue] = useState('')
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
        createPostState ? 'translate_x' : ''
      } bg-white z-20  w-full h-full rounded-lg`}
    >
      <div className='relative flex flex-row py-4 items-center justify-center border-b border-gray-300'>
        <h3 className='text-xl font-bold text-gray-900'>Create post</h3>
        <p
          className='absolute top-2 right-2 rounded-full hover:bg-gray-400 bg-gray-300 p-2 cursor-pointer'
          onClick={() => setCreatePostState(false)}
        >
          <MdClose className='text-2xl ' />
        </p>
      </div>
      <div className='w-full h-full p-4'>
        <div className='flex flex-row gap-4 items-center'>
          <ProfilePicture />
          <div>
            <h3 className='text-md font-semibold text-gray-800 capitalize'>
              Don christsanctus chinedu
            </h3>
            <div
              className='flex flex-row gap-2 items-center rounded-sm bg-gray-200 w-min py-0.5 px-1 cursor-pointer '
              onClick={() => audience(setCreatePostState, setPostAudienceState)}
            >
              <GiEarthAmerica />
              <h4 className='text-sm text-gray-900 '>Public</h4>
              <GoTriangleDown />
            </div>
          </div>
        </div>
        <input
          type={'text'}
          value={postvalue}
          name={'postvalue'}
          placeholder={"What's on your mind Don"}
          onChange={(e) => setPostvalue(e.target.value)}
          className={` w-full mt-2 mb-8 h-max  outline-none placeholder:text-2xl pt-4 pl-2 placeholder:text-gray-500`}
        />
        <div className='w-full flex flex-row justify-between items-center'>
          <div className='cursor-pointer flex items-center justify-center py-1 px-1.5 rounded-md bg-gradient-to-r from-purple-500 to-pink-500'>
            <p className='text-white text-xl '>Aa</p>
          </div>
          <BsEmojiWink className='cursor-pointer text-xl text-gray-500' />
        </div>

        <div className='w-full border-2 flex flex-row justify-between items-center p-3 mt-4 rounded-md'>
          <h5 className='text-md font-semibold text-gray-800 '>
            Add to your post
          </h5>
          <div className='flex flex-row gap-2 items-center'>
            {[
              { icon: <MdOutlinePhotoLibrary /> },
              { icon: <MdPerson /> },
              { icon: <BsEmojiWink /> },
              {
                icon: <MdOutlineLocationOn />,
              },
              {
                icon: <MdFlag />,
              },
            ].map(({ icon }, i) => (
              <p
                className={`${i === 0 && 'text-green-600'} ${
                  i === 1 && 'text-blue-600'
                } ${i === 2 && 'text-yellow-600'} ${
                  i === 3 && 'text-red-600'
                } ${i === 4 && 'text-blue-400'} cursor-pointer text-2xl`}
                key={i}
              >
                {icon}
              </p>
            ))}
            <p className='text-xl text-gray-500b rounded-full p-1.5 hover:bg-gray-200 cursor-pointer'>
              <HiDotsHorizontal />
            </p>
          </div>
        </div>
        {postvalue ? (
          <button
            type='button'
            className={`w-full p-2 mt-2 mb-2 rounded-lg text-center 
                bg-blue-500 text-white font-bold text-lg
            `}
          >
            Post
          </button>
        ) : (
          <button
            type='button'
            className={`w-full p-2 mt-2 mb-2 rounded-lg text-center bg-gray-200 text-gray-400 font-bold text-lg
            `}
          >
            Post
          </button>
        )}
      </div>
    </div>
  )
}

export default MegWrapper(CreatePost)

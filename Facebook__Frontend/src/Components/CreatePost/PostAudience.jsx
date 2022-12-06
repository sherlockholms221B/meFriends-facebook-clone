import React, { useState } from 'react'
import { MdArrowBack } from 'react-icons/md'

import { useGlobalContext } from '../../Context/UseContext'
import { previous, forward } from '../../utils/Functions'
import { postAudienceLinks } from '../../utils/links'
import { Head } from '../index'
import MegWrapper from '../MegWrapper'

const PostAudience = () => {
  const [value, setValue] = useState(true)
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
        postAudienceState ? 'translate_x' : ''
      } bg-white z-20  w-full h-full rounded-lg`}
    >
      <Head
        title={`Post audience`}
        setFirstState={setCreatePostState}
        setSecondState={setPostAudienceState}
        setThirdState={setGoBack}
      />
      <div className='max-h-[350px] overflow-auto home_scroll p-2 '>
        <div className=''>
          <h4 className='text-lg font-semibold text-gray-800'>
            Who can see your post?
          </h4>
          <p className='text-md text-gray-500 '>
            Your post will appear in Feed, on your profile and in search
            results.
          </p>
          <p className='text-md text-gray-500  mt-5'>
            Your default audience is set to{' '}
            <span className='font-bold'>Public</span>, but you can change the
            audience of this specific post.
          </p>
        </div>

        {postAudienceLinks.map(({ icon, title, description }, i) => (
          <div
            className='flex justify-between items-center mt-2 mb-2 p-2 bg-blue-100 rounded-md  '
            key={i + title}
          >
            <div className='flex items-center gap-2 '>
              <p className='rounded-full bg-gray-300 p-4'> {icon} </p>
              <div className='flex flex-col gap-0 '>
                <h3 className='text-lg font-semibold text-gray-800'>{title}</h3>
                <p className='text-md text-gray-500 mt-[-5px]'>{description}</p>
              </div>
            </div>
            <div className='border-2 border-gray-500 h-6 w-6 rounded-full ' />
          </div>
        ))}
      </div>
      <div className='relative flex flex-col gap-2 border-t-2 border-gray-300 p-3'>
        <div className='flex justify-start items-center gap-2'>
          <input
            type='checkbox'
            id='default'
            className={`${value === true ? 'bg-blue-500' : 'bg-red-500'}`}
            value={value}
            onClick={(e) => {
              setValue(!value)
              console.log(e.target.value)
            }}
          />
          <label htmlFor='default' className='text-gray-600 font-semibold'>
            Set as default audience
          </label>
        </div>
        <div className='flex justify-end items-center gap-4'>
          <button
            className='text-blue-600 font-semibold hover:bg-gray-100 py-2 px-4 rounded-sm  '
            type='button'
          >
            Cancle
          </button>
          <button
            className='text-white font-semibold bg-blue-600 hover:bg-blue-700 py-2 px-8 rounded-md  '
            type='button'
          >
            Done
          </button>
        </div>
      </div>
    </div>
  )
}

export default MegWrapper(PostAudience)

import React, { useState } from 'react'

import { useGlobalContext } from '../../Context/UseContext'
import { IconHandler, previous } from '../../Functions/SH'
import { PostAudienceLinks } from '../../utils/LWRef'
import { Head } from '../index'
import MegWrapper from '../MegWrapper'

const PostAudience = () => {
  const [value, setValue] = useState(true)
  const {
    setCreatePostState,
    postAudienceState,
    setPostAudienceState,
    setGoBack,
    setAudState,
    audState,
  } = useGlobalContext()
  return (
    <div
      className={` ${
        postAudienceState ? 'translate_x' : ''
      }  z-20  w-full h-full rounded-lg dark:border dark:border-borderDark`}
    >
      <Head
        title={`Post audience`}
        setFirstState={setCreatePostState}
        setSecondState={setPostAudienceState}
        setThirdState={setGoBack}
      />
      <div className='max-h-[350px] overflow-auto home_scroll p-2 '>
        <div className=''>
          <h4 className='text-lg font-semibold text-gray-800 dark:text-heading_dark_white'>
            Who can see your post?
          </h4>
          <p className='text-md text-gray-500 dark:text-heading_dark_gray'>
            Your post will appear in Feed, on your profile and in search
            results.
          </p>
          <p className='text-md text-gray-500  mt-5  dark:text-heading_dark_gray'>
            Your default audience is set to{' '}
            <span className='font-bold'>Public</span>, but you can change the
            audience of this specific post.
          </p>
        </div>

        <div className='group/edit '>
          {PostAudienceLinks().map(
            ({ icon, title, description, id, ref }, i) => {
              return (
                <div
                  key={i + title}
                  ref={ref}
                  className={`flex ${id} ${
                    audState === title && 'bg-blue-00'
                  } justify-between items-center cursor-pointer mt-2 mb-2 p-2 rounded-md dark:hover:bg-darkComplementry group first:border first:dark:hover:bg-darkComplementry first:dark:bg-darkComplementry`}
                  onClick={(e) => {
                    IconHandler({ e, ref, setAudState })
                  }}
                >
                  <div className='flex items-center gap-2 '>
                    <p className='rounded-full bg-gray-300 dark:bg-darkComplementry dark:text-heading_dark_white text-lg mid_small:p-4 p-2 group-hover:brightness-150'>
                      {icon}
                    </p>
                    <div className='flex flex-col gap-0 '>
                      <h3 className='xtra_small:text-lg text-md font-semibold text-gray-800 dark:text-heading_dark_white '>
                        {title}
                      </h3>
                      <p className='mid_small:text-md text-xs text-gray-500 dark:text-heading_dark_gray mt-[-5px]'>
                        {description}
                      </p>
                    </div>
                  </div>
                  <div
                    ref={ref}
                    className={` ${
                      audState === title
                        ? 'relative bg-inherit before:w-2 before:h-2 before:bg-blue-500 eb before:absolute before:rounded-full before:translate-y-1/2 before:translate-x-1/2 ring-blue-500 ring-2'
                        : 'ring-2 dark:ring-white ring-gray-500'
                    }  h-4 w-4  rounded-full transition-colors `}
                  />
                </div>
              )
            }
          )}
        </div>
      </div>
      <div className='relative flex flex-col gap-2 border-t-2 dark:border-borderDark border-gray-300 p-3'>
        <div className='flex justify-start items-center gap-2'>
          <input
            type='checkbox'
            id='default'
            className={`${value === true ? 'bg-blue-500' : 'bg-red-500'}`}
            value={value}
            onClick={(e) => {
              setValue(!value)
            }}
          />
          <label
            htmlFor='default'
            className='dark:text-heading_dark_white text-gray-600 font-semibold'
          >
            Set as default audience
          </label>
        </div>
        <div className='flex justify-end items-center gap-4'>
          <button
            onClick={() =>
              previous(setCreatePostState, setPostAudienceState, setGoBack)
            }
            className='deep_blue font-semibold hover:bg-secondaryWhite py-2 px-4 rounded-sm  '
            type='button'
          >
            Cancle
          </button>
          <button
            onClick={() =>
              previous(setCreatePostState, setPostAudienceState, setGoBack)
            }
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

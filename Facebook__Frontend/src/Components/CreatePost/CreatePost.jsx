import React, { useState, useRef } from 'react'

import MegWrapper from '../MegWrapper'
import { useGlobalContext } from '../../Context/UseContext'
import { ProfilePicture, AddPicture, CreatePostLinks, PostAIR } from '../index'
import { forward } from '../../Functions/SH'
import { Icon } from '../../utils/Icon'

const CreatePost = () => {
  const [postvalue, setPostvalue] = useState('')
  const textRef = useRef(null)
  const {
    setCreatePostState,
    setAddToYourState,
    setPostAudienceState,
    addPictureState,
    goBack,
    setGoBack,
    audState,
    selectedFriends,
  } = useGlobalContext()

  const createPostHeadings = (e) => {
    const element = textRef.current
    element.style.height = 'auto'
    const sHeight = e.target.scrollHeight
    element.style.height = `${sHeight}px`
  }

  return (
    <div
      className={` ${
        goBack ? 'translate__x' : ''
      }  z-20  w-full h-full rounded-lg dark:border dark:border-borderDark`}
    >
      <div className='relative flex flex-row py-4 items-center justify-center border-b border-gray-300 dark:border-borderDark '>
        <h3 className='text-xl font-bold dark:text-white text-gray-900'>
          Create post
        </h3>
        <p
          className='absolute dark:bg-darkComplementry top-2 right-2 rounded-full hover:bg-secondaryWhite bg-gray-300 p-2 cursor-pointer  dark:shadow-black dark:shadow-sm'
          onClick={() => {
            setCreatePostState(false)
            setGoBack(false)
          }}
        >
          <Icon.MdClose className='text-2xl dark:text-white' />
        </p>
      </div>
      <div className='w-full h-full p-4'>
        <div className='flex flex-row gap-2 items-center mb-2'>
          <ProfilePicture />
          <div className=' w-fit'>
            <div className='w-full flex flex-wrap items-center'>
              <h3 className='text-md dark:text-white font-semibold pr-1 text-gray-800 capitalize'>
                Don christsanctus chinedu
              </h3>
              {selectedFriends.length > 0 && (
                <h3 className='text-md pr-1 font-semibold text-gray-800 '>
                  is with{' '}
                </h3>
              )}
              {selectedFriends.length > 0 &&
                selectedFriends.map((friend, i) => (
                  <h3
                    key={i}
                    className='text-md pl-1 hover:underline cursor-pointer pr-1 font-semibold text-gray-800 '
                  >
                    {`${friend},`}
                  </h3>
                ))}
            </div>
            <div
              className='flex dark:bg-darkComplementry flex-row gap-2 items-center rounded-sm bg-gray-200 w-min py-0.5 px-1 cursor-pointer  dark:text-white'
              onClick={() => forward(setCreatePostState, setPostAudienceState)}
            >
              <div className='text-sm text-gray-900   dark:text-white'>
                <PostAIR />
              </div>
              <h3 className='text-sm text-gray-900   dark:text-white'>
                {audState}
              </h3>
              <Icon.GoTriangleDown />
            </div>
          </div>
        </div>
        <div className='w-full max-h-[280px] overflow-auto vertical_scroll '>
          <textarea
            ref={textRef}
            value={postvalue}
            onChange={(e) => setPostvalue(e.target.value)}
            onKeyUp={(e) => createPostHeadings(e)}
            name=''
            id=''
            placeholder={`What's on your mind, ${'Don'}`}
            className=' outline-none w-full cursor-pointer resize-none  mt-2 mb-2 placeholder:text-2xl dark:bg-darkSecondary pt-2 pl-2 dark:text-white placeholder:text-gray-500 font-meduim overflow-hidden'
          />
          {addPictureState && <AddPicture />}
        </div>
        <div className='w-full flex flex-row justify-between items-center'>
          {!addPictureState && (
            <>
              <div className='cursor-pointer flex items-center justify-center py-1 px-1.5 rounded-md bg-gradient-to-r from-purple-500 to-pink-500'>
                <p className='text-white text-xl '>Aa</p>
              </div>
              <Icon.BsEmojiWink className='cursor-pointer text-xl text-gray-500' />
            </>
          )}
        </div>

        <div
          className='w-full border-2 cursor-pointer dark:border-borderDark flex flex-row justify-between items-center mid_small:p-3 mt-4 rounded-md'
          onClick={() => forward(setCreatePostState, setAddToYourState)}
        >
          <h5 className='hidden small:block text-md font-semibold text-gray-800  dark:text-white'>
            Add to your post
          </h5>
          <CreatePostLinks home={true} />
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
            className={`w-full p-2 mt-2 mb-2 rounded-lg text-center dark:bg-darkComplementry bg-gray-200 text-gray-400 cursor-not-allowed font-bold text-lg
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

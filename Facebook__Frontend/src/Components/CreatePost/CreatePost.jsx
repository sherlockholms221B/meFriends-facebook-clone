import React, { useState, useRef } from 'react'

import MegWrapper from '../MegWrapper'
import { useGlobalContext } from '../../Hooks/context/UseContext'
import { AddFile, CreatePostLinks, PostAIR, Profile } from '../index'
import { forward } from '../../Functions/SH'
import { Icon } from '../../utils/Icon'

//import authprofile from store
import useAuthStore from '../../Store/AuthStore'

//import re-useable component
import SoftTextArea from '../../examples/SoftTextArea'
import SoftPostBg from '../../examples/SoftPostBg'

const CreatePost = () => {
  const textRef = useRef(null)
  const {
    postvalue,
    setPostvalue,
    setCreatePostState,
    setAddToYourState,
    setPostAudienceState,
    addPictureState,
    goBack,
    setGoBack,
    audState,
    selectedFriends,
  } = useGlobalContext()

  const { userProfile } = useAuthStore()
  const importPattern = /^:import\(("[^"]*"|'[^']*'|[^"']+)\)$/
  importPattern.exec('/')
  return (
    <section
      className={` ${
        goBack ? 'translate__x' : ''
      }  z-20  w-full h-full rounded-lg dark:border dark:border-bd500`}
    >
      <article className='relative flex flex-row py-4 items-center justify-center border-b border-gray-300 dark:border-bd500 '>
        <h3 className='text-xl font-bold dark:text-white text-gray-900'>
          Create post
        </h3>
        <p
          className='absolute dark:bg-dark300 top-2 right-2 rounded-full hover:bg-light300 bg-gray-300 p-2 cursor-pointer  dark:shadow-black dark:shadow-sm'
          onClick={() => {
            setCreatePostState(false)
            setGoBack(false)
          }}
        >
          <Icon.MdClose className='text-2xl dark:text-white' />
        </p>
      </article>
      <section className='w-full h-full p-4'>
        <div className='flex flex-row gap-2 items-center mb-2'>
          <Profile size link='/' />
          <div className=' w-fit'>
            <article className='w-full flex flex-wrap items-center'>
              <h3 className='text-md dark:text-white font-semibold pr-1 text-gray-800 capitalize'>
                {userProfile?.userName}
              </h3>
              {selectedFriends.length > 0 && (
                <h3 className='text-xs pr-1 font-semibold text-gray-800 dark:text-thdark500 '>
                  is with
                </h3>
              )}
              {selectedFriends.length > 0 &&
                selectedFriends.map((friend, i) => (
                  <h3
                    key={i}
                    className='text-xs pl-1 hover:underline cursor-pointer pr-1 font-semibold text-gray-800 dark:text-thdark500 '
                  >
                    {`${friend},`}
                  </h3>
                ))}
            </article>
            <article
              className='flex dark:bg-dark300 flex-row gap-2 items-center rounded-sm bg-gray-200 w-fit py-0.5 px-1 cursor-pointer  dark:text-white'
              onClick={() => forward(setCreatePostState, setPostAudienceState)}
            >
              <article className='text-sm text-gray-900   dark:text-white'>
                <PostAIR state={audState} />
              </article>
              <h3 className='text-sm text-gray-900   dark:text-white'>
                {audState}
              </h3>
              <Icon.GoTriangleDown />
            </article>
          </div>
        </div>
        <section className='w-full max-h-[280px] overflow-auto vertical_scroll '>
          <SoftTextArea
            state={postvalue}
            setState={setPostvalue}
            currentRef={textRef}
          />
          {addPictureState && <AddFile />}
        </section>
        <SoftPostBg toggle={addPictureState} />
        <section
          role='button'
          className='w-full border-2 cursor-pointer dark:border-bd500 flex flex-row justify-between items-center sm:p-3 mt-4 rounded-md'
          onClick={() => forward(setCreatePostState, setAddToYourState)}
        >
          <h5 className='hidden mdsm:block text-md font-semibold text-gray-800  dark:text-white'>
            Add to your post
          </h5>
          <CreatePostLinks home={true} />
        </section>
        {postvalue ? (
          <button
            type='button'
            className='w-full p-2 mt-2 mb-2 rounded-lg text-center 
                bg-blue-500 text-white font-bold text-lg
            '
          >
            Post
          </button>
        ) : (
          <button
            type='button'
            className='w-full p-2 mt-2 mb-2 rounded-lg text-center dark:bg-dark300 bg-gray-200 text-gray-400 cursor-not-allowed font-bold text-lg
            '
          >
            Post
          </button>
        )}
      </section>
    </section>
  )
}

export default MegWrapper(CreatePost)

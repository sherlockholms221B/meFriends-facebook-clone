import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useGlobalContext } from '../Context/UseContext'
import { feedLinks, feedLinksOne } from '../utils/links'

import { Stories, Post, Reels, Rooms } from './index.js'
import { posts } from '../utils/constants'
import { profile } from '../Assets/exports'

const Posts = () => {
  const {
    setCreatePostState,
    setMessageState,
    setNotificationState,
    setProfileState,
  } = useGlobalContext()
  const isActiveStyle =
    'py-3 px-11   mt-1 cursor-pointer  border-b-4 border-blue-600 text-blue-500  place-items-center'
  const isNotActiveStyle =
    'py-3 px-11 rounded-lg  mt-1 mb-1 text-gray-600 cursor-pointer hover:bg-primary dark:hover:bg-darkComplementry  dark:text-text_heading_dark_gray'
  const vivaIconContainer =
    'flex flex-row flex-nowrap items-center hover:bg-primary dark:hover:bg-darkComplementry rounded-md cursor-pointer'

  const search = useLocation().search
  const query = new URLSearchParams(search).get('talling')

  return (
    <div className='w-full h-full overflow-hidden hover:overflow-auto scroll-hidden pb-20'>
      <div className='dark:bg-darkSecondary bg-white rounded-md shadow-lg mt-4 '>
        <div className='flex flex-row justify-around items-center capitalize border-b-2 px-1  dark:border-borderDark  border-[#D8D5D5]'>
          {feedLinks.map(({ name, icon }, i) => (
            <Link
              to={`?talling=${name}`}
              className={`
                ${
                  query === name
                    ? isActiveStyle
                    : `${
                        i === 0 && query === null
                          ? isActiveStyle
                          : isNotActiveStyle
                      }`
                } 
              `}
              key={i + name}
            >
              <div className='flex flex-row gap-2 items-center '>
                <p className='font-bold text-2xl '>{icon} </p>
                <h1 className='font-medium text-lg'>{name}</h1>
              </div>
            </Link>
          ))}
        </div>
        <div className='flex gap-2.5 flex-nowrap overflow-x-scroll mb-4 p-4 scroll_styled '>
          {(query === 'stories' || query === null) && <Stories />}
          {query === 'reels' && <Reels />}
          {query === 'rooms' && <Rooms />}
        </div>
      </div>
      <div className='dark:bg-darkSecondary bg-white rounded-md shadow-lg'>
        <div className='flex flex-row justify-between items-center mx-2 border-b-2 border-gray-300 dark:border-[#3a3b3c] py-4'>
          <Link
            to={`/backface/api/profile`}
            className=' rounded-full cursor-pointer'
          >
            <img
              src={profile}
              alt='profile'
              className='object-cover w-11 h-11'
            />
          </Link>
          <div
            className='rounded-full bg-primary dark:bg-darkComplementry hover:bg-hover  px-3 py-1.5 w-[90%] cursor-pointer flex flex-row justify-start items-center'
            onClick={() => {
              setMessageState(false)
              setNotificationState(false)
              setProfileState(false)
              setCreatePostState(true)
            }}
          >
            <h1 className='text-lg font-normal  dark:text-text_heading_dark_gray text-gray-500 p-1'>
              Whats on your mind, User ?
            </h1>
          </div>
        </div>
        <div className='flex flex-row flex-nowrap justify-around px-2 py-2  items-center '>
          {feedLinksOne.map(({ icon, title }, i) => (
            <div
              key={i}
              className={` ${vivaIconContainer} ${i === 0 && ' px-6 '} ${
                i === 1 && ' px-4 '
              } ${i === 2 && ' px-3 '} py-3  `}
            >
              <p
                className={` ${i === 0 && ' text-red-500 '} ${
                  i === 1 && '  text-green-500 '
                } ${i === 2 && ' text-yellow-500'} text-3xl font-bold mr-1`}
              >
                {icon}
              </p>
              <p className='text-lg text-gray-500 font-semibold dark:text-text_heading_dark_gray'>
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
      {posts.map(
        (
          {
            creator,
            profile: [{ profileImage, createdAt }],
            isPrivate,
            post,
            postText,
          },
          index
        ) => (
          <Post
            creator={creator}
            profileImage={profileImage}
            createdAt={createdAt}
            isPrivate={isPrivate}
            post={post}
            postText={postText}
            key={`${creator + index}`}
          />
        )
      )}
    </div>
  )
}

export default Posts

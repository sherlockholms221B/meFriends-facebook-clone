import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdVideoCameraBack, MdOutlinePhotoLibrary } from 'react-icons/md'
import { BsEmojiWink } from 'react-icons/bs'

import { useGlobalContext } from '../Context/UseContext'
import { feedLinks } from '../utils/links'
import { Stories, Post } from './index.js'
import { posts } from '../utils/constants'
import { profile } from '../Assets/exports'

const Posts = () => {
  const {
    createPostState,
    setCreatePostState,
    setMessageState,
    setNotificationState,
    setProfileState,
  } = useGlobalContext()
  const isActiveStyle =
    'py-3 px-8   mt-1 cursor-pointer  border-b-[3px] border-blue-600 text-blue-500'
  const isNotActiveStyle =
    'py-3 px-8 rounded-lg  mt-1 mb-1 text-gray-600 cursor-pointer hover:bg-[#E3E3E3] '

  const search = useLocation().search
  const query = new URLSearchParams(search).get('talling')

  return (
    <div className='w-full h-full overflow-auto  scroll_hidden pb-20'>
      <div className='bg-white rounded-md shadow-lg mt-4 '>
        <div className='flex flex-row justify-around items-center capitalize border-b-2 px-1  border-[#D8D5D5] '>
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
                <p className='font-bold text-[20px]'>{icon} </p>
                <h1 className='font-medium text-md'>{name}</h1>
              </div>
            </Link>
          ))}
        </div>
        <Stories />
      </div>
      <div className='bg-white rounded-md shadow-lg'>
        <div className='flex flex-row justify-between items-center mx-2 border-b-2 border-gray-300 py-4'>
          <Link to={`/backface/api/profile`}>
            <div className=' border-2 border-white rounded-full cursor-pointer'>
              <img
                src={profile}
                alt='profile'
                className='object-cover w-10 h-10'
              />
            </div>
          </Link>
          <div
            className='rounded-full bg-[#E3E3E3]  hover:bg-[#D8D5D5]  px-3 py-1 w-[90%] cursor-pointer flex flex-row justify-start items-center'
            onClick={() => {
              setMessageState(false)
              setNotificationState(false)
              setProfileState(false)
              setCreatePostState(true)
            }}
          >
            <h1 className='text-md text-gray-500 p-1'>
              Whats on your mind, User ?
            </h1>
          </div>
        </div>
        <div className='flex flex-row flex-nowrap justify-around px-2 py-3  items-center '>
          <div className='flex flex-row flex-nowrap items-center hover:bg-[#E3E3E3] rounded-md px-6 py-2 cursor-pointer '>
            <MdVideoCameraBack className='text-2xl font-bold text-red-500 mr-1' />
            <p className='text-md text-gray-500 font-semibold'>Live video</p>
          </div>
          <div className='flex flex-row flex-nowrap items-center hover:bg-[#E3E3E3] rounded-md px-4 py-2 cursor-pointer'>
            <MdOutlinePhotoLibrary className='text-2xl font-bold text-green-500 mr-1' />
            <p className='text-md text-gray-500 font-semibold'>Photo/Video</p>
          </div>
          <div className='flex flex-row flex-nowrap items-center hover:bg-[#E3E3E3] rounded-md px-3 py-2 cursor-pointer'>
            <BsEmojiWink className='text-2xl font-bold text-yellow-500 mr-1' />
            <p className='text-md text-gray-500 font-semibold'>
              Feeling/activity
            </p>
          </div>
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

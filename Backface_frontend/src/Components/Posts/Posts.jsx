import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RiAddLine } from 'react-icons/ri'
import {
  MdVideoCameraBack,
  MdOutlinePhotoLibrary,
  MdOutlineOndemandVideo,
} from 'react-icons/md'
import { BsEmojiWink, BsBookFill } from 'react-icons/bs'

import { useGlobalContext } from '../../Context/UseContext'
import { Stories, Post } from '../exports'
import { posts, storiesbox } from '../../utils/constants'
import { person_fourteen, profile } from '../../Assets/exports'

const Posts = () => {
  const { setMegState, megState } = useGlobalContext()
  console.log(megState)
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
          {[
            { name: 'stories', icon: <BsBookFill /> },
            { name: 'reels', icon: <MdOutlineOndemandVideo /> },
            { name: 'rooms', icon: <MdVideoCameraBack /> },
          ].map(({ name, icon }, i) => (
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
        <>
          <div className='flex gap-2 flex-nowrap overflow-x-scroll mt-4 mb-4 ml-2 pb-2 scroll_styled'>
            <div className='inline-block w-28 h-52'>
              <div className=' flex flex-col w-28 h-52 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out relative text-center'>
                <img
                  src={person_fourteen}
                  alt='str'
                  className='w-full h-[70%] rounded-t-lg object-cover'
                />
                <h1 className='text-gray-600 text-md font-semibold rounded-b-lg pt-4 px-1'>
                  create talling
                </h1>
                <div className='absolute top-0 bottom-0 right-0 left-0 cursor-pointer z-10 hover:backdrop-blur-sm rounded-lg' />
                <Link to={`/backface/api/profile`}>
                  <div className=' border-4 border-white-700 rounded-full cursor-pointer absolute top-[55%] right-[30%] bg-blue-700 p-1 z-10'>
                    <RiAddLine className='text-white text-2xl font-bold' />
                  </div>
                </Link>
              </div>
            </div>
            {storiesbox.map((tallings, i) => (
              <Stories key={i} tallings={tallings} />
            ))}
          </div>
        </>
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
            className='rounded-full bg-[#E3E3E3]  hover:bg-[#D8D5D5]  px-3 py-2 w-[90%] cursor-pointer flex flex-row justify-start items-center'
            onClick={() => setMegState(!megState)}
          >
            <h1 className='text-md text-gray-500'>
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
          { creator, profile: [{ profileImage, createdAt }], isPrivate, post },
          index
        ) => (
          <Post
            creator={creator}
            profileImage={profileImage}
            createdAt={createdAt}
            isPrivate={isPrivate}
            post={post}
            key={`${creator + index}`}
          />
        )
      )}
    </div>
  )
}

export default Posts

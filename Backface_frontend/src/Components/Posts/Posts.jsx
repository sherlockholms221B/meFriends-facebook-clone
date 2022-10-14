import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiAddLine } from 'react-icons/ri'

import Post from './Post'
import Stories from './Stories'
import { stories, storiesbox } from '../../utils/constants'
import { person_fourteen } from '../../Assets/exports'

const Posts = () => {
  const isActiveStyle = 'border-b-4 border-blue-500'
  const isNotActiveStyle = ''

  return (
    <div className='w-full h-full overflow-auto'>
      <div className='bg-white rounded-md '>
        <div className='flex flex-row justify-around items-center capitalize border-b-2  border-[#D8D5D5] '>
          {['stories', 'reals', 'rooms'].map((talling, i) => (
            <NavLink
              to={`/?talling=${talling}`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              key={i}
            >
              <div className='py-4 px-10 rounded-md  mt-1 mb-1'>
                <h1>{talling}</h1>
              </div>
            </NavLink>
          ))}
        </div>
        <>
          <div className='flex gap-2 flex-nowrap overflow-x-scroll mt-4 mb-4 ml-2 pb-2 hide-scroll-bar'>
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
    </div>
  )
}

export default Posts

import React from 'react'
import { MdOutlineExpandMore } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { profile } from '../../Assets/exports'

const Stories = ({
  tallings: {
    creator,
    profile: [{ profileImage }],
    talling,
  },
}) => {
  return (
    <div className='inline-block w-28 h-52 '>
      <div className='w-28 h-52  overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out relative text-center'>
        <img src={talling} alt='str' className='w-full h-full' />
        <div className='absolute top-0 bottom-0 right-0 left-0 cursor-pointer z-10 ' />
        <Link to={`/backface/api/profile`}>
          <div className=' border-4 border-blue-700 rounded-full cursor-pointer absolute top-4 left-4'>
            <img
              src={profileImage}
              alt='profile'
              className='object-cover w-8 h-8 rounded-full object-cover'
            />
          </div>
        </Link>
        <h1 className='absolute bottom-2 left-1 right-1 text-white text-md font-semibold'>
          {creator}
        </h1>
      </div>
    </div>
  )
}

export default Stories

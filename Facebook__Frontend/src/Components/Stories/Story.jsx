import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Stories = ({
  tallings: {
    creator,
    profile: [{ profileImage }],
    talling,
  },
}) => {
  return (
    <div className='inline-block w-fit h-fit ring-2 dark:ring-slate-700 ring-white shadow-md shadow-slate-700 rounded-lg '>
      <div className='group w-32 h-52 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out relative text-center'>
        <motion.img
          src={talling}
          alt='str'
          className='w-full h-full object-fit transition-all group-hover:scale-105 group-hover:brightness-75'
        />
        <Link
          to={`/backface/api/profile`}
          className=' border-4 border-blue-700 rounded-full cursor-pointer absolute top-4 left-4 group-hover:z-20'
        >
          <img
            src={profileImage}
            alt='profile'
            className='object-fit w-8 h-8 rounded-full '
          />
        </Link>
        <h1 className='absolute bottom-2 left-1 text-white text-md font-medium capitalize'>
          {creator}
        </h1>
      </div>
    </div>
  )
}

export default Stories

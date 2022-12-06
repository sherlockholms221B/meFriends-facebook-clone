import React from 'react'
import { Link } from 'react-router-dom'

import { groupsLinks } from '../utils/links'

const Groups = () => {
  return (
    <>
      {groupsLinks.map(({ img, name }) => (
        <Link to={`/backface/api/profile`} key={name} className='w-full'>
          <div className='flex  flex-row gap-2 mt-1.5 mb-1.5 px-3 py-2 rounded-md hover:bg-gray-300 items-center '>
            <img
              src={img}
              alt='profile'
              className='object-cover w-6 h-6 rounded-lg'
            />
            <h3 className='text-md font-semibold text-gray-900'>{name}</h3>
          </div>
        </Link>
      ))}
    </>
  )
}

export default Groups

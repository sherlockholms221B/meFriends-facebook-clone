import React from 'react'
import { MdGroups } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

import { groupsLinks } from '../utils/links'

const Groups = () => {
  const search = useLocation().search
  const query = new URLSearchParams(search).get('talling')
  return (
    <>
      <Link
        to={`?talling=${`groups`}`}
        className='relative pl-1 mt-3 hover:bg-primary flex flex-row gap-2 items-center w-full py-2 rounded-md'
      >
        <p className='text-xl dark:bg-darkComplementry dark:text-white text-black rounded-full p-2 bg-primaryWhite'>
          <MdGroups />
        </p>
        <p className='text-lg text-black font-medium dark:text-white'>Groups</p>
        <div
          className={` ${
            query === 'groups' ? 'animate-pulse transition-all' : 'hidden'
          } absolute w-1.5 rounded-tr-xl  rounded-br-xl h-full bg-blue-600 -left-2 `}
        ></div>
      </Link>
      {groupsLinks.map(({ img, name }) => (
        <Link
          to={`/backface/api/profile`}
          key={name}
          className='w-full flex  flex-row gap-2 mt-0.5 mb-0.5 px-3 py-2.5 rounded-md hover:bg-hover items-center'
        >
          <img
            src={img}
            alt='profile'
            className='object-cover w-6 h-6 rounded-lg'
          />
          <h3
            className={`dark:text-white hidden xl:block text-md font-semibold text-gray-900`}
          >
            {name}
          </h3>
        </Link>
      ))}
    </>
  )
}

export default Groups

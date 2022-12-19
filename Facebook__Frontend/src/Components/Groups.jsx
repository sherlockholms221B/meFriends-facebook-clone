import React from 'react'
import { MdGroups } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

import { groupsLinks } from '../utils/links'
import Active from './Active'

const Groups = ({ barHarder, barContainer, roundedIcon }) => {
  const search = useLocation().search
  const query = new URLSearchParams(search).get('talling')
  return (
    <>
      <Link
        to={`?talling=${`groups`}`}
        className={` ${barContainer} xl:pl-1 p-0 mt-3  py-2 `}
      >
        <p className={`${roundedIcon} text-lg -ml-1 xl:-ml-0 p-2 xl:p-2`}>
          <MdGroups />
        </p>
        <p className={barHarder}>Groups</p>
        <Active queryTerm={`groups`} homeTerm={null} />
      </Link>
      {groupsLinks.map(({ img, name }) => (
        <Link
          to={`/backface/api/profile`}
          key={name}
          className='w-full dark:hover:bg-darkComplementry flex  flex-row gap-2 xl:mt-0.5 xl:mb-0.5 xl:px-3 py-2.5 rounded-md hover:bg-hover items-center'
        >
          <img
            src={img}
            alt='profile'
            className='object-cover w-6 h-6 rounded-lg'
          />
          <h3
            className={`dark:text-white hidden larg:block text-md font-semibold text-gray-900 `}
          >
            {name}
          </h3>
        </Link>
      ))}
    </>
  )
}

export default Groups

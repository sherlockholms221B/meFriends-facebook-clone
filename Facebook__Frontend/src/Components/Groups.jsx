import React from 'react'
import { MdGroups } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { groupsLinks } from '../utils/links'
import Active from './Active'

const Groups = ({ isMbar, barHarder, barContainer, roundedIcon }) => {
  return (
    <>
      {groupsLinks.map(({ img, name }) => (
        <Link
          to={`/backface/api/profile`}
          key={name}
          className='w-full dark:hover:bg-darkComplementry flex  flex-row gap-2 xl:mt-0.5 xl:mb-0.5 xl:px-3 py-2.5 rounded-md hover:bg-secondaryWhite items-center'
        >
          <img
            src={img}
            alt='profile'
            className='object-cover w-6 h-6 rounded-lg'
          />
          {isMbar && (
            <h3
              className={`dark:text-white hidden larg:block text-md font-semibold text-gray-900 `}
            >
              {name}
            </h3>
          )}
        </Link>
      ))}
      <Link
        to={`?talling=${`groups`}`}
        className={` ${barContainer} xl:pl-1 p-0 py-2 `}
      >
        <p className={`${roundedIcon} text-lg -ml-1 xl:-ml-0 p-2 xl:p-2`}>
          <MdGroups />
        </p>
        {isMbar && <p className={barHarder}>Groups</p>}
        <Active queryTerm={`groups`} homeTerm={null} />
      </Link>
    </>
  )
}

export default Groups

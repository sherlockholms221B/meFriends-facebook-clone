import React from 'react'
import { MdGroups } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { Active } from './index'
import { useGlobalContext } from '../Context/UseContext'

const Groups = ({
  isMbar,
  barHarder,
  barContainer,
  roundedIcon,
  groupsLinks,
}) => {
  const { dynamicLocation } = useGlobalContext()
  return (
    <>
      {groupsLinks.map(({ img, name }) => (
        <Link
          onMouseOver={(e) => {
            const element = e.target.getBoundingClientRect()
            dynamicLocation({
              left: element.right,
              center: (element.top + element.bottom) / 2,
            })
          }}
          to={`/backface/api/profile`}
          key={name}
          className={` ${
            !isMbar
              ? ''
              : 'pl-2 larg:hover:bg-primary  larg:dark:hover:bg-darkComplementry hover:bg-inherit'
          } relative mb-0.5 flex flex-row gap-4 items-center w-full py-2 rounded-md`}
        >
          <img
            onMouseOver={(e) => e.stopPropagation()}
            src={img}
            alt='profile'
            className='object-cover w-6 h-6 rounded-lg'
          />
          {isMbar && (
            <h3
              onMouseOver={(e) => e.stopPropagation()}
              className={`dark:text-white hidden larg:block text-md font-semibold text-gray-900 `}
            >
              {name}
            </h3>
          )}
        </Link>
      ))}
      <Link
        to={`?talling=${`groups`}`}
        className={` ${barContainer} ${!isMbar ? '' : 'larg:pl-1'} py-1 `}
      >
        <p
          className={`${roundedIcon} ${
            !isMbar ? '' : 'larg:-ml-0 larg:p-2'
          } text-lg -ml-1 p-2 `}
        >
          <MdGroups />
        </p>
        {isMbar && <p className={barHarder}>See all groups</p>}
        <Active queryTerm={`groups`} homeTerm={null} />
      </Link>
    </>
  )
}

export default Groups

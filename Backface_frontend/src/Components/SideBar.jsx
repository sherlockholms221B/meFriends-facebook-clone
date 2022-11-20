import React from 'react'
import { AiFillHome, AiOutlineClockCircle } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'
import { FiSave } from 'react-icons/fi'
import { HiOutlineKey } from 'react-icons/hi'
import {
  MdMapsHomeWork,
  MdOutlineOndemandVideo,
  MdGroups,
  MdBookmarkBorder,
  MdOutlineAutoAwesomeMotion,
} from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

import profile from '../Assets/profile.png'

const SideBar = () => {
  const activeNav =
    'border-l-4 border-blue-500 mt-1 mb-1  pl-2 w-full pr-2 cursor-pointer'
  const notActiveNav = 'mt-1 mb-1  pl-2 w-full pr-2 cursor-pointer'

  const search = useLocation().search
  const query = new URLSearchParams(search).get('talling')

  return (
    <div className='flex flex-col justify-start items-start w-ful h-full pb-2 pt-2  '>
      {[
        {
          title: 'Home',
          icon: <AiFillHome />,
        },
        {
          title: 'Don christsanctus',
          icon: profile,
        },

        {
          title: 'Menu',
          icon: <MdOutlineAutoAwesomeMotion />,
        },
        {
          title: 'Friends',
          icon: <FaUserFriends />,
        },
        {
          title: 'Market place',
          icon: <MdMapsHomeWork />,
        },
        {
          title: 'Watched',
          icon: <MdOutlineOndemandVideo />,
        },
        {
          title: 'Memories',
          icon: <AiOutlineClockCircle />,
        },
        {
          title: 'Saved',
          icon: <MdBookmarkBorder />,
        },
        { title: 'Groups', icon: <MdGroups /> },
        {
          title: 'Shortcuts',
          icon: <HiOutlineKey />,
        },
      ].map((page, i) => (
        <div
          key={i}
          className={`${query === page?.title ? activeNav : notActiveNav}`}
        >
          {i === 1 ? (
            <Link to={`/backface/api/profile`}>
              <div className='flex flex-row gap-2 px-3 py-2 rounded-md hover:bg-gray-300 items-center '>
                <img
                  src={profile}
                  alt='profile'
                  className='object-cover w-6 h-6'
                />
                <h3 className='text-md font-semibold text-gray-700'>
                  {page.title}
                </h3>
              </div>
            </Link>
          ) : (
            <Link to={`?talling=${page.title}`}>
              <div className='flex flex-row gap-2 px-3 py-2 rounded-md hover:bg-gray-300 items-center'>
                <p
                  className={`  ${
                    i === 2 || i === 8 || i === 9
                      ? 'text-gray-700 border-2 border-gray-300 rounded-full bg-gray-300 p-[4px] '
                      : 'text-blue-600'
                  } text-xl `}
                >
                  {page.icon}
                </p>
                <p className={`  text-md font-semibold text-gray-700 `}>
                  {page.title}
                </p>
              </div>
            </Link>
          )}
        </div>
      ))}
      <div className='mt-10 mb-4 p-2 flex flex-col gap-3'>
        <h3 className='text-sm text-gray-500 '>
          This is a facebook clone web3 application designed only for
          educational purposes contact the developer for more.
        </h3>
        <p className='text-[12px] text-gray-400'>
          Privacy. Terms. Advertising. Videos. Streming. Subscriptions. Ad
          choices Cookies. More. Meta
        </p>
        <p className='text-[12px] text-gray-500'>
          Designed by <span className='text-gray-600 font-bold'>Santus</span>
        </p>
      </div>
    </div>
  )
}

export default SideBar

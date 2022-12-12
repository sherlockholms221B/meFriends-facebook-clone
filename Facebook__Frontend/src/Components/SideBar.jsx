import React from 'react'
import { HiLink } from 'react-icons/hi'
import { MdHome } from 'react-icons/md'
import { TbGridDots } from 'react-icons/tb'
import { Link, useLocation } from 'react-router-dom'

import profile from '../Assets/profile.png'
import { sideLinks } from '../utils/links'
import Groups from './Groups'

const SideBar = () => {
  const activeNav = ' '
  const notActiveNav = ''

  const search = useLocation().search
  const query = new URLSearchParams(search).get('talling')
  console.log(query)

  return (
    <div className='flex flex-col justify-start items-baseline w-full h-fit pb-2 pl-2'>
      <Link
        to={`/`}
        className='relative pl-2 hover:bg-primary flex flex-row gap-2 items-center w-full py-2 rounded-md'
      >
        <p className='text-3xl text-blue-600'>
          <MdHome />
        </p>
        <p className='text-lg text-black font-medium dark:text-white'>Home</p>
        <div
          className={`${
            query === 'home'
              ? 'animate-pulse transition-all'
              : `${query === null ? 'animate-pulse transition-all' : 'hidden'}`
          }  absolute w-1.5 rounded-tr-xl  rounded-br-xl h-full bg-blue-600 -left-2 `}
        ></div>
      </Link>
      <Link
        to={`/backface/api/profile`}
        className='pl-2 hover:bg-primary flex flex-row gap-2 items-center w-full py-2 rounded-md'
      >
        <img src={profile} alt='profile' className='object-cover w-7 h-7' />
        <p className='text-lg text-black font-medium dark:text-white'>{`Christsanctus chinedu`}</p>
      </Link>
      <Link
        to={`?talling=${`menu`}`}
        className='relative pl-1 mt-3 hover:bg-primary flex flex-row gap-2 items-center w-full py-2 rounded-md'
      >
        <p className='text-xl dark:bg-darkComplementry dark:text-white text-black rounded-full p-2 bg-primaryWhite'>
          <TbGridDots />
        </p>
        <p className='text-lg text-black font-semibold dark:text-white'>Menu</p>
        <div
          className={` ${
            query === 'menu' ? 'animate-pulse transition-all' : 'hidden'
          } absolute w-1.5 rounded-tr-xl  rounded-br-xl h-full bg-blue-600 -left-2 `}
        ></div>
      </Link>
      {sideLinks.map((page, i) => (
        <Link
          key={i + page.title}
          to={`?talling=${page.title}`}
          className='relative pl-3 hover:bg-primary mt-0.5 mb-0.5 flex flex-row gap-2 items-center w-full py-2 rounded-md'
        >
          <p className='text-2xl text-blue-600'>{page.icon}</p>
          <p className='text-lg text-gray-800 font-medium dark:text-white'>
            {page.title}
          </p>
          <div
            className={` ${
              query === page.title ? 'animate-pulse transition-all' : 'hidden'
            } absolute w-1.5 rounded-tr-xl  rounded-br-xl h-full bg-blue-600 -left-2 `}
          ></div>
        </Link>
      ))}
      <Groups />
      <Link
        to={`/`}
        className='pl-1 mt-3 hover:bg-primary flex flex-row gap-2 items-center w-full py-2 rounded-md'
      >
        <p className='text-xl dark:text-white dark:bg-darkComplementry text-black rounded-full p-2 bg-primaryWhite'>
          <HiLink />
        </p>
        <p className='text-lg text-black font-medium dark:text-white'>
          Shortcuts
        </p>
      </Link>
      <div className='  hidden mt-10 mb-4 p-2 xl:flex flex-col gap-3'>
        <h3 className='text-sm text-gray-500 '>
          This is a facebook clone web3 application designed only for
          educational purposes contact the developer for more.
        </h3>
        <p className='text-[12px] text-gray-400'>
          Privacy. Terms. Advertising. Videos. Streming. Subscriptions. Ad
          choices Cookies. More. Meta
        </p>
        <p className='text-[12px] text-gray-500'>
          Designed by <span className='text-gray-600 font-bold'>Santus@</span>{' '}
          christsanctus
        </p>
      </div>
    </div>
  )
}

export default SideBar

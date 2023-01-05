import React from 'react'
import { HiLink } from 'react-icons/hi'
import { MdHome } from 'react-icons/md'
import { TbGridDots } from 'react-icons/tb'
import { Link } from 'react-router-dom'

import { profile } from '../../Assets/exports'
import Groups from '../Groups'
import { Active } from '../index'
import { SideLinks } from '../../utils/LWRef'
import { useGlobalContext } from '../../Context/UseContext'

const MSideBar = () => {
  const { menuSl, setMenuSl, shortCutSl, setShortCutSl, groupSl, setGroupSl } =
    useGlobalContext()
  const barContainer =
    'relative hover:bg-inherit xl:hover:bg-primary xl:dark:hover:bg-darkComplementry flex flex-row gap-2 items-center w-full  rounded-md'
  const roundedIcon =
    ' dark:bg-darkComplementry dark:text-white text-black rounded-full  bg-primaryWhite'
  return (
    <div className=' hidden small:flex dark:border-r dark:xl:border-0 dark:border-borderDark  dark:bg-darkSecondary overflow-hidden w-max  bg-white pt-4 pl-2 pr-2 '>
      <div className='flex flex-col justify-start items-baseline larg:w-full h-fit pb-2 pl-2 pr-2'>
        <Link to={`/`} className={` ${barContainer} p-0 py-2`}>
          <p className='text-3xl deep_blue'>
            <MdHome />
          </p>
          <Active queryTerm={`home`} homeTerm={null} />
        </Link>
        <Link
          to={`/backface/api/profile`}
          className={`xl:pl-2 p-0 py-2 ${barContainer}`}
        >
          <img src={profile} alt='profile' className='object-cover w-7 h-7' />
        </Link>
        <div className='border-[1px] w-full mt-3 mb-3 border-gray-300 dark:border-borderDark' />

        {SideLinks().map((page, i) => (
          <Link
            key={i + page.title}
            to={`/${page.url}?talling=${page.title}`}
            className='relative xl:pl-3 p-0 xl:dark:hover:bg-darkComplementry xl:hover:bg-primary hover:bg-inherit mt-0.5 mb-0.5 flex flex-row gap-2 items-center w-full py-2 rounded-md'
          >
            <p className='text-xl larg:text-2xl deep_blue'>{page.icon}</p>

            <Active queryTerm={page.title} homeTerm={null} />
          </Link>
        ))}
        <button
          onClick={() => {
            setMenuSl(!menuSl)
            setGroupSl(false)
            setShortCutSl(false)
          }}
          to={`?talling=${`menu`}`}
          className={` ${barContainer} xl:pl-1 p-0   py-2 `}
        >
          <p className={`${roundedIcon} text-lg -ml-1 xl:-ml-0 p-2 xl:p-2`}>
            <TbGridDots />
          </p>
          <Active queryTerm={`menu`} homeTerm={null} />
        </button>
        <div className='border-[1px] w-full mt-3 mb-3 border-gray-300 dark:border-borderDark' />

        <Groups
          barContainer={barContainer}
          roundedIcon={roundedIcon}
          isMbar={false}
        />
        <div className='border-[1px] w-full mt-3 mb-3 border-gray-300 dark:border-borderDark' />

        <Link
          to={`?talling=${`shortcuts`}`}
          className={` ${barContainer} xl:pl-1 p-0 mt-3 py-2`}
        >
          <p className={`${roundedIcon} text-lg -ml-1 xl:-ml-0 p-2 xl:p-2`}>
            <HiLink />
          </p>
          <Active queryTerm={`shortcuts`} />
        </Link>
      </div>
    </div>
  )
}

export default MSideBar

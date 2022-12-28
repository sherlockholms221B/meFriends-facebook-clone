import React from 'react'
import { HiLink } from 'react-icons/hi'
import { MdHome } from 'react-icons/md'
import { TbGridDots } from 'react-icons/tb'
import { Link } from 'react-router-dom'

import { profile } from '../../Assets/exports'
import Groups from '../Groups'
import { Active, Footer } from '../index'
import { SideLinks } from '../../utils/LWRef'

const SideBar = () => {
  const barHarder =
    ' text-black dark:text-heading_dark_white hidden larg:block text-md font-medium'
  const barContainer =
    'relative hover:bg-inherit larg:hover:bg-primary larg:dark:hover:bg-darkComplementry flex flex-row gap-2 items-center w-full  pl-2 rounded-md'
  const roundedIcon =
    ' dark:bg-darkComplementry dark:text-white text-black rounded-full  bg-primaryWhite'
  return (
    <div className=' hidden small:flex dark:border-r dark:larg:border-0 dark:border-borderDark  dark:bg-darkSecondary overflow-hidden hover:overflow-auto w-min bg-white larg:pr-2  larg:w-[300px] larg:bg-inherit dark:larg:bg-darkPrimary '>
      <div className='flex flex-col justify-start items-baseline w-fit larg:w-full h-fit pb-2 pl-2 pr-4 larg:pr-0'>
        <Link to={`/`} className={` ${barContainer} larg:pl-2 p-0 py-2`}>
          <p className='text-3xl deep_blue'>
            <MdHome />
          </p>
          <p className={`${barHarder} `}>Home</p>
          <Active queryTerm={`home`} homeTerm={null} />
        </Link>
        <Link
          to={`/backface/api/profile`}
          className={`larg:pl-2 p-0 py-2 ${barContainer}`}
        >
          <img src={profile} alt='profile' className='object-cover w-7 h-7' />
          <p className={` ${barHarder}`}>{`Christsanctus chinedu`}</p>
        </Link>
        <div className='border-[0.1px] w-full mt-4 mb-2 border-gray-300 dark:border-borderDark' />
        {SideLinks().map((page, i) => (
          <Link
            key={i + page.title}
            to={`${page.url}?talling=${page.title}`}
            className='relative pl-2 larg:dark:hover:bg-darkComplementry larg:hover:bg-primary hover:bg-inherit  mb-0.5 flex flex-row gap-2 items-center w-full py-2 rounded-md'
          >
            <p className='text-xl larg:text-2xl deep_blue'>{page.icon}</p>
            <p className='text-md text-gray-800 font-medium dark:text-heading_dark_white hidden larg:block'>
              {page.title}
            </p>
            <Active queryTerm={page.title} homeTerm={null} />
          </Link>
        ))}
        <Link
          to={`?talling=${`menu`}`}
          className={` ${barContainer} larg:pl-1 p-0 py-2 `}
        >
          <p className={`${roundedIcon} text-lg -ml-1 larg:-ml-0 p-2 larg:p-2`}>
            <TbGridDots />
          </p>
          <p className={`${barHarder} text-lg font-semibold `}>see all</p>
          <Active queryTerm={`menu`} homeTerm={null} />
        </Link>
        <div className='border-[1px] w-full mt-4 border-gray-300 dark:border-borderDark' />
        <Groups
          barHarder={barHarder}
          barContainer={barContainer}
          roundedIcon={roundedIcon}
          isMbar={true}
        />
        <div className='border-[0.1px] w-full mt-4 border-gray-300 dark:border-borderDark' />
        <Link
          to={`?talling=${`shortcuts`}`}
          className={` ${barContainer} larg:pl-1 p-0 mt-3 py-2`}
        >
          <p className={`${roundedIcon} text-lg -ml-1 larg:-ml-0 p-2 larg:p-2`}>
            <HiLink />
          </p>
          <p className={` ${barHarder} `}>Shortcuts</p>
          <Active queryTerm={`shortcuts`} />
        </Link>
        <Footer />
      </div>
    </div>
  )
}

export default SideBar

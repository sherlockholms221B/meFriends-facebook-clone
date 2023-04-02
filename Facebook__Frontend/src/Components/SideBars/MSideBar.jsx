import React from 'react'
import { Link } from 'react-router-dom'

import Groups from '../Groups'
import { Active, Profile } from '../index'
import { SideLinks } from '../../utils/LWRef'
import { useGlobalContext } from '../../Context/UseContext'
import { groupsLinks } from '../../utils/links'
import { BorderLine } from '../RDOMC'
import { Icon } from '../../utils/Icon'

const MSideBar = () => {
  const { menuSl, setMenuSl, setShortCutSl, setGroupSl } = useGlobalContext()
  const barContainer =
    'relative hover:bg-inherit xl:hover:bg-primary xl:dark:hover:bg-darkComplementry flex flex-row gap-2 items-center w-full  rounded-md'
  const roundedIcon =
    ' dark:bg-darkComplementry dark:text-white text-black rounded-full  bg-primaryWhite'
  return (
    <div className=' hidden small:flex dark:border-r dark:xl:border-0 dark:border-borderDark  dark:bg-darkSecondary overflow-hidden hover:overflow-auto w-max  bg-white pt-4 pl-2 pr-2 '>
      <div className='flex flex-col justify-start items-baseline larg:w-full h-fit pb-2 pl-2 pr-2'>
        <Link to={`/`} className={` ${barContainer} p-0 py-2`}>
          <p className='text-3xl text-heading_dark_white'>
            <Icon.MdHome />
          </p>
          <Active queryTerm={`home`} homeTerm={null} />
        </Link>
        <Profile link={`/backface/api/profile`} size />
        <BorderLine />
        {SideLinks().map((page, i) => (
          <Link
            key={i + page.title}
            to={`/${page.url}?talling=${page.title}`}
            className='relative xl:pl-3 p-0 xl:dark:hover:bg-darkComplementry xl:hover:bg-primary hover:bg-inherit mt-0.5 mb-0.5 flex flex-row gap-2 items-center w-full py-2 rounded-md'
          >
            <p className='text-xl larg:text-2xl pl-1.5'>{page.icon}</p>

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
            <Icon.TbGridDots />
          </p>
          <Active queryTerm={`menu`} homeTerm={null} />
        </button>
        <BorderLine />
        <Groups
          barContainer={barContainer}
          roundedIcon={roundedIcon}
          isMbar={false}
          groupsLinks={groupsLinks}
        />
        <BorderLine />
        <Link
          to={`?talling=${`shortcuts`}`}
          className={` ${barContainer} xl:pl-1 p-0 mt-3 py-2`}
        >
          <p className={`${roundedIcon} text-lg -ml-1 xl:-ml-0 p-2 xl:p-2`}>
            <Icon.HiLink />
          </p>
          <Active queryTerm={`shortcuts`} />
        </Link>
      </div>
    </div>
  )
}

export default MSideBar

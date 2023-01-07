import React from 'react'
import { HiLink } from 'react-icons/hi'
import { MdHome } from 'react-icons/md'
import { TbGridDots } from 'react-icons/tb'
import { Link } from 'react-router-dom'

import { profile } from '../../Assets/exports'
import Groups from '../Groups'
import { Active, Footer } from '../index'
import { SideLinks } from '../../utils/LWRef'
import { barHarder, barContainer, roundedIcon } from '../../utils/useStyles'
import { useGlobalContext } from '../../Context/UseContext'
import { groupsLinks } from '../../utils/links'
import { BorderLine } from '../RDOMC'
const SideBar = () => {
  const { menuSl, setMenuSl, setShortCutSl, setGroupSl } = useGlobalContext()
  return (
    <section className='hidden small:flex dark:bg-darkSecondary dark:larg:bg-darkPrimary bg-white overflow-hidden hover:overflow-auto w-min larg:w-[300px] larg:bg-inherit'>
      <section className='flex flex-col justify-start items-center w-fit larg:w-full h-fit pl-2.5       '>
        <Link to={`/`} className={` ${barContainer}   py-2 mt-2`}>
          <MdHome className='text-xl text-blue-700' />
          <p className={`${barHarder} `}>Home</p>
          <Active queryTerm={`home`} term={null} />
        </Link>
        {/* refactor the profile cmp when ready*/}
        <Link to={`/backface/api/profile`} className={` py-2 ${barContainer}`}>
          <img
            src={profile}
            alt='profile'
            className='object-cover w-6 h-6 -ml-1'
          />
          <p className={` ${barHarder}`}>{`Christsanctus chinedu`}</p>
        </Link>
        <BorderLine />
        {SideLinks().map((page, i) => (
          <Link
            key={i + page.title}
            to={`${page.url}?talling=${page.title}`}
            className={`${barContainer} py-2`}
          >
            {page.icon}
            <p className='text-md text-gray-800 font-medium dark:text-heading_dark_white hidden larg:block'>
              {page.title}
            </p>
            <Active queryTerm={page.title} term={null} />
          </Link>
        ))}
        <button
          to={`?talling=${`menu`}`}
          className={` ${barContainer} py-1 `}
          onClick={() => {
            setMenuSl(!menuSl)
            setGroupSl(false)
            setShortCutSl(false)
          }}
        >
          <p className={`${roundedIcon} text-lg -ml-1 larg:-ml-2 p-1.5`}>
            <TbGridDots />
          </p>
          <p className={`${barHarder}`}>See all</p>
          <Active queryTerm={`menu`} term={null} />
        </button>
        <BorderLine />
        <Groups
          barHarder={barHarder}
          barContainer={barContainer}
          roundedIcon={roundedIcon}
          isMbar={true}
          groupsLinks={groupsLinks}
        />
        <BorderLine />
        <button
          to={`?talling=${`shortcuts`}`}
          className={` ${barContainer} py-1`}
        >
          <p className={`${roundedIcon} text-lg -ml-1 larg:-ml-2 p-1.5`}>
            <HiLink />
          </p>
          <p className={` ${barHarder} `}>See all shortcuts</p>
          <Active queryTerm={`shortcuts`} />
        </button>
        <Footer />
      </section>
    </section>
  )
}

export default SideBar

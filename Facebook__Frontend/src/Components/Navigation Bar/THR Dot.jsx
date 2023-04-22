import React from 'react'
import { MdMenu, MdOutlineExpandMore } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../Hooks/context/UseContext'
import { IconHandler } from '../../Functions/utilities/SH'
import { NavDot1 } from '../../utils/LWRef'
import { Profile, ToolTip } from '../index'
import { Icon } from '../../utils/Icon'

const THRDot = () => {
  const {
    setMessageState,
    setNotificationState,
    messageState,
    notificationState,
    profileState,
    setProfileState,
    setMobileMenu,
  } = useGlobalContext()
  return (
    <section className='flex flex-row gap-2 mdsm:gap-3 items-center'>
      {NavDot1().map(({ icon, alarts, tip, ref }, i) => (
        <ul
          ref={ref}
          data-tip
          data-for={tip}
          onClick={(e) =>
            IconHandler({
              e,
              ref,
              setMessageState,
              setNotificationState,
              setProfileState,
              messageState,
              notificationState,
            })
          }
          className={`relative hidden mdsm:block p-2.5 dark:bg-dark300  ${tip} rounded-full bg-light300  hover:bg-light400
            cursor-pointer`}
          key={i + alarts}
        >
          <li className='text-2xl font-semibold dark:text-white text-black'>
            {icon}
          </li>
          <div className='dark:border-0 flex items-center justify-center absolute w-[18px] h-[18px] rounded-full ring-2 ring-white bg-red-700 top-0 right-0 z-10'>
            <p className='text-white text-[12px] font-bold'>{alarts}</p>
          </div>
          <ToolTip
            title={tip}
            id={tip}
            effect={`float`}
            type={`dark`}
            place={`bottom`}
          />
        </ul>
      ))}
      <Link
        to={`/api/search/random?srid=${437353034034503059593593050}`}
        onClick={() => {}}
        className={`relative mdsm:hidden p-0.5 xs:p-1.5 dark:bg-dark300 rounded-full bg-light300  hover:bg-light400
            cursor-pointer`}
      >
        <Icon.MdOutlineSearch className='text-xl xs:text-2xl font-semibold dark:text-white' />
      </Link>
      <button
        data-tip
        data-for='profile'
        className='relative dark:ring-2 dark:ring-slate-800  rounded-full cursor-pointer'
        onClick={() => {
          setProfileState(!profileState)
          setMessageState(false)
          setNotificationState(false)
        }}
      >
        <Profile link={'/'} />
        <div className='hidden mdsm:flex absolute w-[15px] h-[15px] rounded-full bg-red-600 top-0 right-0 ring-2 ring-white z-10' />
        <div className='hidden mdsm:flex absolute bottom-[-3px] dark:ring-slate-800 dark:bg-dark300 right-0 rounded-full bg-light300 ring-2 ring-white w-4 h-4  justify-center items-center'>
          <MdOutlineExpandMore className='text-tablet dark:text-white text-black font-bold' />
        </div>
        <ToolTip
          title={`account`}
          effect={`float`}
          type={`dark`}
          place={`left`}
          id={`profile`}
        />
      </button>
      <button
        onClick={() => {
          setMobileMenu(true)
        }}
        className={`relative mdsm:hidden p-0.5 xs:p-1.5 dark:bg-dark300 rounded-full bg-light300  tab:hover:bg-light400
            cursor-pointer`}
      >
        <MdMenu className='text-xl xs:text-2xl font-semibold dark:text-white' />
      </button>
    </section>
  )
}

export default THRDot

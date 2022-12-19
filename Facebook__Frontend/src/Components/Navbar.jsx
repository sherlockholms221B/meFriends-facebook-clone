import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdMenu, MdNotifications } from 'react-icons/md'
import { MdOutlineExpandMore, MdOutlineSearch } from 'react-icons/md'
import { FaFacebookMessenger } from 'react-icons/fa'

import { profile } from '../Assets/exports'
import { Input, ToolTip } from './index'
import { iconHandler, refresh } from '../functions/stateHandler'
import { useGlobalContext } from '../Context/UseContext'
import { mNavLink } from '../utils/links'

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('')
  const messengerRef = useRef(null)
  const notificationRef = useRef(null)
  const navBarRef = useRef(null)
  const {
    setMessageState,
    setNotificationState,
    messageState,
    notificationState,
    profileState,
    setProfileState,
    dynamicLocation,
  } = useGlobalContext()

  useLayoutEffect(() => {
    const element = navBarRef.current.getBoundingClientRect()
    const elementHeight = element.height
    dynamicLocation({ height: elementHeight })
  }, [])

  return (
    <nav
      ref={navBarRef}
      className='dark:bg-darkSecondary flex flex-col medium:flex-row justify-between fixed top-0 right-0 w-full z-10 items-center bg-white shadow-inner border-b dark:border-b-4 dark:pb-1 dark:border-borderDark'
    >
      <div className=' dark:bg-darkSecondary flex_row justify-between bg-white shadow-inner  dark:pb-1 dark:border-borderDark px-2 xtra_small:px-4 py-2 '>
        <button onClick={refresh}>
          <h1 className='text-2xl font-semibold xtra_small:text-[28px] small:font-bold small:text-[32px] dark:text-white text-blue-600'>
            facebook
          </h1>
        </button>
        <div
          className='hidden small:flex relative w-11 h-11 medium:w-fit medium: medium:h-fit justify-center items-center dark:bg-darkComplementry rounded-full'
          onClick={() => {
            console.log('hello i am here')
          }}
        >
          <Input
            type={`text`}
            name={`search`}
            placeholder={`Search Facebook`}
            handleChange={(e) => {
              e.stopPropagation()
              setSearchValue(e.target.value)
            }}
            value={searchValue}
          />
          <MdOutlineSearch className=' medium:absolute relative medium:top-2.5 medium:left-3 top-0 left-0 text-gray-500 text-2xl cursor-pointer dark:text-text_heading_dark_gray' />
        </div>

        <div className='flex flex-row gap-2 small:gap-3 items-center'>
          {[
            {
              icon: <FaFacebookMessenger />,
              alarts: '3',
              tip: 'messenger',
              ref: messengerRef,
            },
            {
              icon: <MdNotifications />,
              alarts: '1',
              tip: 'notification',
              ref: notificationRef,
            },
          ].map(({ icon, alarts, tip, ref }, i) => (
            <ul
              ref={ref}
              data-tip
              data-for={tip}
              onClick={(e) =>
                iconHandler({
                  e,
                  ref,
                  setMessageState,
                  setNotificationState,
                  setProfileState,
                  messageState,
                  notificationState,
                })
              }
              className={`relative hidden small:block p-2.5 dark:bg-darkComplementry  ${tip} rounded-full bg-hover  hover:bg-primaryWhite
            cursor-pointer`}
              key={i + alarts}
            >
              <li className='text-2xl font-semibold dark:text-white'>{icon}</li>
              <div className='dark:border-0 flex items-center justify-center absolute w-[20px] h-[20px] rounded-full bg-red-600 top-0 right-0 border-2 border-white z-10'>
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
          <button
            onClick={() => {}}
            className={`relative small:hidden p-0.5 xtra_small:p-1.5 dark:bg-darkComplementry rounded-full bg-hover  hover:bg-primaryWhite
            cursor-pointer`}
          >
            <MdOutlineSearch className='text-xl xtra_small:text-2xl font-semibold dark:text-white' />
          </button>
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
            <img
              src={profile}
              alt='profile'
              className='object-contain w-5 xtra_small:w-8 h-5 xtra_small:h-8 small:w-11 small:h-11'
            />
            <div className='hidden small:flex absolute w-[15px] h-[15px] rounded-full bg-red-600 top-0 right-0 border-2 border-white z-10' />
            <div className='hidden small:flex absolute bottom-[-3px] dark:ring-slate-800 dark:bg-darkComplementry right-0 rounded-full bg-hover border-white  ring-2 ring-white w-4 h-4  justify-center items-center'>
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
            onClick={() => {}}
            className={`relative small:hidden p-0.5 xtra_small:p-1.5 dark:bg-darkComplementry rounded-full bg-hover  tablet:hover:bg-primaryWhite
            cursor-pointer`}
          >
            <MdMenu className='text-xl xtra_small:text-2xl font-semibold dark:text-white' />
          </button>
        </div>
      </div>

      <div className='flex_row justify-between px-4 py-2 small:hidden '>
        {mNavLink.map(({ icon, alarts }, i) => (
          <div className='relative'>
            <p className='text-xl xtra_small:text-2xl dark_white'>{icon}</p>
            <div className='dark:border-0 flex items-center justify-center absolute w-[10px] h-[10px] rounded-full bg-red-600 top-0 right-0 border-2 border-white z-10' />
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar

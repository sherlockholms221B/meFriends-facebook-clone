import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdNotifications } from 'react-icons/md'
import { MdOutlineExpandMore, MdOutlineSearch } from 'react-icons/md'
import { FaFacebookMessenger } from 'react-icons/fa'

import { profile } from '../Assets/exports'
import { Input, ToolTip } from './index'
import { iconHandler, refresh } from '../functions/stateHandler'
import { useGlobalContext } from '../Context/UseContext'

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('')
  const messengerRef = useRef(null)
  const notificationRef = useRef(null)
  const {
    setMessageState,
    setNotificationState,
    messageState,
    notificationState,
    profileState,
    setProfileState,
  } = useGlobalContext()

  return (
    <nav className='dark:bg-darkSecondary flex flex-row justify-between fixed top-0 right-0 w-full  z-10 items-center bg-white shadow-inner border-b dark:border-b-4 dark:pb-1 dark:border-borderDark px-4 py-2 '>
      <Link to={`/`} onClick={refresh}>
        <h1 className='font-bold text-[32px] dark:text-white text-blue-600'>
          facebook
        </h1>
      </Link>
      <div
        className='relative w-11 h-11 lg:w-fit lg:h-fit flex justify-center items-center dark:bg-darkComplementry rounded-full'
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
        <MdOutlineSearch className=' lg:absolute relative lg:top-2 lg:left-3 top-0 left-0 text-gray-500 text-2xl cursor-pointer dark:text-text_heading_dark_gray' />
      </div>

      <div className='flex flex-row gap-3 items-center'>
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
            className={`relative p-2.5 dark:bg-darkComplementry  ${tip} rounded-full bg-hover  hover:bg-primaryWhite
            cursor-pointer`}
            key={i + alarts}
          >
            <li className='text-2xl font-semibold dark:text-white'> {icon} </li>
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
          data-tip
          data-for='profile'
          className='relative dark:ring-2 dark:ring-slate-800  rounded-full cursor-pointer'
          onClick={() => {
            setProfileState(!profileState)
            setMessageState(false)
            setNotificationState(false)
          }}
        >
          <img src={profile} alt='profile' className='object-cover w-11 h-11' />
          <div className='absolute w-[15px] h-[15px] rounded-full bg-red-600 top-0 right-0 border-2 border-white z-10' />
          <div className='absolute bottom-[-3px] dark:ring-slate-800 dark:bg-darkComplementry right-0 rounded-full bg-hover border-white  ring-2 ring-white w-4 h-4 flex justify-center items-center'>
            <MdOutlineExpandMore className='text-lg dark:text-white text-black font-bold' />
          </div>
          <ToolTip
            title={`account`}
            effect={`float`}
            type={`dark`}
            place={`left`}
            id={`profile`}
          />
        </button>
      </div>
    </nav>
  )
}

export default Navbar

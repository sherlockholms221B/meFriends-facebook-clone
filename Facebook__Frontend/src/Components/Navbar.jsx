import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdNotifications } from 'react-icons/md'
import { MdOutlineExpandMore, MdOutlineSearch } from 'react-icons/md'
import { FaFacebookMessenger } from 'react-icons/fa'

import { profile } from '../Assets/exports'
import { Input, ToolTip } from './index'
import { iconHandler, refresh } from '../utils/Functions'
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
    <nav className='flex flex-row justify-between fixed top-0 right-0 w-full  z-10 items-center bg-white shadow-xl px-4 py-1 '>
      <Link to={`/`} onClick={refresh}>
        <h1 className='font-bold text-[29px] text-blue-600'> facebook </h1>
      </Link>
      <div className='relative  rounded-full'>
        <Input
          type={`text`}
          name={`search`}
          placeholder={`Search facebook`}
          handleChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <MdOutlineSearch className='absolute md:top-2 md:left-3 top-0 left-0 text-gray-400 text-2xl cursor-pointer ' />
      </div>

      <div className='flex flex-row gap-2 items-center'>
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
          <div
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
            className={`relative p-[11px] ${tip} rounded-full bg-[#E3E3E3]  hover:bg-[#D8D5D5] cursor-pointer`}
            key={i + alarts}
          >
            <i className='text-lg font-semibold '> {icon} </i>
            <div className='flex items-center justify-center absolute w-[20px] h-[20px] rounded-full bg-red-600 top-0 right-0 border-2 border-white z-10'>
              <p className='text-white text-[12px] font-bold'>{alarts}</p>
            </div>
            <ToolTip
              title={tip}
              id={tip}
              effect={`float`}
              type={`dark`}
              place={`bottom`}
            />
          </div>
        ))}
        <button
          data-tip
          data-for='profile'
          className='relative border-2 border-white rounded-full cursor-pointer'
          onClick={() => {
            setProfileState(!profileState)
            setMessageState(false)
            setNotificationState(false)
          }}
        >
          <img src={profile} alt='profile' className='object-cover w-9 h-9' />
          <div className='absolute w-[15px] h-[15px] rounded-full bg-red-600 top-0 right-0 border-2 border-white z-10' />
          <div className='absolute bottom-[-3px] right-0 rounded-full bg-[#E3E3E3]'>
            <MdOutlineExpandMore className='text-lg ' />
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

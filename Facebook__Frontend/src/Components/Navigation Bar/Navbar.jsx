import React, { useState, useRef, useLayoutEffect } from 'react'
import { MdOutlineSearch } from 'react-icons/md'

import { Input, THRDot } from '../index'
import { refresh } from '../../functions/SH'
import { useGlobalContext } from '../../Context/UseContext'
import { mNavLink } from '../../utils/links'

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('')

  const navBarRef = useRef(null)
  const { dynamicLocation } = useGlobalContext()
  const pathname = window.location.pathname
  useLayoutEffect(() => {
    const element = navBarRef.current.getBoundingClientRect()
    const elementHeight = element.height
    dynamicLocation({ height: elementHeight })
  }, [pathname])

  return (
    <nav
      ref={navBarRef}
      className='dark:bg-darkSecondary flex flex-col medium:flex-row justify-between fixed top-0 right-0 w-full z-10 items-center bg-white shadow-inner border-b dark:border-b-4 dark:pb-1 dark:border-borderDark'
    >
      <div className=' dark:bg-darkSecondary flex_row justify-between bg-white shadow-inner  dark:pb-1 dark:border-borderDark px-2 xtra_small:px-4 py-2 '>
        <button onClick={refresh}>
          <h1 className='text-2xl font-semibold xtra_small:text-[28px] small:font-bold small:text-[32px] dark:text-white deep_blue'>
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
          <MdOutlineSearch className=' medium:absolute relative medium:top-2.5 medium:left-3 top-0 left-0 text-gray-500 text-2xl cursor-pointer dark:text-heading_dark_gray' />
        </div>

        <THRDot />
      </div>

      <div className='flex_row justify-between px-4 py-2 small:hidden '>
        {mNavLink.map(({ icon, alarts }, i) => (
          <div className='relative' key={i}>
            <p className='text-xl xtra_small:text-2xl dark_white'>{icon}</p>
            <div className='dark:border-0 flex items-center justify-center absolute w-[10px] h-[10px] rounded-full bg-red-600 top-0 right-0 border-2 border-white z-10' />
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar

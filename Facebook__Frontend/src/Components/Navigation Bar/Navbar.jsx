import React, { useState, useRef, useLayoutEffect } from 'react'
import { MdOutlineSearch } from 'react-icons/md'

import { Input, THRDot } from '../index'
import { refresh } from '../../Functions/SH'
import { useGlobalContext } from '../../Context/UseContext'
import { mNavLink } from '../../utils/links'

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('')
  const [mbar, setMbar] = useState('home')

  const navBarRef = useRef(null)
  const { dynamicLocation } = useGlobalContext()

  useLayoutEffect(() => {
    const element = navBarRef.current.getBoundingClientRect()
    const elementHeight = element.height
    dynamicLocation({ height: elementHeight })
  }, [])

  return (
    <nav
      ref={navBarRef}
      className='dark:bg-darkSecondary flex flex-col medium:flex-row justify-between fixed top-0 right-0 w-full z-10 items-center bg-white shadow-inner border-b dark:border-b-2 dark:border-borderDark'
    >
      <div className=' dark:bg-darkSecondary flex_row justify-between bg-white shadow-inner  dark:pb-1 dark:border-borderDark px-2 xtra_small:px-4 py-1.5 '>
        <button onClick={refresh}>
          <h1 className='text-2xl font-semibold xtra_small:text-[28px] small:font-bold small:text-3xl dark:text-white deep_blue'>
            MeFriend
          </h1>
        </button>
        <div className='hidden small:flex relative w-11 h-11 medium:w-fit medium: medium:h-fit justify-center items-center dark:bg-darkComplementry rounded-full ml-10'>
          <Input
            type={`text`}
            name={`search`}
            placeholder={`Search Mefriend`}
            handleChange={(e) => {
              e.stopPropagation()
              setSearchValue(e.target.value)
            }}
            value={searchValue}
          />
          <MdOutlineSearch className=' medium:absolute relative medium:top-2.5 medium:left-3 top-0 left-0 text-gray-500 text-2xl cursor-pointer dark:text-heading_dark_gray md_lg:-left-6' />
        </div>

        <THRDot />
      </div>

      <section className='flex_row justify-between px-4 py-0.5 mt-1 small:hidden'>
        {mNavLink.map(({ icon, outlined, alarts, tip }, i) => (
          <section className=''>
            {mbar === tip ? (
              <button className='relative transition-all' key={i} type='button'>
                <p className='text-xl xtra_small:text-2xl text-blue-500'>
                  {icon}
                </p>
                {alarts >= 0 && (
                  <article
                    className='dark:border-0 flex items-center justify-center
                  absolute w-5 h-4 rounded-full bg-red-600 -top-1
                  -right-1 border-2 border-white z-10'
                  >
                    <h3 className='text-xs text-white'>{alarts}</h3>
                  </article>
                )}
              </button>
            ) : (
              <button
                type='button'
                className='relative transition-all'
                key={i}
                onClick={() => setMbar(tip)}
              >
                <p className='text-xl xtra_small:text-2xl dark_white'>
                  {outlined}
                </p>
                {alarts >= 0 && (
                  <article
                    className='dark:border-0 flex items-center justify-center
                  absolute w-5 h-4 rounded-full bg-red-600 -top-1
                  -right-1 border-2 border-white z-10'
                  >
                    <h3 className='text-xs text-white'>{alarts}</h3>
                  </article>
                )}
              </button>
            )}
          </section>
        ))}
      </section>
    </nav>
  )
}

export default Navbar

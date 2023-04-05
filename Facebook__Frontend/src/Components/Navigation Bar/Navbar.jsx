import React, { useState, useRef, useLayoutEffect } from 'react'

//import component from components
import { Input, THRDot } from '../index'
import MbarLink from './components/mobile'

//import functions
import { refresh } from '../../Functions/SH'

//import context
import { useGlobalContext } from '../../Context/UseContext'

//import custom links
import { mNavLink } from '../../utils/links'

//import custom react icons
import { Icon } from '../../utils/Icon'

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('')
  const [isMbar, setIsMbar] = useState('home')
  const navBarRef = useRef(null)
  const { dynamicLocation, mobileMenu, setMobileMenu } = useGlobalContext()

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
      <section className=' dark:bg-darkSecondary flex_row justify-between bg-white shadow-inner  dark:pb-1 dark:border-borderDark px-2 xtra_small:px-4 py-1.5 '>
        <button onClick={refresh}>
          <h1 className='text-2xl font-semibold xtra_small:text-[28px] small:font-bold small:text-3xl dark:text-white deep_blue'>
            MeFriend
          </h1>
        </button>
        <section className='hidden small:flex relative w-11 h-11 medium:w-fit medium: medium:h-fit justify-center items-center dark:bg-darkComplementry rounded-full ml-10'>
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
          <Icon.MdOutlineSearch className=' medium:absolute relative medium:top-2.5 medium:left-3 top-0 left-0 text-gray-500 text-2xl cursor-pointer dark:text-heading_dark_gray md_lg:-left-6' />
        </section>

        <THRDot />
      </section>

      <section className='flex_row justify-between px-4 py-0.5 mt-1 small:hidden'>
        {mNavLink.map(({ icon, outlined, alarts, tip }, index) => (
          <MbarLink
            icon={icon}
            outlined={outlined}
            alarts={alarts}
            tip={tip}
            isMbar={isMbar}
            setIsMbar={setIsMbar}
            index={index}
            key={index}
          />
        ))}
      </section>
    </nav>
  )
}

export default Navbar

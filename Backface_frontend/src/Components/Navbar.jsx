import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdLink } from 'react-icons/md'
import {
  MdOutlineExpandMore,
  MdOutlineSearch,
  MdNotificationAdd,
} from 'react-icons/md'
import { RiChatSmile3Fill } from 'react-icons/ri'
import { profile } from '../Assets/exports'
import { Input } from './exports'
import { useGlobalContext } from '../Context/UseContext'

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('')
  const navbarRef = useRef(null)
  const { navLocation } = useGlobalContext()

  useEffect(() => {
    const navhieght = navbarRef.current.getBoundingClientRect().hieght
    navLocation(navhieght)
  }, [navLocation])

  return (
    <div
      className='flex flex-row justify-between fixed top-0 right-0 w-full  z-10 items-center bg-white shadow-xl px-4 py-2 '
      ref={navbarRef}
    >
      <Link to={`/`}>
        <div className=''>
          <h1> Backface logo coming </h1>
        </div>
      </Link>
      <div className='relative  rounded-full'>
        <Input
          type={`text`}
          name={`search`}
          placeholder={`Search backface`}
          handleChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <MdOutlineSearch className='absolute top-2 left-3 text-gray-700 text-2xl cursor-pointer ' />
      </div>

      <div className='flex flex-row gap-2 items-center'>
        <div className='p-3 rounded-full bg-[#E3E3E3]  hover:bg-[#D8D5D5] cursor-pointer '>
          <RiChatSmile3Fill className='text-lg font-semibold' />
        </div>
        <div className='p-3 rounded-full bg-[#E3E3E3] hover:bg-[#D8D5D5] cursor-pointer '>
          <MdNotificationAdd className='text-lg font-bold text-bold ' />
        </div>

        <Link to={`/backface/api/profile`}>
          <div className='relative border-2 border-white rounded-full cursor-pointer'>
            <img
              src={profile}
              alt='profile'
              className='object-cover w-10 h-10'
            />
            <div className='absolute w-[15px] h-[15px] rounded-full bg-red-600 top-0 right-0 border-2 border-white z-10'></div>
            <div className='absolute bottom-[-3px] right-0 rounded-full bg-[#E3E3E3]'>
              <MdOutlineExpandMore className='text-lg ' />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar

import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdLink } from 'react-icons/md'
import { MdOutlineExpandMore, MdOutlineSearch } from 'react-icons/md'

import { profile } from '../Assets/exports'
import { Input, ToolTip } from './index'
import { refresh } from '../utils/Functions'
import { navLinks } from '../utils/links'

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('')

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
        <MdOutlineSearch className='absolute top-2 left-3 text-gray-400 text-2xl cursor-pointer ' />
      </div>

      <div className='flex flex-row gap-2 items-center'>
        {navLinks.map(({ icon, alarts, tip }, i) => (
          <div
            data-tip
            data-for={tip}
            className='relative p-[11px] rounded-full bg-[#E3E3E3]  hover:bg-[#D8D5D5] cursor-pointer '
            key={i + alarts}
          >
            <p className='text-lg font-semibold'> {icon} </p>
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
        <Link
          data-tip
          data-for='profile'
          to={`/backface/api/profile`}
          className='relative border-2 border-white rounded-full cursor-pointer'
        >
          <img src={profile} alt='profile' className='object-cover w-9 h-9' />
          <div className='absolute w-[15px] h-[15px] rounded-full bg-red-600 top-0 right-0 border-2 border-white z-10'></div>
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
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

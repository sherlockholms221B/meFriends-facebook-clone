import React from 'react'
import { RiShareForwardLine } from 'react-icons/ri'

const Share = () => {
  return (
    <button className='flex flex-row flex-nowrap justify-center  items-center sm:dark:hover:bg-dark300 sm:hover:bg-light500 bg-light500 dark:bg-dark300 sm:dark:bg-inherit sm:rounded-[3px] rounded-full px-6 xs:px-8 py-2 cursor-pointer '>
      <RiShareForwardLine className='text-xl font-bold text-gray-500 mr-1  dark:text-thlight500' />
      <p className='hidden sm:block text-sm xs:text-md text-gray-500 font-semibold dark:text-thlight500'>
        Share
      </p>
    </button>
  )
}

export default Share

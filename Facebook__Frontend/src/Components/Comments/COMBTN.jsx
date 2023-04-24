import React from 'react'
import { GoComment } from 'react-icons/go'

const COMBTN = ({ setIsComment, isComment }) => {
  return (
    <button
      className='flex flex-row flex-nowrap justify-center  items-center sm:dark:hover:bg-dark300 sm:hover:bg-light500 bg-light500 dark:bg-dark300 sm:dark:bg-inherit sm:rounded-[3px] rounded-full px-6 xs:px-8 py-2 cursor-pointer '
      onClick={() => setIsComment(!isComment)}
    >
      <GoComment className='text-xl font-bold text-gray-500 mr-1  dark:text-thlight500' />
      <p className='hidden sm:block text-sm xs:text-md text-gray-500 font-semibold dark:text-thlight500'>
        Comment
      </p>
    </button>
  )
}

export default COMBTN

import React from 'react'
import { MdArrowBack } from 'react-icons/md'

import { previous } from '../../functions/SH'

const Head = (prop) => {
  const { title, setFirstState, setSecondState, setThirdState } = prop

  return (
    <div className='relative flex flex-row py-4 items-center justify-center border-b border-gray-300 dark:border-borderDark'>
      <h3 className='text-xl font-bold text-gray-900  dark:text-white'>
        {title}
      </h3>
      <p
        className='absolute  dark:shadow-black dark:shadow-sm dark:bg-darkComplementry top-2 left-2 rounded-full hover:bg-secondaryWhite bg-gray-300 p-2 cursor-pointer'
        onClick={() => {
          previous(setFirstState, setSecondState, setThirdState)
        }}
      >
        <MdArrowBack className='text-2xl  dark:text-white' />
      </p>
    </div>
  )
}

export default Head

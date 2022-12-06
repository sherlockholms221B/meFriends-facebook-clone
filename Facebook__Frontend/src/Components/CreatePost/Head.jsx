import React from 'react'
import { MdArrowBack } from 'react-icons/md'

import { previous } from '../../utils/Functions'

const Head = (prop) => {
  const { title, setFirstState, setSecondState, setThirdState } = prop

  return (
    <div className='relative flex flex-row py-4 items-center justify-center border-b border-gray-300'>
      <h3 className='text-xl font-bold text-gray-900'> {title} </h3>
      <p
        className='absolute top-2 left-2 rounded-full hover:bg-gray-400 bg-gray-300 p-2 cursor-pointer'
        onClick={() => {
          previous(setFirstState, setSecondState, setThirdState)
        }}
      >
        <MdArrowBack className='text-2xl ' />
      </p>
    </div>
  )
}

export default Head

import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'

const Like = () => {
  return (
    <div className='flex flex-row flex-nowrap justify-center  items-center hover:bg-[#E3E3E3] rounded-[3px] px-8 py-2 cursor-pointer '>
      <AiOutlineLike className='text-xl font-bold text-gray-500 mr-1' />
      <p className='text-md text-gray-500 font-semibold'>Like</p>
    </div>
  )
}

export default Like

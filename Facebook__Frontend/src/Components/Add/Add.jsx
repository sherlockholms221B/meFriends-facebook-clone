import React, { useState } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'

import { PostOptions } from '../index'

const Add = ({ add, setAdd, title, description, img, index }) => {
  const [addOptions, setAddOptions] = useState(false)
  return (
    <>
      <div className='relative flex flex-row justify-strech gap-4 p-2 w-full rounded-md hover:bg-hover cursor-pointer items-center'>
        <img
          onClick={() => setAdd(!add)}
          src={img}
          alt='add'
          className={`${
            index === 1 ? 'h-24 w-[110px]' : 'h-24 w-[110px]'
          } rounded-md object-fit`}
        />
        <div className=''>
          <h3 className='text-md font-semibold text-gray-900 uppercase'>
            {title}
          </h3>
          <p className=' text-[15px] text-gray-500'>{description} </p>
        </div>
        {add && (
          <button
            type='button'
            className={`absolute z-10 rounded-full bg-white p-3 top-3 right-3`}
            onClick={() => setAddOptions(!addOptions)}
          >
            <HiDotsHorizontal className='text-md' />
          </button>
        )}
        {addOptions && <PostOptions addOptions={addOptions} />}
      </div>
    </>
  )
}

export default Add

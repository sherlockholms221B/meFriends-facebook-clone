import React, { useState } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'

const Add = ({ add, setAdd, title, description, img, index }) => {
  const [addOptions, setAddOptions] = useState(false)
  return (
    <div className='relative flex flex-row justify-strech gap-4 p-2 w-full rounded-md hover:bg-light300 dark:hover:bg-dark300 cursor-pointer items-center'>
      <img
        onClick={() => setAdd(!add)}
        src={img}
        alt='add'
        className={`${
          index === 1
            ? 'lg:h-24 h-20 lg:w-[110px] w-[94px]'
            : 'lg:h-24 h-20 lg:w-[110px] w-[94px]'
        } rounded-md object-fit`}
      />
      <div className=''>
        <h3 className='text-sm lg:text-md  dark:text-thdark500 font-semibold text-gray-900 uppercase'>
          {title}
        </h3>
        <p className=' lg:text-[15px] text-xs text-gray-500 dark:text-thlight500'>
          {description}
        </p>
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
    </div>
  )
}

export default Add

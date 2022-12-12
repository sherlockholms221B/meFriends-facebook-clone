import React from 'react'
import { Link } from 'react-router-dom'
import { RiAddLine } from 'react-icons/ri'

import { Story } from '../index.js'
import { storiesbox } from '../../utils/constants'
import { person_fourteen } from '../../Assets/exports'

const Stories = () => {
  return (
    <>
      <div className='flex gap-2.5 flex-nowrap overflow-x-scroll mb-4 p-4 scroll_styled'>
        <div className='inline-block w-fit h-fit ring-2 dark:ring-slate-700 ring-white rounded-lg shadow-md shadow-slate-700'>
          <div className='dark:bg-darkSecondary flex flex-col w-32 h-52 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out relative text-center'>
            <img
              src={person_fourteen}
              alt='str'
              className='w-full h-[70%] rounded-t-lg object-fit'
            />
            <h1 className='text-gray-600 text-md font-semibold rounded-b-lg pt-4 px-1'>
              create talling
            </h1>
            <div className='absolute top-0 bottom-0 right-0 left-0 cursor-pointer z-10 hover:backdrop-blur-sm rounded-lg' />
            <Link to={`/backface/api/profile`}>
              <div className=' border-4 border-white-700 rounded-full cursor-pointer absolute top-[55%] right-[30%] bg-blue-700 p-1 z-10'>
                <RiAddLine className='text-white text-2xl font-bold' />
              </div>
            </Link>
          </div>
        </div>
        {storiesbox.map((tallings, i) => (
          <Story key={i} tallings={tallings} />
        ))}
      </div>
    </>
  )
}

export default Stories

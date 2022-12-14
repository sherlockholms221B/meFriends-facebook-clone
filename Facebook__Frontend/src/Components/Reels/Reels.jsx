import React from 'react'
import { Link } from 'react-router-dom'

import { storiesbox } from '../../utils/constants'

const Reels = () => {
  return (
    <>
      {storiesbox.map(
        ({ creator, profile: [{ profileImage }], talling }, i) => (
          <div
            key={i}
            className='inline-block w-fit h-fit ring-2 dark:ring-slate-700 ring-white shadow-md shadow-slate-700 rounded-lg '
          >
            <div className='w-32 h-52  overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out relative text-center'>
              <img
                src={talling}
                alt='str'
                className='w-full h-full object-fit '
              />
              <div className='absolute top-0 bottom-0 right-0 left-0 cursor-pointer z-10 ' />
              <Link
                to={`/backface/api/profile`}
                className=' border-4 border-blue-700 rounded-full cursor-pointer absolute top-4 left-4'
              >
                <img
                  src={profileImage}
                  alt='profile'
                  className='object-fit w-8 h-8 rounded-full '
                />
              </Link>
              <h1 className='absolute bottom-2 left-1 text-white text-md font-medium capitalize'>
                {creator}
              </h1>
            </div>
          </div>
        )
      )}
    </>
  )
}

export default Reels

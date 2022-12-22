import React from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../../Assets/exports'
import { storiesbox } from '../../utils/constants'

const Rooms = () => {
  return (
    <>
      <div className='inline-block w-fit h-fit ring-2 ml-1 mr-1 dark:ring-slate-700 ring-white shadow-md shadow-slate-700 rounded-lg '>
        <div className='w-52 h-52 flex flex-col justify-around items-center overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out relative text-center'>
          <img
            src={profile}
            alt='str'
            className='w-16 h-16 rounded-full object-fit '
          />
          <h1 className='text-white text-md font-medium capitalize'>
            Dons room
          </h1>
          <button className=' dark:ring-slate-700 blue_text text-md font-medium capitalize ring-2 py-2 rounded-md w-11/12  '>
            create
          </button>
        </div>
      </div>
      {storiesbox.map(
        ({ creator, profile: [{ profileImage }], talling }, i) => (
          <div
            key={i}
            className='inline-block w-fit h-fit ring-2 ml-1 mr-1 dark:ring-slate-700 ring-white shadow-md shadow-slate-700 rounded-lg '
          >
            <div className='w-52 h-52 flex flex-col justify-around items-center overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out relative text-center'>
              <img
                src={talling}
                alt='str'
                className='w-16 h-16 rounded-full object-fit '
              />
              <h1 className='text-white text-md font-medium capitalize'>
                {creator}
              </h1>
              <button className=' dark:ring-slate-700 blue_text text-md font-medium capitalize ring-2 py-2 rounded-md w-11/12  '>
                say hi
              </button>
            </div>
          </div>
        )
      )}
    </>
  )
}

export default Rooms

import React from 'react'

//import react-router-dom module
import { Link } from 'react-router-dom'

// import framer-motion module
// import { motion } from 'framer-motion'

//declear react function and destructure passed in props
const Box = ({
  tallings: {
    creator,
    profile: [{ profileImage }],
    talling,
  },
  title,
}) => {
  console.log(title)
  return (
    <Link
      to={`/story/details/photo?fbid=${`544657569769743763856776056734384697367458468744835`}`}
      className={
        title === 'Rooms'
          ? ''
          : ' w-full h-full ring-2 dark:ring-slate-700 ring-white shadow-md shadow-slate-700 rounded-lg '
      }
    >
      {title === 'Rooms' ? (
        <div className='inline-block w-fit h-fit ring-2 ml-1 mr-1 dark:ring-slate-700 ring-white shadow-md shadow-slate-700 rounded-lg '>
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
      ) : (
        <div className='group max-w-28 h-full overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out relative text-center'>
          <img
            src={talling}
            alt='str'
            className='w-full h-full object-cover transition-all group-hover:scale-105 group-hover:brightness-75'
          />
          <figure className=' border-4 border-blue-700 rounded-full cursor-pointer absolute top-4 left-4 group-hover:z-20'>
            <img
              src={profileImage}
              alt='profile'
              className='object-cover w-8 h-8 rounded-full '
            />
          </figure>
          <h1 className='absolute bottom-2 left-1 text-white text-xs mdxs:text-sm mdsm:text-base font-medium capitalize'>
            {creator}
          </h1>
        </div>
      )}
    </Link>
  )
}

export default Box

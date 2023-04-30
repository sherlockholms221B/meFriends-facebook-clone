import React from 'react'

//import react-router-dom module
import { Link } from 'react-router-dom'
import Redirect from '../../SoftRedirect'

// import framer-motion module
// import { motion } from 'framer-motion'

//declear react function and destructure passed in props
const SoftSwiperMapData = ({
  tallings: {
    creator,
    profile: [{ profileImage }],
    talling,
  },
  title,
}) => {
  return (
    <Redirect
      link={`/story/details/photo?fbid=${`544657569769743763856776056734384697367458468744835`}`}
      customstyles=' w-28 h-48 rounded-md mdxs:rounded-lg'
    >
      <section className='group w-full h-full rounded-md mdxs:rounded-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out relative text-center'>
        <img
          src={talling}
          alt='str'
          className='w-full h-full object-cover transition-all duration-200 rounded-lg group-hover:scale-[1.016] group-hover:brightness-90 shadow-xl z-30 border dark:border dark:border-bd500'
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
      </section>
    </Redirect>
  )
}

export default SoftSwiperMapData

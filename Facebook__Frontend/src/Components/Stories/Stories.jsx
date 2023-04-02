import React from 'react'
import { Link } from 'react-router-dom'
import { RiAddLine } from 'react-icons/ri'

import { Story } from '../index.js'
import { storiesbox } from '../../utils/constants'
import useAuthStore from '../../Store/AuthStore.js'
import { urlFor } from '../../utils/client.js'

const Stories = () => {
  const { userProfile } = useAuthStore()
  console.table(userProfile)
  return (
    <>
      <section className='inline-block w-fit h-fit ring-2 dark:ring-slate-700 ring-white rounded-lg shadow-md shadow-slate-700'>
        <figure className='group dark:bg-darkSecondary flex flex-col w-28 h-52 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out relative text-center'>
          <img
            src={urlFor(userProfile?.profileImage.asset).url()}
            alt='str'
            className='w-full h-[70%] rounded-t-lg object-cover group-hover:brightness-75'
          />
          <figcaption>
            <h1 className='text-gray-600 text-md font-semibold rounded-b-lg pt-4 px-1'>
              Create Story
            </h1>
          </figcaption>
          <Link to={`/backface/api/profile`}>
            <article className='animate-pulse ring-4 ring-white dark:ring-[#242526] rounded-full cursor-pointer absolute top-[55%] right-[35%] bg-blue-700 p-1 z-10'>
              <RiAddLine className='text-white text-2xl font-bold' />
            </article>
          </Link>
        </figure>
      </section>
      {storiesbox.map((tallings, i) => (
        <Story key={i} tallings={tallings} />
      ))}
    </>
  )
}

export default Stories

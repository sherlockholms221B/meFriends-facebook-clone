import * as React from 'react'

import { storiesbox } from '../../utils/constants'

//import components
import { SoftSwipeLayout } from '../../examples/index.js'
import useAuthStore from '../../Store/AuthStore.js'
import { urlFor } from '../../utils/client.js'
import Redirect from '../../examples/SoftRedirect'
import { RiAddLine } from 'react-icons/ri'

const Stories = () => {
  const { userProfile } = useAuthStore()
  return (
    <React.Fragment>
      <SoftSwipeLayout data={storiesbox} title='story'>
        <section className='w-28 h-48 rounded-md mdxs:rounded-lg shadow-lg z-10 border dark:border-bd500'>
          <figure className='group dark:bg-dark400 flex flex-col w-full h-full rounded-md mdxs:rounded-lg  bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out relative text-center'>
            <img
              src={urlFor(userProfile?.profileImage.asset).url()}
              alt='str'
              className='w-full h-[70%] object-cover group-hover:brightness-75 rounded-t-lg'
            />
            <figcaption className='h-[30%]'>
              <h1 className='text-gray-600 text-xs mdxs:text-sm mdsm:text-base font-semibold rounded-b-lg pt-4 px-1'>
                Create story
              </h1>
            </figcaption>
            <Redirect link='/backface/api/profile' customstyles=''>
              <article className='animate-pulse ring-4 ring-white dark:ring-[#242526] rounded-full cursor-pointer absolute top-[55%] right-[35%] bg-blue-700 p-1 z-10'>
                <RiAddLine className='text-white text-2xl font-bold' />
              </article>
            </Redirect>
          </figure>
        </section>
      </SoftSwipeLayout>
    </React.Fragment>
  )
}

export default Stories

import React from 'react'

//import moment
import moment from 'moment'

//import component
import Redirect from '../../examples/SoftRedirect'
import Profile from '../Profile'

const Comment = ({
  _createdAt,
  userName,
  _id,
  profileImage,
  isComment,
  setIsComment,
  comment,
}) => {
  return (
      isComment && (
        <section className='flex flex-row flex-nowrap items-start pl-2 justify-start mt-2 mb-1  '>
          <Redirect
            link='/backface/api/profile'
            customstyles='cousor-pointer mr-3 '
          >
            <Profile />
          </Redirect>
          <section className='flex flex-col items-start gap-2 w-full rounded-lg dark:bg-dark300 bg-light500 pt-2 px-2 shadow-lg shadow-zinc-900 z-[2]'>
            <div className='flex flex-col items-start  w-full rounded-lg dark:bg-dark400 bg-light500 py-2 px-2 shadow-md shadow-black z-[4]'>
              <h2 className='capitalize text-md text-black-200 font-medium mb-1 cursor-pointer dark:text-thdark500 tracking-wide'>
                {userName}
              </h2>
              <p className='text-sm text-gray-600 dark:text-thlight500 tracking-normal'>
                {comment}
              </p>
            </div>
            <p className='text-sm text-gray-500 ml-2 mb-1 dark:text-thdark500'>
              {moment(_createdAt).fromNow()}
            </p>
          </section>
        </section>
    )
  )
}

export default Comment

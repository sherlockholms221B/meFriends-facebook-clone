import React from 'react'
import { THRDot } from '../../Components'

const PostDetails = () => {
  return (
    <div className='flex_row w-screen h-screen'>
      <div className='w-full bg-black h-full'>Post Details</div>
      <div className='w-550 dark:bg-darkSecondary h-full'>
        <div className='flex justify-end items-center py-2 pr-2 border-b-2 dark:border-borderDark '>
          <THRDot />
        </div>
      </div>
    </div>
  )
}

export default PostDetails

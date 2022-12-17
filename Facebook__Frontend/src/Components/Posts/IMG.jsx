import React from 'react'

const IMG = ({ post }) => {
  console.log(post.length)

  if (post.length === 1) {
    return (
      <div className='h-full w-[100%] border-b-2 border-t-2 border-gray-300 dark:border-[#3a3b3c]'>
        <img
          src={post[0]}
          alt='post'
          className='h-full w-[100%] object-cover'
        />
      </div>
    )
  }
  if (post.length === 2) {
    return (
      <div className='flex flex-row gap-0.5 h-458 w-[100%] border-b-2 border-t-2 border-gray-300 dark:border-[#3a3b3c]'>
        <div className='h-full w-1/2'>
          <img
            src={post[0]}
            alt='post'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='h-full w-1/2'>
          {' '}
          <img
            src={post[1]}
            alt='post'
            className='h-full w-full object-cover'
          />
        </div>
      </div>
    )
  }
  if (post.length === 3) {
    return (
      <div className='flex flex-row gap-0.5 h-458 w-[100%] border-b-2 border-t-2 border-gray-300 dark:border-[#3a3b3c]'>
        <div className='h-full w-1/2'>
          <img
            src={post[0]}
            alt='post'
            className='h-full w-[100%] object-cover'
          />
        </div>
        <div className='h-full w-1/2'>
          <div className='flex flex-col gap-0.5 h-full w-full border-b-2 border-t-2 border-gray-300 dark:border-[#3a3b3c]'>
            <div className='h-1/2 w-full'>
              <img
                src={post[1]}
                alt='post'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='h-1/2 w-full'>
              <img
                src={post[2]}
                alt='post'
                className='h-full w-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (post.length === 4) {
    return (
      <div className='flex flex-row gap-0.5 h-458 w-[100%] border-b-2 border-t-2 border-gray-300 dark:border-[#3a3b3c]'>
        <div className='h-full w-1/2'>
          <img
            src={post[0]}
            alt='post'
            className='h-full w-[100%] object-cover'
          />
        </div>
        <div className='h-full w-1/2'>
          <div className='flex flex-col gap-0.5 h-full w-full border-b-2 border-t-2 border-gray-300 dark:border-[#3a3b3c]'>
            <div className='h-1/2 w-full'>
              <img
                src={post[1]}
                alt='post'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='h-1/2 w-full'>
              <img
                src={post[2]}
                alt='post'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='h-1/2 w-full'>
              <img
                src={post[3]}
                alt='post'
                className='h-full w-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <div className=''>chicken boririro</div>
}

export default IMG

import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Comments = ({
  isComment,
  setIsComment,
  profileImage,
  comment,
  createdAt,
  creator,
}) => {
  return (
    <>
      <button onClick={() => setIsComment(!isComment)}></button>
      {isComment && (
        <div className='flex flex-row flex-nowrap items-start pl-2 justify-start mt-2 mb-1 '>
          <Link to={`/backface/api/profile`} className='cousor-pointer mr-3 '>
            <img
              src={profileImage}
              alt='profile'
              className='object-cover w-8 h-8 rounded-full'
            />
          </Link>
          <div className='flex flex-col items-start gap-2  w-3/4 rounded-lg bg-[#E3E3E3] pt-2 pl-2 pr-5 shadow-lg'>
            <div className='flex flex-col items-start  w-full rounded-lg bg-[#E3E3E3] py-2 pl-2 pr-5 shadow-lg'>
              <h2 className='capitalize text-md text-black-200 font-medium mb-1 cursor-pointer'>
                {creator}
              </h2>
              <p className='text-sm text-gray-600 '>{comment}</p>
            </div>
            <p className='text-sm text-gray-500 ml-2'>
              {moment(createdAt).fromNow()}
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default Comments

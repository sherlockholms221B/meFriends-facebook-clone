import React from 'react'

//import react-router-dom module
import { Link } from 'react-router-dom'

//import moment
import moment from 'moment'

const Comment = ({ userName, _id, isComment, setIsComment, comment }) => {
  return (
    <React.Fragment>
      {isComment && (
        <div className='flex flex-row flex-nowrap items-start pl-2 justify-start mt-2 mb-1  '>
          <Link to={`/backface/api/profile`} className='cousor-pointer mr-3 '>
            {/* <img
              src={profileImage}
              alt='profile'
              className='object-cover w-8 h-8 rounded-full'
            /> */}
          </Link>
          <div className='flex flex-col items-start gap-2 w-full rounded-lg dark:bg-dark300 bg-light500 pt-2 px-2 shadow-lg shadow-zinc-900 z-[2]'>
            <div className='flex flex-col items-start  w-full rounded-lg dark:bg-dark400 bg-light500 py-2 px-2 shadow-md shadow-black z-[4]'>
              {/* <h2 className='capitalize text-md text-black-200 font-medium mb-1 cursor-pointer dark:text-thdark500 tracking-wide'>
                {creator}
              </h2> */}
              <p className='text-sm text-gray-600 dark:text-thlight500 tracking-normal'>
                {comment}
              </p>
            </div>
            {/* <p className='text-sm text-gray-500 ml-2 mb-1 dark:text-thdark500'>
              {moment(createdAt).fromNow()}
            </p> */}
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default Comment

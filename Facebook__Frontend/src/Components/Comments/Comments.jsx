import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { Input, Comment } from '../index'
import { comments } from '../../utils/constants'
import { profile } from '../../Assets/exports'

const Comments = ({
  isComment,
  setIsComment,
  setViewMore,
  viewMore,
  value,
  setValue,
}) => {
  return (
    <>
      <div className={`flex flex-col ${isComment && 'p-2'} justify-between `}>
        {isComment && (
          <div className='flex flex-row flex-nowrap gap-2 items-center mb-4'>
            <Link to={`/backface/api/profile`}>
              <div className=' rounded-full cursor-pointer'>
                <img
                  src={profile}
                  alt='profile'
                  className='object-cover w-8 h-8 rounded-full'
                />
              </div>
            </Link>
            <Input
              handleChange={(e) => setValue(e.target.value)}
              value={value}
              type={`text`}
              name={`comment`}
              placeholder={`Write a comment`}
            />
          </div>
        )}

        {!viewMore
          ? comments
              .slice(0, 1)
              .map(
                (
                  { creator, profile: [{ profileImage, createdAt }], comment },
                  index
                ) => (
                  <Comment
                    isComment={isComment}
                    setIsComment={setIsComment}
                    createdAt={createdAt}
                    creator={creator}
                    profileImage={profileImage}
                    comment={comment}
                    key={`${creator + index}`}
                  />
                )
              )
          : comments.map(
              (
                { creator, profile: [{ profileImage, createdAt }], comment },
                index
              ) => (
                <Comment
                  isComment={isComment}
                  setIsComment={setIsComment}
                  createdAt={createdAt}
                  creator={creator}
                  profileImage={profileImage}
                  comment={comment}
                  key={`${creator + index}`}
                />
              )
            )}
        {isComment && (
          <>
            {!viewMore && (
              <button
                onClick={() => setViewMore(!viewMore)}
                className='text-sm text-gray-500 dark:text-heading_dark_gray font-medium self-start ml-14 mt-2 animate-pulse'
              >
                see more
              </button>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default Comments

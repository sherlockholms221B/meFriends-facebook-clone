import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import moment from 'moment'

import {
  MdPublic,
  MdOutlinePrivateConnectivity,
  MdVerified,
} from 'react-icons/md'
import { HiDotsHorizontal } from 'react-icons/hi'
import { AiOutlineLike } from 'react-icons/ai'
import { GoComment } from 'react-icons/go'
import { RiShareForwardLine } from 'react-icons/ri'

import { Comments, Input } from '../exports'
import { comments } from '../../utils/constants'
import { profile } from '../../Assets/exports'

const Post = ({ isPrivate, profileImage, createdAt, creator, post }) => {
  const [value, setValue] = useState('')
  const [isComment, setIsComment] = useState(false)
  const [viewMore, setViewMore] = useState(false)

  useEffect(() => {
    setViewMore(false)
  }, [isComment])

  return (
    <>
      <div className='flex flex-col rounded-md bg-white shadow-xl mt-4 '>
        <div className=' relative flex flex-row flex-nowrap justify-between items-center px-3 py-2'>
          <div className='flex gap-2 items-center'>
            <Link to={`/backface/api/profile`}>
              <div className=' border-2 border-white rounded-full cursor-pointer'>
                <img
                  src={profileImage}
                  alt='profile'
                  className='object-cover w-10 h-10 rounded-full'
                />
              </div>
            </Link>
            <div className='flex flex-col'>
              <h2 className='capitalize text-md text-black-200 font-medium mb-1 cursor-pointer'>
                {creator}
              </h2>
              <div className='flex flex-row flex-nowrap items-center gap-2'>
                <p className='text-sm text-gray-500 '>
                  {moment(createdAt).fromNow()}
                </p>
                <span className='text-gray-500 text-md font-medium'>
                  {isPrivate ? <MdPublic /> : <MdOutlinePrivateConnectivity />}
                </span>
              </div>
            </div>
          </div>
          <div className='text-2xl font-semibold text-gray-500 p-2 rounded-full hover:bg-[#E3E3E3] cursor-pointer'>
            <HiDotsHorizontal />
          </div>
        </div>
        <div className='h-full w-[100%] border-b-2 border-t-2 border-gray-300 '>
          <img src={post} alt='post' className='h-full w-[100%] object-cover' />
        </div>
        <div className='flex flex-col '>
          <div className='flex flex-row flex-nowrap justify-between items-center mx-2 p-2 border-b-2 border-gray-300'>
            <div className='flex items-center justify-center'>
              <AiOutlineLike className='mr-1 text-blue-500' />
              <p className='text-sm text-gray-500 '>234</p>
            </div>
            <div className='flex items-center justify-center'>
              <p className='mr-1 text-sm text-gray-500 '>22 comments</p>
              <p className='text-sm text-gray-500 '>7 share</p>
            </div>
          </div>
          <div
            className={`flex flex-row flex-nowrap justify-around px-2 py-1 items-center ${
              isComment ? 'mx-2 border-b-2 border-gray-300 ' : ''
            }`}
          >
            <div className='flex flex-row flex-nowrap justify-center  items-center hover:bg-[#E3E3E3] rounded-[3px] px-8 py-2 cursor-pointer '>
              <AiOutlineLike className='text-xl font-bold text-gray-500 mr-1' />
              <p className='text-md text-gray-500 font-semibold'>Like</p>
            </div>
            <div
              className='flex flex-row justify-center flex-nowrap items-center  hover:bg-[#E3E3E3] rounded-[3px] px-8 py-2 cursor-pointer'
              onClick={() => setIsComment(!isComment)}
            >
              <GoComment className='text-xl font-bold text-gray-500 mr-1' />
              <p className='text-md text-gray-500 font-semibold'>Comment</p>
            </div>
            <div className='flex flex-row justify-center flex-nowrap items-center hover:bg-[#E3E3E3] rounded-[3px] px-8 py-2 cursor-pointer'>
              <RiShareForwardLine className='text-2xl font-bold text-gray-500 mr-1' />
              <p className='text-md text-gray-500 font-semibold'>Share</p>
            </div>
          </div>

          <motion.div
            className={`flex flex-col ${isComment && 'p-2'} justify-between `}
          >
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
                      {
                        creator,
                        profile: [{ profileImage, createdAt }],
                        comment,
                      },
                      index
                    ) => (
                      <Comments
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
                    {
                      creator,
                      profile: [{ profileImage, createdAt }],
                      comment,
                    },
                    index
                  ) => (
                    <Comments
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
                  <motion.button
                    whileHover={{ scale: [1, 1.1] }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    onClick={() => setViewMore(!viewMore)}
                    className='text-sm text-gray-500 font-medium self-start ml-14 mt-2'
                  >
                    see more
                  </motion.button>
                )}
              </>
            )}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Post

import React, { useState, useEffect, useRef } from 'react'
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

import { Comments, PostOptions, Like } from '../index'
import { useGlobalContext } from '../../Context/UseContext'

const Post = ({
  isPrivate,
  profileImage,
  createdAt,
  creator,
  post,
  postText,
}) => {
  const [value, setValue] = useState('')
  const [isComment, setIsComment] = useState(false)
  const [viewMore, setViewMore] = useState(false)
  const [postOption, setPostOption] = useState(false)
  const togleMenu = useRef(null)
  const { dynamicLocation } = useGlobalContext()

  useEffect(() => {
    setViewMore(false)
  }, [isComment])

  const postLocation = () => {
    setPostOption(!postOption)
    const locationDetails = togleMenu.current.getClientRects()
    const top = locationDetails.top
    const center = (locationDetails.left + locationDetails.right) / 2
    dynamicLocation({ top, center })
  }

  return (
    <>
      <section className='flex flex-col rounded-md bg-white shadow-xl mt-4 '>
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
          <div className=''>
            <div
              className='text-2xl font-semibold text-gray-500 p-2 rounded-full hover:bg-[#E3E3E3] '
              ref={togleMenu}
              onClick={postLocation}
            >
              <HiDotsHorizontal />
            </div>
            {postOption && <PostOptions />}
          </div>
        </div>
        <div className='flex items-start-center justify-start px-3 py-2'>
          <h5 className='text-lg text-gray-700'> {postText} </h5>
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
            <Like />
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

          <Comments
            isComment={isComment}
            setIsComment={setIsComment}
            viewMore={viewMore}
            setViewMore={setViewMore}
            value={value}
            setValue={setValue}
          />
        </div>
      </section>
    </>
  )
}

export default Post

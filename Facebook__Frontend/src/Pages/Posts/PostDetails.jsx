import React, { useState } from 'react'
import { MdClose, MdOutlineFacebook } from 'react-icons/md'

import { COMBTN, Comments, Input, Like, THRDot } from '../../Components'
import { BiZoomIn, BiZoomOut } from 'react-icons/bi'
import { BsTagsFill } from 'react-icons/bs'
import { FaExpandAlt } from 'react-icons/fa'
import { person_eight, profile } from '../../Assets/exports'
import { AiOutlineLike } from 'react-icons/ai'
import { Link, Navigate } from 'react-router-dom'

const PostDetails = () => {
  const [isComment, setIsComment] = useState(true)
  const [viewMore, setViewMore] = useState(true)
  const [value, setValue] = useState('')
  const PostBtn1 =
    'flex flex-row flex-nowrap justify-center  items-center mid_small:dark:hover:bg-darkComplementry mid_small:hover:bg-primary bg-primary dark:bg-darkComplementry mid_small:dark:bg-inherit mid_small:rounded-[3px] rounded-full px-6 xtra_small:px-8 py-2 cursor-pointer '
  const PostBtnI =
    'text-xl font-bold text-gray-500 mr-1  dark:text-heading_dark_gray'

  const PostBtnT =
    'hidden mid_small:block text-sm xtra_small:text-md text-gray-500 font-semibold dark:text-heading_dark_gray'
  return (
    <div className='flex_row w-screen h-screen '>
      <div className='w-full bg-black h-full text-white relative flex justify-center'>
        <section className='absolute flex justify-between items-center top-0 right-0 w-full'>
          <div className='flex items-center justify-start w-fit gap-3 ml-4 py-1'>
            <MdClose className='text-3xl dark:text-heading_dark_white' />
            <MdOutlineFacebook className='text-5xl shade_blue' />
          </div>
          <div className='flex items-center justify-end w-fit gap-8 mr-4 py-1'>
            <BiZoomIn className='text-2xl text-heading_dark_white' />
            <BiZoomOut className='text-2xl text-heading_dark_white' />
            <BsTagsFill className='text-2xl text-heading_dark_white' />
            <FaExpandAlt className='text-lg text-heading_dark_white' />
          </div>
        </section>
        <section className='max-w-[60%] h-full'>
          <img src={person_eight} alt='post' className='h-full object-cover' />
        </section>
      </div>
      <div className='w-550 dark:bg-darkSecondary h-full overflow-hidden'>
        <div className='flex justify-end items-center py-2 pr-2 border-b-2 dark:border-borderDark '>
          <THRDot />
        </div>
        <div className='flex flex-row flex-nowrap justify-between items-center mx-2 p-2 border-b-2 border-gray-300 dark:border-[#3a3b3c]'>
          <div className='flex items-center justify-center'>
            <AiOutlineLike className='mr-1 blue_text' />
            <p className='text-sm text-gray-500 '>234</p>
          </div>
          <div className='flex items-center justify-center'>
            <p className='mr-1 text-sm text-gray-500 '>22 comments</p>
          </div>
        </div>
        <div
          className={`flex flex-row flex-nowrap justify-around px-2 py-1 items-center mx-2 border-b-2 border-gray-300 dark:border-borderDark`}
        >
          <Like PostBtn1={PostBtn1} PostBtnI={PostBtnI} PostBtnT={PostBtnT} />
          <COMBTN
            isComment={isComment}
            setIsComment={setIsComment}
            PostBtn1={PostBtn1}
            PostBtnI={PostBtnI}
            PostBtnT={PostBtnT}
          />
        </div>
        <div className='max-h-[73%] overflow-auto home_scroll'>
          <Comments
            postDetail={false}
            isComment={isComment}
            setIsComment={setIsComment}
            viewMore={viewMore}
            setViewMore={setViewMore}
            value={value}
            setValue={setValue}
          />
        </div>
        <div className='flex flex-row flex-nowrap gap-2 items-center px-3 pt-2 pb-3 border-t-2 dark:border-borderDark'>
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
      </div>
    </div>
  )
}

export default PostDetails

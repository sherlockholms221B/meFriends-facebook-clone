import React, { useState } from 'react'
import moment from 'moment'
import { FaRegEdit } from 'react-icons/fa'
import { HiDotsHorizontal } from 'react-icons/hi'
import { ImEnlarge } from 'react-icons/im'
import { MdOutlineSearch, MdVideoCall } from 'react-icons/md'

import Input from '../Input'
import MegWrapper from '../MegWrapper'
import { posts } from '../../utils/constants'
const Messages = () => {
  const [searchChats, setSearchChats] = useState('')
  return (
    <>
      <section className='flex flex-col gap-2 p-3 rounded-t-lg'>
        <div className='flex flex-row w-full justify-between items-center'>
          <h3 className='text-2xl font-bold text-gray-900'>Chats</h3>
          <div className='flex flex-row gap-2 items-center pl-1'>
            {[
              {
                icon: <HiDotsHorizontal />,
              },
              {
                icon: <ImEnlarge />,
              },
              { icon: <MdVideoCall /> },
              {
                icon: <FaRegEdit />,
              },
            ].map((option, i) => (
              <div
                className='rounded-full p-2 hover:bg-hover cursor-pointer'
                key={i}
              >
                <i
                  className={`  ${i === 1 ? 'text-sm' : 'text-2xl'} ${
                    i === 3 && 'text-lg'
                  } text-gray-600 `}
                >
                  {option.icon}
                </i>
              </div>
            ))}
          </div>
        </div>
        <div className='relative w-full flex flex-row justify-center items-center'>
          <Input
            type={`text`}
            name={`chats`}
            placeholder={`Search Messenger`}
            handleChange={(e) => setSearchChats(e.target.value)}
            value={searchChats}
          />
          <MdOutlineSearch className='absolute top-2 left-6 text-gray-600 text-2xl cursor-pointer ' />
        </div>
      </section>
      <section className='max-h-[470px] gap-3 mt-1 pt-3  w-full overflow-auto home_scroll pr-1 p-3 '>
        {posts.map(({ creator, profile: [{ profileImage, createdAt }] }, i) => (
          <div
            className='w-full flex flex-row gap-3 cursor-pointer hover:bg-slate-200 px-2 py-1 mt-0.5 mb-0.5 rounded-md'
            key={i + creator}
          >
            <img
              src={profileImage}
              alt='sender'
              className='w-14 h-14 rounded-full'
            />
            <div className=''>
              <h3 className=''> {creator} </h3>
              <p className=''> {moment(createdAt).fromNow()} </p>
            </div>
          </div>
        ))}
      </section>
      <section className='flex justify-center items-center border-t-[1px] border-t-slate-300 p-3 rounded-b-lg '>
        <h4 className='text-blue-600 cursor-pointer hover:underline'>
          See all in Messenger
        </h4>
      </section>
    </>
  )
}

export default MegWrapper(Messages)

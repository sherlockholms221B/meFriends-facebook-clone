import React, { useState } from 'react'
import moment from 'moment'
import { HiDotsHorizontal } from 'react-icons/hi'
import { ImEnlarge } from 'react-icons/im'
import { MdOutlineSearch, MdVideoCall } from 'react-icons/md'
import { BiMessageAltEdit } from 'react-icons/bi'

import Input from '../Input'
import MegWrapper from '../MegWrapper'
import { comments } from '../../utils/constants'
import { randomNumberGenerator } from '../../Functions/random.'
import { useGlobalContext } from '../../Hooks/context/UseContext'
const Messages = () => {
  const { setChatState, setMessageState } = useGlobalContext()
  const [searchChats, setSearchChats] = useState('')
  return (
    <>
      <section className='flex flex-col gap-2 p-3 rounded-t-lg'>
        <div className='flex flex-row w-full justify-between items-center'>
          <h3 className='text-2xl font-bold text-gray-900 dark:text-thdark500'>
            Chats
          </h3>
          <article className='flex flex-row gap-2 items-center pl-1'>
            {[
              {
                icon: <HiDotsHorizontal />,
              },
              {
                icon: <ImEnlarge />,
              },
              { icon: <MdVideoCall /> },
              {
                icon: <BiMessageAltEdit />,
              },
            ].map((option, i) => (
              <article
                className='rounded-full p-2 dark:hover:bg-dark300 hover:bg-light300 cursor-pointer'
                key={i}
              >
                <p
                  className={`  ${i === 1 ? 'text-sm' : 'text-2xl'} ${
                    i === 3 && 'text-md -ml-1'
                  }  text-gray-600 dark:text-thlight500`}
                >
                  {option.icon}
                </p>
              </article>
            ))}
          </article>
        </div>
        <section className='relative w-full flex flex-row justify-center items-center'>
          <Input
            type={`text`}
            name={`chats`}
            placeholder={`Search Messenger`}
            handleChange={(e) => setSearchChats(e.target.value)}
            value={searchChats}
          />
          <MdOutlineSearch className='absolute top-2 left-6 text-gray-600 dark:text-thlight500 text-2xl cursor-pointer ' />
        </section>
        <article className='w-full flex flex-row flex-nowrap justify-start items-center gap-4 pl-2 mt-2'>
          {[
            {
              title: 'Inbox',
            },
            {
              title: 'Communities',
            },
          ].map(({ title, i }) => (
            <p
              key={i}
              className='text-md dark:text-thdark500 capitalize rounded-full py-0.5 px-2 font-medium bg-blue-600 brightness-125'
            >
              {title}
            </p>
          ))}
        </article>
      </section>
      <section className='max-h-[380px] gap-3 w-full overflow-auto home_scroll pr-1 pl-1 pt-2'>
        {comments.map(
          ({ creator, profile: [{ profileImage, createdAt }], comment }, i) => (
            <div
              className='w-full flex flex-row gap-3 cursor-pointer dark:hover:bg-dark300  hover:bg-slate-200 px-2 py-1.5 mt-0.5 mb-0.5 rounded-md'
              key={i + creator}
              onClick={() => {
                setMessageState(false)
                setChatState(true)
              }}
            >
              <img
                src={profileImage}
                alt='sender'
                className='w-10 h-10 rounded-full'
              />
              <article className=''>
                <h3 className='capitalize text-black dark:text-thdark500 hidden lg:block text-lg font-medium'>
                  {creator}
                </h3>
                <article className='flex_row gap-2 dark:text-thlight500'>
                  <h3 className='text-sm'>
                    {`${comment.substring(0, randomNumberGenerator(9, 21))}...`}
                  </h3>
                  <p className='text-sm'>
                    {`${moment(createdAt).fromNow().substring(0, 5)}.`}
                  </p>
                </article>
              </article>
            </div>
          )
        )}
      </section>
      <section className='flex justify-center items-center border-t-[1px] dark:border-bd500 border-t-slate-300 p-3 rounded-b-lg '>
        <h4 className='deep_blue cursor-pointer hover:underline'>
          See all in Messenger
        </h4>
      </section>
    </>
  )
}

export default MegWrapper(Messages)

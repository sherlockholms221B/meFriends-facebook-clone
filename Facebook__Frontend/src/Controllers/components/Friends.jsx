import React from 'react'

import MenuPage from '../MenuPage'
import { Icon } from '../../utils/Icon'
import { comments } from '../../utils/constants'
import SoftIconContainer from '../../examples/icon'
import { Input } from '../../Components'

const Friends = () => {
  return (
    <div className='dark:bg-dark500 bg-inherit flex flex-col gap-y-2 md:gap-4 w-full h-full px-1 py-0 md:p-4 overflow-auto scroll-hidden border-t-2 dark:border-t-bd500 md:border-none'>
      <article className='flex flex-row justify-between items-center p-2 md:pt-4 pb-0 '>
        <h5 className=' text-lg md:text-xl text-gray-800 dark:text-thdark500 font-bold'>
          People you may know
        </h5>
        <button className='text-xl rounded-full dark:bg-dark300 dark:text-thdark500 bg-light500 text-black p-2 w-fit h-fit'>
          <Icon.MdSettings />
        </button>
      </article>
      <section className='flex flex-col md:flex-row flex-wrap gap-2 md:px-2 group w-full md:w-fit md:mx-auto'>
        {comments.map(
          ({ creator, profile: [{ profileImage }], isPrivate }, i) => (
            <section
              key={i + creator}
              className='w-full md:max-w-[180px] h-fit md:h-[360px] flex flex-row items-center md:items-start md:flex-col flex-grow dark:bg-dark400 bg-white rounded-md md:rounded-xl border dark:border-bd500 shadow-lg px-2 md:p-0 gap-2 md:gap-0'
            >
              <img
                src={profileImage}
                alt=''
                className='md:w-full md:h-1/2 w-20 h-w-20 sm:w-28 sm:h-28 object-cover rounded-full md:rounded-t-xl md:rounded-none'
              />
              <div className='h-full md:h-1/2 w-full flex flex-col items-center justify-evenly text-left gap-y-2 gap-x-1 md:gap-0'>
                <div className='w-[90%] flex flex-col gap-1 items-start justify-evenly '>
                  <strong className='text-base text-gray-900 font-[500] md:font-medium dark:text-white capitalize'>
                    {creator}
                  </strong>
                  <figure className='flex flex-row gap-2 items-center justify-start'>
                    <div className='flex flex-row'>
                      {comments.map(({ profile: [{ profileImage }] }, i) => (
                        <img
                          src={profileImage}
                          key={i}
                          alt='friends'
                          className={`w-3 h-3 rounded-full  ${
                            i === 0 && 'left-0 '
                          } ${i === 1 && 'left-8'}   ${
                            i > 1 && 'hidden'
                          } ring-2 ring-white hover:z-10 cursor-pointer
                           `}
                        />
                      ))}
                    </div>
                    <figcaption>
                      <p className='text-xs dark:text-thlight500 text-zinc-500'>{`20 mutual friends`}</p>
                    </figcaption>
                  </figure>
                </div>
                <div className='flex flex-row md:flex-col items-center w-full gap-x-2 md:gap-x-0 md:gap-y-2'>
                  <button className='hover:bg-blue-700 dark:bg-tpBlue500 bg-blue-600 dark:text-thdark500 py-1.5 text-base rounded-lg font-semibold w-full md:w-[90%]'>
                    Add friend
                  </button>
                  <button className='bg-light400 hover:bg-light500 dark:bg-dark300 dark:text-thdark500 text-black py-1.5 text-base rounded-lg font-semibold w-full md:w-[90%]'>
                    Remove
                  </button>
                </div>
              </div>
            </section>
          )
        )}
      </section>
    </div>
  )
}

const FriendsBtn = () => {
  return (
    <section className='flex flex-col gap-4 w-full h-fit sm:h-full px-2 bg-white dark:bg-dark500 md:dark:bg-dark400'>
      <article className='flex flex-row justify-between items-center p-2 '>
        <h5 className='text-2xl text-gray-800 dark:text-thdark500 font-bold tracking-wide'>
          Friends
        </h5>
        <button className=' text-xl rounded-full  dark:bg-dark300 dark:text-thdark500 bg-gray-200 p-2 w-fit h-fit'>
          <Icon.MdSettings className='hidden md:block' />
          <Icon.MdOutlineSearch className='md:hidden text-gray-400 text-2xl cursor-pointer ' />
        </button>
      </article>
      <section className='hidden md:block relative rounded-full w-[96%] h-fit'>
        <Input
          type='text'
          name='menusl'
          placeholder='Search friend...'
          autoFocus
        />
        <Icon.MdOutlineSearch className='absolute top-2 left-3 text-gray-400 text-2xl cursor-pointer ' />
      </section>
      <section className='w-full flex-col gap-1 pl-2 pr-2 group hidden md:flex'>
        {[
          {
            icon: <Icon.RiSettings2Fill />,
            title: 'Home',
            isMove: false,
          },
          {
            icon: <Icon.MdHttps />,
            title: 'Friend request',
            isMove: true,
          },
          {
            icon: <Icon.AiOutlineBug />,
            title: 'Suggestions ',
            isMove: true,
          },
          {
            icon: <Icon.MdOutlineFormatListBulleted />,
            title: 'All Friends',
            isMove: true,
          },
          {
            icon: <Icon.MdTune />,
            title: 'Birthdays',
            isMove: false,
          },
          {
            icon: <Icon.BsGlobe />,
            title: 'Custome lists',
            isMove: true,
          },
        ].map(({ icon, title, isMove, ref }, index) => (
          <SoftIconContainer
            // hidden
            key={index}
            icon={icon}
            text={title}
            handleClick={() => {}}
            next={isMove}
            ref={ref}
          />
        ))}
      </section>
    </section>
  )
}

export default MenuPage(Friends, FriendsBtn, 'friends')

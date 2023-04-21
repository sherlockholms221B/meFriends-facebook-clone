import React from 'react'

import MenuPage from './MenuPage'
import { Icon } from '../utils/Icon'
import { comments } from '../utils/constants'
import SoftIconContainer from '../examples/icon'
import { Input } from '../Components'

const Friends = () => {
  return (
    <div className='dark:bg-dark500 flex flex-col gap-4 w-full h-full p-4 overflow-auto'>
      <article className='flex flex-row justify-between items-center p-2 pt-4 pb-0 '>
        <h5 className='text-xl text-gray-800 dark:text-thdark500 font-bold'>
          People you may know
        </h5>
        <p className=' text-xl rounded-full  dark:bg-dark300 dark:text-thdark500 bg-gray-200 p-2 w-fit h-fit'>
          <Icon.MdSettings />
        </p>
      </article>
      <section className='flex flex-row flex-wrap w-full gap-2 pl-2 pr-2 group'>
        {comments.map(
          ({ creator, profile: [{ profileImage }], isPrivate }, i) => (
            <div
              key={i + creator}
              className='max-w-[180px] h-[360px] flex-grow dark:bg-dark400 rounded-xl border dark:border-bd500'
            >
              <img
                src={profileImage}
                alt=''
                className='w-full h-1/2 object-cover rounded-t-xl'
              />
              <div className='h-1/2 w-full flex flex-col items-center justify-evenly text-left'>
                <div className='w-[90%] flex flex-col gap-1 items-start justify-evenly '>
                  <h4 className='text-base text-gray-900 font-medium dark:text-white capitalize'>
                    {creator}
                  </h4>
                  <div className='flex flex-row gap-2 items-center justify-start'>
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
                    <p className='text-xs dark:text-thlight500'>{`20 mutual friends`}</p>
                  </div>
                </div>
                <button className='bg-light300 hover:bg-light400 dark:bg-blue-600 dark:text-thdark500 py-1.5 text-base rounded-lg font-semibold w-[90%]'>
                  Add friend
                </button>
                <button className='bg-light300 hover:bg-light400 dark:bg-dark300 dark:text-thdark500 py-1.5 text-base rounded-lg font-semibold w-[90%]'>
                  Remove
                </button>
              </div>
            </div>
          )
        )}
      </section>
    </div>
  )
}

const FriendsBtn = () => {
  return (
    <div className='flex flex-col gap-4 w-full h-full px-2'>
      <div className='flex flex-row justify-between items-center p-2 '>
        <h5 className='text-2xl text-gray-800 dark:text-thdark500 font-bold'>
          Friends
        </h5>
        <p className=' text-xl rounded-full  dark:bg-dark300 dark:text-thdark500 bg-gray-200 p-2 w-fit h-fit'>
          <Icon.MdSettings />
        </p>
      </div>
      <section className='relative rounded-full w-[96%] h-fit'>
        <Input
          type='text'
          name='menusl'
          placeholder='Search friend...'
          autoFocus
        />
        <Icon.MdOutlineSearch className='absolute top-2 left-3 text-gray-400 text-2xl cursor-pointer ' />
      </section>
      <section className='w-full flex flex-col gap-1 pl-2 pr-2 group'>
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
    </div>
  )
}

export default MenuPage(Friends, FriendsBtn, 'friends')

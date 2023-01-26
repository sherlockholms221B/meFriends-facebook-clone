import React from 'react'

import MenuPage from './MenuPage'
import { Icon } from '../utils/Icon'
import { comments } from '../utils/constants'

const Friends = () => {
  return (
    <div className='dark:bg-darkPrimary flex flex-col gap-4 w-full h-full p-4 overflow-auto'>
      <article className='flex flex-row justify-between items-center p-2 pt-4 pb-0 '>
        <h5 className='text-xl text-gray-800 dark:text-heading_dark_white font-bold'>
          People you may know
        </h5>
        <p className=' text-xl rounded-full  dark:bg-darkComplementry dark:text-heading_dark_white bg-gray-200 p-2 w-fit h-fit'>
          <Icon.MdSettings />
        </p>
      </article>
      <section className='flex flex-row flex-wrap w-full gap-2 pl-2 pr-2 group'>
        {comments.map(
          ({ creator, profile: [{ profileImage }], isPrivate }, i) => (
            <div
              key={i + creator}
              className='w-[180px] h-[360px] flex-grow dark:bg-darkSecondary rounded-xl border dark:border-borderDark'
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
                          } ring-2 ring-white
                           `}
                        />
                      ))}
                    </div>
                    <p className='text-xs dark:text-heading_dark_gray'>{`20 mutual friends`}</p>
                  </div>
                </div>
                <button className='bg-secondaryWhite hover:bg-primaryWhite dark:bg-blue-600 dark:text-heading_dark_white py-1.5 text-base rounded-lg font-semibold w-[90%]'>
                  Add friend
                </button>
                <button className='bg-secondaryWhite hover:bg-primaryWhite dark:bg-darkComplementry dark:text-heading_dark_white py-1.5 text-base rounded-lg font-semibold w-[90%]'>
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
    <div className='flex flex-col gap-4 w-full h-full '>
      <div className='flex flex-row justify-between items-center p-2 '>
        <h5 className='text-2xl text-gray-800 dark:text-heading_dark_white font-bold'>
          Friends
        </h5>
        <p className=' text-xl rounded-full  dark:bg-darkComplementry dark:text-heading_dark_white bg-gray-200 p-2 w-fit h-fit'>
          <Icon.MdSettings />
        </p>
      </div>
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
        ].map(({ icon, title, isMove, ref }, i) => (
          <div
            key={i + title}
            className={`  ${title} flex justify-between items-center dark:hover:bg-darkComplementry hover:bg-secondaryWhite p-2 w-full rounded-md cursor-pointer first:bg-darkComplementry first:hover:bg-darkComplementry `}
          >
            <div className='flex flex-row items-center gap-2 w-fit '>
              <p className=' text-xl rounded-full  dark:bg-darkComplementry dark:text-heading_dark_white bg-gray-200 p-2 w-fit h-fit'>
                {icon}
              </p>
              <h4 className='text-gray-900 font-medium dark:text-white'>
                {title}
              </h4>
            </div>
            {isMove && (
              <p className='font-medium text-2xl dark:text-white'>
                <Icon.MdOutlineArrowForwardIos />
              </p>
            )}
          </div>
        ))}
      </section>
    </div>
  )
}

export default MenuPage(Friends, FriendsBtn, 'friends')

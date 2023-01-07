import React from 'react'

import MenuPage from './MenuPage'
import { Icon } from '../utils/Icon'
import { comments } from '../utils/constants'
import { MdMoreHoriz } from 'react-icons/md'
const Saved = () => {
  return (
    <div className='dark:bg-darkPrimary flex flex-col gap-4 w-full h-full p-4 overflow-auto'>
      <section className='flex flex-row justify-between items-center p-2 pt-4 pb-0 '>
        <h5 className='text-xl text-gray-800 dark:text-heading_dark_white font-bold'>
          All
        </h5>
        <p className=' text-xl rounded-full  dark:bg-darkComplementry dark:text-heading_dark_white bg-gray-200 p-2 w-fit h-fit'>
          <Icon.MdSettings />
        </p>
      </section>
      <section className='flex flex-col w-full gap-3 pl-2 pr-2 group'>
        {comments.map(
          ({ creator, profile: [{ profileImage }], isPrivate }, i) => (
            <div
              key={i + creator}
              className='w-full h-[180px] flex flex-row dark:bg-darkSecondary rounded-xl border dark:border-borderDark p-4'
            >
              <img
                src={profileImage}
                alt=''
                className='w-[200px] h-full object-cover rounded-xl'
              />
              <div className='h-full w-full flex flex-col items-center justify-evenly text-left'>
                <div className='w-[90%] border flex flex-col gap-1 items-start justify-evenly '>
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
                <div className='flex flex-row justify-start w-full'>
                  <button className='bg-secondaryWhite hover:bg-primaryWhite dark:bg-darkComplementry dark:text-heading_dark_white py-1.5 text-base rounded-lg font-semibold '>
                    Add to collection
                  </button>
                  <p className='w-fit rounded-md bg-secondaryWhite dark:bg-darkComplementry dark:text-heading_dark_white hover:bg-primaryWhite px-4 py-2'>
                    <MdMoreHoriz className='text-2xl' />
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </section>
    </div>
  )
}

const SavedBtn = () => {
  return (
    <div className='flex flex-col gap-4 w-full h-full '>
      <div className='flex flex-row justify-between items-center p-2 '>
        <h5 className='text-2xl text-gray-800 dark:text-heading_dark_white font-bold'>
          Saved
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
          },
        ].map(({ icon, title, ref }, i) => (
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
          </div>
        ))}
      </section>
    </div>
  )
}

export default MenuPage(Saved, SavedBtn, 'saved')

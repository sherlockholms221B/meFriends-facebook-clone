import React from 'react'

//import controller higher order components
import MenuPage from './MenuPage'

//import custom react icons
import { Icon } from '../utils/Icon'

//import data
import { comments } from '../utils/constants'
import SoftIconContainer from '../examples/icon'
import { Demaceta } from '../Components/RDOMC'

const Saved = () => {
  return (
    <div className='dark:bg-darkPrimary flex flex-col gap-4 w-full h-full p-4 overflow-auto'>
      <section className='flex flex-row justify-between items-center p-2 pt-4 pb-0 '>
        <h5 className='text-xl text-gray-800 dark:text-heading_dark_white font-bold'>
          All
        </h5>
        <p className=' text-xl rounded-full  dark:bg-darkComplementry dark:text-heading_dark_white bg-gray-200 p-2 w-fit h-fit'>
          <Icon.HiOutlineSwitchHorizontal />
        </p>
      </section>
      <section className='flex flex-col w-full gap-3 pl-2 pr-2 group'>
        {comments.map(
          ({ creator, profile: [{ profileImage }], isPrivate }, i) => (
            <section
              key={i + creator}
              className='w-full h-[180px] flex flex-row gap-6 dark:bg-darkSecondary rounded-xl border dark:border-borderDark p-4'
            >
              <img
                src={profileImage}
                alt=''
                className='w-[200px] h-full object-cover rounded-xl'
              />
              <div className='h-full w-full flex flex-col items-center justify-between text-left'>
                <div className='w-full flex flex-col gap-2 items-start justify-evenly '>
                  <h4 className='text-base text-gray-900 font-medium dark:text-white capitalize'>
                    {creator}
                  </h4>
                  <p className='text-xs dark:text-heading_dark_gray '>
                    post.
                    <span className='font-semibold tracking-wide pl-1 dark:text-heading_dark_white'>
                      3 photos
                    </span>
                  </p>
                  <div className='flex flex-row gap-3 items-center justify-start'>
                    <div className='flex flex-row'>
                      {comments.map(
                        ({ profile: [{ profileImage }], creator }, i) => (
                          <img
                            src={profileImage}
                            key={i}
                            alt='friends'
                            className={`w-7 h-7 rounded-full  ${
                              i === 0 && 'left-0 '
                            } ${i === 1 && 'left-8'}   ${
                              i > 1 && 'hidden'
                            } ring-2 ring-white cursor-pointer hover:z-10
                           `}
                          />
                        )
                      )}
                    </div>
                    <p className='text-xs dark:text-heading_dark_gray '>
                      Saved from{' '}
                      <span className='font-semibold tracking-wide dark:text-heading_dark_white'>
                        {' '}
                        {creator}'s post
                      </span>
                    </p>
                  </div>
                </div>
                <div className='flex flex-row justify-start items-center gap-2 w-full'>
                  <button className='bg-secondaryWhite hover:bg-primaryWhite dark:bg-darkComplementry dark:text-heading_dark_white py-2 px-4 rounded-md font-medium tracking-wide w-fit'>
                    Add to collection
                  </button>
                  <p className='w-fit rounded-md bg-secondaryWhite dark:bg-darkComplementry dark:text-heading_dark_white hover:bg-primaryWhite px-4 py-2'>
                    <Icon.MdMoreHoriz className='text-2xl' />
                  </p>
                </div>
              </div>
            </section>
          )
        )}
      </section>
    </div>
  )
}

const SavedBtn = () => {
  return (
    <section className='flex flex-col gap-1 w-full h-full p-4'>
      <section className='flex flex-row justify-between items-center'>
        <h5 className='text-2xl text-gray-800 dark:text-heading_dark_white font-bold'>
          Saved
        </h5>
        <p className=' text-xl rounded-full  dark:bg-darkComplementry dark:text-heading_dark_white bg-gray-200 p-2 w-fit h-fit'>
          <Icon.MdSettings />
        </p>
      </section>
      <section className='w-full flex flex-col mt-2 group'>
        {[
          {
            icon: <Icon.AiOutlineSwitcher />,
            title: 'Saved item',
          },
        ].map(({ icon, title }, i) => (
          <SoftIconContainer
            icon={icon}
            text={title}
            handleClick={() => {}}
            key={i}
          />
        ))}
      </section>
      <Demaceta />
      <section className='flex flex-col w-full'>
        <h5 className='text-lg text-gray-800 dark:text-heading_dark_white font-bold'>
          My collection
        </h5>
        <button className='mt-4 flex flex-row justify-center items-center gap-0.5 text-lg text-blue-500 bg-[#0c4aad47] rounded-md font-medium tracking-wide py-2 '>
          <Icon.HiPlusSm />
          Create new collection
        </button>
      </section>
    </section>
  )
}

export default MenuPage(Saved, SavedBtn, 'saved')

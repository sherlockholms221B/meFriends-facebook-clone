import React from 'react'

//import controller higher order components
import MenuPage from './MenuPage'

//import custom react icons
import { Icon } from '../utils/Icon'

//import data
import { comments } from '../utils/constants'

//import components
import { Demarcate } from '../Components/RDOMC'
import SoftIconContainer from '../examples/icon'
import SoftButton from '../examples/SoftButton'

const Saved = () => {
  return (
    <section className='dark:bg-dark500 flex flex-col gap-4 w-full h-full p-4 overflow-auto'>
      <section className='flex flex-row justify-between items-center p-2 pt-4 pb-0 '>
        <h5 className='text-xl text-gray-800 dark:text-thdark500 font-bold'>
          All
        </h5>
        <SoftButton
          rounded
          title='dark:bg-dark300 bg-gray-200 p-2 rounded-full'
          functionCall={() => {}}
        >
          <Icon.HiOutlineSwitchHorizontal className='text-xl dark:text-thdark500' />
        </SoftButton>
      </section>
      <section className='flex flex-col w-full gap-3 pl-2 pr-2 group'>
        {comments.map(
          ({ creator, profile: [{ profileImage }], isPrivate }, i) => (
            <section
              key={i + creator}
              className='w-full h-[180px] flex flex-row gap-6 dark:bg-dark400 rounded-xl border dark:border-bd500 p-4'
            >
              <img
                src={profileImage}
                alt=''
                className='w-[200px] h-full object-cover rounded-xl'
              />
              <section className='h-full w-full flex flex-col items-center justify-between text-left'>
                <section className='w-full flex flex-col gap-2 items-start justify-evenly '>
                  <h4 className='text-base text-gray-900 font-medium dark:text-white capitalize'>
                    {creator}
                  </h4>
                  <p className='text-xs dark:text-thlight500 '>
                    post.
                    <span className='font-semibold tracking-wide pl-1 dark:text-thdark500'>
                      3 photos
                    </span>
                  </p>
                  <article className='flex flex-row gap-3 items-center justify-start'>
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
                    <p className='text-xs dark:text-thlight500 '>
                      Saved from{' '}
                      <span className='font-semibold tracking-wide dark:text-thdark500'>
                        {' '}
                        {creator}'s post
                      </span>
                    </p>
                  </article>
                </section>
                <section className='flex flex-row justify-start items-center gap-2 w-full'>
                  <SoftButton
                    title='text-md text-blue-500 bg-light300 hover:bg-light400 dark:bg-dark300 dark:text-thdark500 px-4 py-2'
                    functionCall={() => {}}
                  >
                    Add to collection
                  </SoftButton>
                  <SoftButton
                    title='text-lg bg-light300 dark:bg-dark300 dark:text-thdark500 hover:bg-light400 px-4 py-2'
                    functionCall={() => {}}
                  >
                    <Icon.MdMoreHoriz className='text-2xl' />
                  </SoftButton>
                </section>
              </section>
            </section>
          )
        )}
      </section>
    </section>
  )
}

const SavedBtn = () => {
  return (
    <section className='flex flex-col gap-1 w-full h-full p-4'>
      <section className='flex flex-row justify-between items-center'>
        <h5 className='text-2xl text-gray-800 dark:text-thdark500 font-bold'>
          Saved
        </h5>
        <SoftButton
          rounded
          title='dark:bg-dark300 bg-gray-200 p-2 rounded-full'
          functionCall={() => {}}
        >
          <Icon.MdSettings className='text-xl dark:text-thdark500' />
        </SoftButton>
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
      <Demarcate />
      <section className='flex flex-col w-full'>
        <h5 className='text-lg text-gray-800 dark:text-thdark500 font-bold'>
          My collection
        </h5>
        <SoftButton
          title='mt-4 text-lg text-blue-500 bg-[#0c4aad47] py-2'
          functionCall={() => {}}
        >
          <Icon.HiPlusSm />
          Create new collection
        </SoftButton>
      </section>
    </section>
  )
}

export default MenuPage(Saved, SavedBtn, 'saved')

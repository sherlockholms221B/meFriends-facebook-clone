import React from 'react'

import MegWrapper from '../MegWrapper'
import { HiDotsHorizontal } from 'react-icons/hi'
const Notifications = () => {
  return (
    <section className='flex flex-col gap-2 p-3 rounded-t-lg'>
      <section className='flex flex-row w-full justify-between items-center'>
        <h3 className='text-2xl font-bold text-gray-900 dark:text-heading_dark_white'>
          Notifications
        </h3>
        <div className='flex flex-row gap-2 items-center pl-1'>
          {[
            {
              icon: <HiDotsHorizontal />,
              id: 1,
            },
          ].map((option, i) => (
            <div
              className='rounded-full p-2 dark:hover:bg-darkComplementry hover:bg-secondaryWhite cursor-pointer'
              key={i + option.id}
            >
              <p
                className={`  ${i === 1 ? 'text-sm' : 'text-2xl'} ${
                  i === 3 && 'text-md -ml-1'
                }  text-gray-600 dark:text-heading_dark_gray`}
              >
                {option.icon}
              </p>
            </div>
          ))}
        </div>
      </section>
      <article className='w-full flex flex-row flex-nowrap justify-start items-center gap-4 pl-2'>
        {[
          {
            title: 'all',
          },
          {
            title: 'unread',
          },
        ].map(({ title }, i) => (
          <p
            key={i}
            className='text-md dark:text-heading_dark_white capitalize rounded-full py-1 px-2 font-medium bg-blue-700'
          >
            {title}
          </p>
        ))}
      </article>
      <article className='flex items-center justify-between'>
        {[{ title: 'New' }, { title: 'See all' }].map(({ title }, i) => (
          <p
            key={i}
            className={`${
              i === 1 ? 'text-blue-500' : 'text-black'
            } dark:text-heading_dark_white text-md font-medium`}
          >
            {title}
          </p>
        ))}
      </article>
    </section>
  )
}

export default MegWrapper(Notifications)

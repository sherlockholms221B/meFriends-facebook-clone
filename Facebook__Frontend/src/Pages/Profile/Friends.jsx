import React from 'react'
import { storiesbox } from '../../utils/constants'

const Friends = () => {
  return (
    <section className='bg-white dark:bg-darkSecondary rounded-lg p-3 flex flex-col gap-5  '>
      <div className='flex items-start justify-between'>
        <div className=''>
          <h2 className='text-xl font-bold dark:text-heading_dark_white'>
            Friends
          </h2>
          <p className='text-md text-gray-500 dark:text-heading_dark_gray'>
            4,108 friends
          </p>
        </div>
        <button className='capitalize font-normal text-lg text-center ring-2 dark:ring-blue-500 rounded-md px-2 py-1 blue_text'>
          See all friends
        </button>
      </div>

      <section className='flex flex-row flex-wrap items-baseline gap-2 justify-between '>
        {storiesbox.map(({ creator, talling }, i) => (
          <figure
            key={i}
            className={`${i > 8 && 'hidden'} p_sm:w-28 w-20 h-fit`}
          >
            <img
              src={talling}
              alt='friends'
              className={`p_sm:w-28 p_sm:h-28 w-20 h-20 ${
                i > 8 && 'hidden'
              }  rounded-xl flex-1 `}
            />
            <figcaption>
              {' '}
              <h3
                className={`${
                  i > 8 && 'hidden'
                } dark:text-heading_dark_white capitalize text-md text-start`}
              >
                {creator}
              </h3>
            </figcaption>
          </figure>
        ))}
      </section>
    </section>
  )
}

export default Friends

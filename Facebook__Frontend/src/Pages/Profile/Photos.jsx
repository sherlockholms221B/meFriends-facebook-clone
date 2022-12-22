import React from 'react'
import { storiesbox } from '../../utils/constants'

const Photos = () => {
  return (
    <section className='bg-white dark:bg-darkSecondary rounded-lg p-3 flex flex-col gap-5  '>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl font-bold dark:text-heading_dark_white'>
          Photos
        </h2>
        <button className='capitalize font-normal text-lg text-center ring-2 dark:ring-blue-500 rounded-md px-2 py-1 blue_text'>
          See all Photos
        </button>
      </div>

      <div className='flex flex-row flex-wrap items-center gap-2 justify-between'>
        {storiesbox.map(({ talling }, i) => (
          <img
            key={i}
            src={talling}
            alt='photos'
            className={`w-28 h-28 ${i > 8 && 'hidden'}  ${
              i === 6 ? 'rounded-bl-xl' : i === 8 && 'rounded-br-xl'
            } ${i === 0 ? 'rounded-tl-xl' : i === 2 && 'rounded-tr-xl'} flex-1`}
          />
        ))}
      </div>
    </section>
  )
}

export default Photos

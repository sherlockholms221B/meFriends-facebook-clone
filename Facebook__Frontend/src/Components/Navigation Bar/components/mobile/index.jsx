import React from 'react'

const MbarLink = ({
  icon,
  outlined,
  alarts,
  tip,
  isMbar,
  setIsMbar,
  index,
}) => {
  return (
    <section className=''>
      {isMbar === tip ? (
        <button className='relative transition-all' key={index} type='button'>
          <p className='text-2xl xtra_small:text-3xl text-blue-500'>{icon}</p>
          {alarts >= 0 && (
            <article
              className='dark:border-0 flex items-center justify-center
                  absolute w-5 h-4 rounded-full bg-red-600 -top-1
                  -right-1 border-2 border-white z-10'
            >
              <h3 className='text-xs text-white'>{alarts}</h3>
            </article>
          )}
        </button>
      ) : (
        <button
          type='button'
          className='relative transition-all'
          key={index}
          onClick={() => setIsMbar(tip)}
        >
          <p className='text-2xl xtra_small:text-3xl dark_white'>{outlined}</p>
          {alarts >= 0 && (
            <article
              className='dark:border-0 flex items-center justify-center
                  absolute w-5 h-4 rounded-full bg-red-600 -top-1
                  -right-1 border-2 border-white z-10'
            >
              <h3 className='text-xs text-white'>{alarts}</h3>
            </article>
          )}
        </button>
      )}
    </section>
  )
}

export default MbarLink

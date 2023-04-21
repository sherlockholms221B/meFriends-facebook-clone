import React from 'react'
import { Link } from 'react-router-dom'

const MbarLink = ({
  icon,
  outlined,
  alarts,
  tip,
  isMbar,
  setIsMbar,
  index,
  link,
}) => {
  return (
    <React.Fragment>
      <Link
        to={`/${link}?talling=${tip}`}
        className='relative transition-all'
        key={index}
        type='button'
        onClick={() => setIsMbar(tip)}
      >
        {isMbar === tip ? (
          <p className='text-2xl xs:text-3xl text-blue-500'>{icon}</p>
        ) : (
          <p className='text-2xl xs:text-3xl dark_white'>{outlined}</p>
        )}

        {alarts >= 0 && (
          <article
            className='dark:border-0 flex items-center justify-center
                  absolute w-5 h-4 rounded-full bg-red-600 -top-1
                  -right-1 border-2 border-white z-10'
          >
            <h3 className='text-xs text-white'>{alarts}</h3>
          </article>
        )}
      </Link>
    </React.Fragment>
  )
}

export default MbarLink

import React from 'react'

//import react router module
import { Link, useLocation } from 'react-router-dom'

const MbarLink = ({ icon, outlined, alarts, tip, link }) => {
  const search = useLocation().search
  const query = new URLSearchParams(search).get('talling')
  return (
    <React.Fragment>
      <Link
        to={`${link === '/' ? '/' : `/${link}?talling=${tip}`}`}
        className='relative transition-all duration-500 '
        type='button'
      >
        {tip === query || (query === null && tip === 'home') ? (
          <p className='text-2xl xs:text-3xl text-blue-500'>{icon}</p>
        ) : (
          <p className='text-2xl xs:text-3xl dark_white'>{outlined}</p>
        )}
        {alarts >= 0 && (
          <article className='flex items-center justify-center absolute w-5 h-4 rounded-full bg-red-600 -top-1 -right-1 ring-2 dark:ring-white ring-light400 z-10'>
            <h3 className='text-xs text-white'>{alarts}</h3>
          </article>
        )}
      </Link>
    </React.Fragment>
  )
}

export default MbarLink

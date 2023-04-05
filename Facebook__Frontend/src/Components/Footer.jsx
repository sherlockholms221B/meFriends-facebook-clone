import React from 'react'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='hidden larg:block mt-10 mb-4 py-2 xl:flex flex-col gap-3 text-center pb-6'>
      <h3 className='text-sm text-gray-500 '>
        This is a facebook clone web3 application designed only for educational
        purposes contact the developer for more.
      </h3>
      <p className='text-[12px] text-gray-400'>
        Privacy. Terms. Advertising. Videos. Streming. Subscriptions. Ad choices
        Cookies. More. Meta
      </p>
      <p className='text-[12px] text-gray-500'>
        Designed by <span className='text-gray-600 font-bold'>Santus@</span>{' '}
        christsanctus
      </p>
      <Link
        to='http://xtus.netlify.app'
        className='p-4 dark:bg-darkSecondary uppercase dark:text-white tracking-wider font-medium rounded-md m-6'
      >
        contact developer
      </Link>
    </footer>
  )
}

export default Footer

import React from 'react'

const Footer = () => {
  return (
    <footer className='hidden larg:block mt-10 mb-4 p-2 xl:flex flex-col gap-3'>
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
    </footer>
  )
}

export default Footer

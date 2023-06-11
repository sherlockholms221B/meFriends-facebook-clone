import React from 'react'

//import react-router-dom module
import { Link } from 'react-router-dom'
import { Icon } from '../utils/Icon';

const Footer = () => {
  return (
    <footer className=' hidden lg:flex flex-col justify-between gap-y-3 py-2 mt-5'>
      <div className='flex flex-col items-start justify-evenly min-h-[200px] max-h-[300px] border-2 border-dark300 rounded-md p-3'>
        <div className='w-full flex flex-row justify-start items-start'>
          <div className=' dark:bg-dark400 border-2 border-dark300 p-2.5 rounded-lg'>
            <Icon.MdStar className='text-2xl text-white' />
          </div>
        </div>
        <div className='w-full my-2'>
          <b className='text-black dark:text-white text-lg tracking-wide'>
            Need help?
          </b>
          <p className='text-black dark:text-white text-sm'>
            Please contact developer.
          </p>
        </div>
        <Link
          to='http://xtus.netlify.app'
          className='p-3 dark:bg-dark400 uppercase dark:text-white tracking-wider font-medium rounded-md border'
        >
          Contact <span className='text-gray-600 font-bold'>@sanctus</span>{' '}
        </Link>
      </div>
      <Link
        to='http://xtus.netlify.app'
        className='p-3 dark:bg-dark400 uppercase dark:text-white tracking-wider font-medium rounded-md border'
      >
        Designed by <span className='text-gray-600 font-bold'>@sanctus</span>{' '}
      </Link>
    </footer>
  );
};

export default Footer

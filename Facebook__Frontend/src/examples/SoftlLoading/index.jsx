import React from 'react'
// import PropTypes from 'prop-types'

const Loader = (props) => {
  return (
    <div className='border border-blue-300 shadow rounded-md p-4 w-full mx-auto dark:bg-dark400 bg-white dark:border-bd500 transition-shadow md:order-2 pt-1 mdsm:pt-4 px-4'>
      <div className='animate-pulse flex space-x-4'>
        <div className='rounded-full bg-slate-700 h-10 w-10'></div>
        <div className='flex-1 space-y-6 py-1 w-full '>
          <div className='h-2 bg-slate-700 rounded-full bg-light500 dark:bg-dark300 hover:bg-light300 p-3 w-full cursor-pointer flex flex-row flex-nowrap transition-colors'></div>
          <div className='space-y-3'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='h-2 bg-slate-700 rounded-full bg-light500 dark:bg-dark300 hover:bg-light300 p-3 w-full cursor-pointer flex flex-row flex-nowrap transition-colors col-span-2'></div>
              <div className='h-2 bg-slate-700 rounded-full bg-light500 dark:bg-dark300 hover:bg-light300 p-3 w-full cursor-pointer flex flex-row flex-nowrap transition-colors col-span-1'></div>
            </div>
            <div className='h-2 bg-slate-700 rounded-full bg-light500 dark:bg-dark300 hover:bg-light300 p-3 w-full cursor-pointer flex flex-row flex-nowrap transition-colors'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Loader.propTypes = {

// }

export default Loader

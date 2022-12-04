import React from 'react'

const NoPost = ({ title }) => {
  return (
    <div className='flex justify-center items-center mt-4'>
      <h3 className='text-sm font-medium text-gray-600 '> {title}</h3>
    </div>
  )
}

export default NoPost

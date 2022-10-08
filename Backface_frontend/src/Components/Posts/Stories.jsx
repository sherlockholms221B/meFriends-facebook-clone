import React from 'react'

const Stories = ({ story, profileImage, creator, createdAt }) => {
  return (
    <div className='  h-[300px]' style={{ width: '400px' }}>
      <img src={story} alt='stories' />
    </div>
  )
}

export default Stories

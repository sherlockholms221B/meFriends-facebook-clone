import React from 'react'
import { Link } from 'react-router-dom'
import Post from './Post'
import Stories from './Stories'
import { stories, storiesbox } from '../../utils/constants'

const Posts = () => {
  return (
    <div className='w-full h-full overflow-auto'>
      <div className='bg-white rounded-md '>
        <div className='flex flex-row justify-around items-center capitalize border-b-2  border-[#D8D5D5]'>
          {stories.map((story, i) => (
            <h1 key={i}>{story}</h1>
          ))}
        </div>

        <div className='flex flex-row items-center gap-4 overflow-x-scroll py-4 w-full h-full border-4 border-red-500 '>
          {storiesbox.map(
            ({ creator, profile: [{ profileImage, createdAt }], story }) => (
              <Stories
                key={creator}
                creator={creator}
                profileImage={profileImage}
                createdAt={createdAt}
                story={story}
              />
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Posts

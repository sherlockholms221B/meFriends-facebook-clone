import React, { useRef } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { like } from '../../Assets/Audio/index'

const Like = () => {
  const likeRef = useRef(null)
  const likePost = (e) => {
    // e.preventDefault()
    const element = likeRef.current
    // element.preventDefault()
    element
      .play()
      .then(() => element.pause)
      .catch((err) => console.log(err))
  }
  return (
    <button
      onClick={() => {
        likePost()
      }}
      className='flex flex-row flex-nowrap justify-center  items-center sm:dark:hover:bg-dark300 sm:hover:bg-light500 bg-light500 dark:bg-dark300 sm:dark:bg-inherit sm:rounded-[3px] rounded-full px-6 xs:px-8 py-2 cursor-pointer '
    >
      <AiOutlineLike className='text-xl font-bold text-gray-500 mr-1  dark:text-thlight500' />
      <p className='hidden sm:block text-sm xs:text-md text-gray-500 font-semibold dark:text-thlight500'>
        Like
      </p>
      <audio src={like} ref={likeRef} />
    </button>
  )
}

export default Like

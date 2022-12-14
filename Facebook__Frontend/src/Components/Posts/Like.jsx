import React, { useRef } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { like } from '../../Audio'

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
    <div
      onClick={() => {
        likePost()
      }}
      className='flex flex-row flex-nowrap justify-center dark:hover:bg-darkComplementry items-center hover:bg-primary rounded-[3px] px-8 py-2 cursor-pointer '
    >
      <AiOutlineLike className='text-xl font-bold text-gray-500 mr-1  dark:text-text_heading_dark_gray' />
      <p className='text-md text-gray-500 font-semibold dark:text-text_heading_dark_gray'>
        Like
      </p>
      <audio src={like} ref={likeRef} />
    </div>
  )
}

export default Like

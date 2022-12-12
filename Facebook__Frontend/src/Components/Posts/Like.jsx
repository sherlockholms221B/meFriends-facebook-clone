import React, { useRef } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { like } from '../../Audio'

const Like = () => {
  const likeRef = useRef(null)
  const likePost = () => {
    const element = likeRef.current
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
      className='flex flex-row flex-nowrap justify-center  items-center hover:bg-primary rounded-[3px] px-8 py-2 cursor-pointer '
    >
      <AiOutlineLike className='text-xl font-bold text-gray-500 mr-1' />
      <p className='text-md text-gray-500 font-semibold'>Like</p>
      <audio src={like} ref={likeRef} />
    </div>
  )
}

export default Like

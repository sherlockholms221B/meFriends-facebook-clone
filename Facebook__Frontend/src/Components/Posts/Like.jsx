import React, { useRef } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { like } from '../../Assets/Audio/index'

const Like = ({ PostBtn1, PostBtnI, PostBtnT }) => {
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
      className={PostBtn1}
    >
      <AiOutlineLike className={PostBtnI} />
      <p className={PostBtnT}>Like</p>
      <audio src={like} ref={likeRef} />
    </div>
  )
}

export default Like

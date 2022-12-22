import React from 'react'
import { GoComment } from 'react-icons/go'

const COMBTN = ({ setIsComment, isComment, PostBtn1, PostBtnI, PostBtnT }) => {
  return (
    <div className={PostBtn1} onClick={() => setIsComment(!isComment)}>
      <GoComment className={PostBtnI} />
      <p className={PostBtnT}>Comment</p>
    </div>
  )
}

export default COMBTN

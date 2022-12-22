import React from 'react'
import { RiShareForwardLine } from 'react-icons/ri'

const Share = ({ PostBtn1, PostBtnI, PostBtnT }) => {
  return (
    <div className={PostBtn1}>
      <RiShareForwardLine className={PostBtnI} />
      <p className={PostBtnT}>Share</p>
    </div>
  )
}

export default Share

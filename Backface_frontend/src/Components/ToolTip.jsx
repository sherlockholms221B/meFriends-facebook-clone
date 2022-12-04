import React from 'react'
import ReactTooltip from 'react-tooltip'

const ToolTip = ({ id, effect, type, title, place }) => {
  return (
    <ReactTooltip id={id} effect={effect} type={type} place={place}>
      <span className='text-lg'>{title}</span>
    </ReactTooltip>
  )
}

export default ToolTip

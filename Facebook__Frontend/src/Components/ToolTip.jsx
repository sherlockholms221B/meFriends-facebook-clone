import React from 'react'
import ReactTooltip from 'react-tooltip'

const ToolTip = ({ id, effect, type, title, place }) => {
  return (
    <ReactTooltip
      id={id}
      effect={effect}
      type={type}
      place={place}
      className='skills-tooltip'
    >
      <div className='text-lg'>{title}</div>
    </ReactTooltip>
  )
}

export default ToolTip

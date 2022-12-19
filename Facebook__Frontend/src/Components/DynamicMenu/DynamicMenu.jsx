import React, { useRef } from 'react'

const DynamicMenu = (Component) =>
  function HOC() {
    const boxWidthRef = useRef()

    return (
      <div
        whileInView={{
          opacity: [0, 1],
          scale: [0, 1],
        }}
        className='  '
        ref={boxWidthRef}
      >
        <Component />
      </div>
    )
  }

export default DynamicMenu

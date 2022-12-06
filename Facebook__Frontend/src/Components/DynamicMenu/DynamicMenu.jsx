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
        className='  vertical_scroll rounded-tl-lg rounded-b-lg  shadow-lg z-10 h-[400px] overflow-auto absolute top-10 right-10 bg-white p-2'
        style={{
          boxShadow: '0 0 6px  #E3E3E5',
        }}
        ref={boxWidthRef}
      >
        <Component />
      </div>
    )
  }

export default DynamicMenu

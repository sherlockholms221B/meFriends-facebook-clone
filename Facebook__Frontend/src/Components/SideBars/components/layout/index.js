import React from 'react'

const SidelayOut = ({ children, title, padding }) => {
  return (
    <section
      // style={{ marginTop: `${padding}px` }}
      className={`hidden mdsm:flex bg-transparent overflow-hidden h-full hover:overflow-auto w-min  ${
        title && title
      }`}
    >
      <section className='hover:overflow-y-auto overflow-x-hidden flex flex-col justify-start items-center w-fit lg:w-full h-max pl-2.5'>
        {children}
      </section>
    </section>
  )
}

export default SidelayOut

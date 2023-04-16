import React from 'react'

function SoftButton({ children, functionCall, title, rounded }) {
  return (
    <button
      className={`${title && title} ${
        rounded ? 'rounded-full' : 'rounded-md'
      } flex flex-row justify-center items-center gap-0.5 font-medium tracking-wide`}
      onClick={functionCall}
    >
      {children}
    </button>
  )
}

export default SoftButton

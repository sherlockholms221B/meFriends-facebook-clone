import react from 'react'

const MegWrapper = (Component, idName) =>
  function HOC() {
    return (
      <div className='absolute top-0 left-0'>
        <Component />
      </div>
    )
  }

export default MegWrapper

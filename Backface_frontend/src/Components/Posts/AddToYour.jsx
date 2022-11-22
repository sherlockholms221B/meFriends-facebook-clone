import React from 'react'

import MegWrapper from '../MegWrapper'
import { useGlobalContext } from '../../Context/UseContext'

const AddToYour = () => {
  const { addToYourState } = useGlobalContext()
  return (
    <>
      {addToYourState && (
        <div className='text-2xl rounded bg-white z-20 p-20 w-[50%] h-[50%] '>
          add to AddToYour
        </div>
      )}
    </>
  )
}

export default MegWrapper(AddToYour)

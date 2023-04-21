import React from 'react'

import MegWrapper from '../MegWrapper'
import { Head, CreatePostLinks } from '../index'
import { useGlobalContext } from '../../Context/UseContext'

const AddToYour = () => {
  const { setCreatePostState, addToYourState, setAddToYourState, setGoBack } =
    useGlobalContext()
  return (
    <div
      className={` ${
        addToYourState ? 'translate_x' : ''
      }  z-20  w-full h-full rounded-lg dark:border dark:border-bd500`}
    >
      <Head
        title={`Add to your post`}
        setFirstState={setCreatePostState}
        setSecondState={setAddToYourState}
        setThirdState={setGoBack}
      />
      <CreatePostLinks home={false} />
    </div>
  )
}

export default MegWrapper(AddToYour)

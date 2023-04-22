import React from 'react'

//import higher order component
import MegWrapper from '../MegWrapper'

//import components
import { Head, CreatePostLinks } from '../index'

//import useglobal context
import { useGlobalContext } from '../../Hooks/context/UseContext'

const AddToYour = () => {
  const { setCreatePostState, addToYourState, setAddToYourState, setGoBack } =
    useGlobalContext()
  return (
    <section
      className={
        ' z-20  w-full h-full rounded-lg dark:border dark:border-bd500 ' +
        (addToYourState && 'translate_x')
      }
    >
      <Head
        title={`Add to your post`}
        setFirstState={setCreatePostState}
        setSecondState={setAddToYourState}
        setThirdState={setGoBack}
      />
      <CreatePostLinks home={false} />
    </section>
  )
}

export default MegWrapper(AddToYour)

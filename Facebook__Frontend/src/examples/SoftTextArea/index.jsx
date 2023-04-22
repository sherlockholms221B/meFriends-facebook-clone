import * as React from 'react'

//import userprofile
import useAuthStore from '../../Store/AuthStore'

const SoftTextArea = ({ currentRef, state, setState }) => {
  //distructure userprofile
  const { userProfile } = useAuthStore()

  //this function handle the automatice resizing of
  //the textarea
  const createPostHeadings = (e) => {
    const element = currentRef.current
    element.style.height = 'auto'
    const sHeight = e.target.scrollHeight
    element.style.height = `${sHeight}px`
  }

  return (
    <section className='w-full max-h-[280px] overflow-auto vertical_scroll '>
      <textarea
        ref={currentRef}
        value={state}
        onChange={(e) => {
          e.stopPropagation()
          createPostHeadings(e)
          setState(e.target.value)
        }}
        name='heading'
        id='headingId'
        placeholder={`What's on your mind, ${userProfile.userName}`}
        className='outline-none w-full cursor-pointer   mt-2 mb-2 placeholder:text-md mdsm:placeholder:text-2xl dark:bg-dark400 pt-2 pl-2 dark:text-white placeholder:text-gray-500 font-meduim overflow-hidden resize-none'
      />
    </section>
  )
}

export default SoftTextArea

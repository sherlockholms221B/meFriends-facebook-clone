import * as React from 'react'

//import higher order component
import MegWrapper from '../MegWrapper'

//import context
import { useGlobalContext } from '../../Hooks/context/UseContext'

//import utilitis function
import { forward } from '../../Functions/utilities/SH'

//import custom react icons
import { Icon } from '../../utils/Icon'

//import authprofile from store
import useAuthStore from '../../Store/AuthStore'

//import re-useable component
import SoftTextArea from '../../examples/SoftTextArea'
import SoftPostBg from '../../examples/SoftPostBg'
import SoftTag from '../../examples/SoftTag'
import { AddFile, CreatePostLinks, PostAIR, Profile } from '../index'

//import utilities function
import { post } from '../../Functions/utilities'

const CreatePost = () => {
  const textRef = React.useRef(null)
  const {
    postvalue,
    setPostvalue,
    setCreatePostState,
    setAddToYourState,
    setPostAudienceState,
    addPictureState,
    goBack,
    setGoBack,
    audState,
    selectedFriends,
    internalAction: [controller, dispatchAction],
    externalAction: [state, dispatchCall],
  } = useGlobalContext()

  const { userProfile } = useAuthStore()
  // const importPattern = /^:import\(("[^"]*"|'[^']*'|[^"']+)\)$/
  // importPattern.exec('/')
  return (
    <section
      className={
        ' z-20  w-full h-full rounded-lg dark:border dark:border-bd500 ' +
        (goBack && 'translate__x')
      }
    >
      <article className='relative flex flex-row py-4 items-center justify-center border-b border-gray-300 dark:border-bd500 '>
        <strong className='text-xl tracking-normal dark:text-white text-gray-900'>
          Create post
        </strong>
        <p
          className='absolute dark:bg-dark300 top-2 right-2 rounded-full hover:bg-light300 bg-gray-300 p-2 cursor-pointer  dark:shadow-black dark:shadow-sm'
          onClick={() => {
            setCreatePostState(false)
            setGoBack(false)
          }}
        >
          <Icon.MdClose className='text-2xl dark:text-white' />
        </p>
      </article>
      <section className='w-full h-full p-4'>
        <section className='flex flex-row gap-2 items-center mb-2'>
          <Profile link='/' />
          <section className='w-fit flex flex-col items-start gap-2'>
            <article className='w-full flex justify-start items-center flex-wrap'>
              <strong className='text-xs mdsm:text-lg mdxs:text-sm dark:text-white tracking-wide text-zinc-700'>
                {userProfile?.userName}
                <SoftTag data={selectedFriends} />
              </strong>
            </article>
            <article
              className='flex dark:bg-dark300 flex-row gap-2 items-center rounded-sm bg-gray-200 w-fit py-0.5 px-1 cursor-pointer  dark:text-white'
              onClick={() => forward(setCreatePostState, setPostAudienceState)}
            >
              <article className='text-sm text-gray-900   dark:text-white'>
                <PostAIR state={audState} />
              </article>
              <b className='text-sm text-zinc-700 dark:text-white'>
                {audState}
              </b>
              <Icon.GoTriangleDown />
            </article>
          </section>
        </section>
        <section className='w-full max-h-[280px] overflow-auto  '>
          <SoftTextArea
            state={postvalue}
            setState={setPostvalue}
            currentRef={textRef}
          />
          {addPictureState && <AddFile />}
        </section>
        <SoftPostBg toggle={addPictureState} />
        <section
          role='button'
          className='w-full border-2 cursor-pointer dark:border-bd500 flex flex-row justify-between items-center sm:p-3 mt-4 rounded-md'
          onClick={() => forward(setCreatePostState, setAddToYourState)}
        >
          <h5 className='hidden mdsm:block text-md font-[700] text-gray-800  dark:text-white'>
            Add to your post
          </h5>
          <CreatePostLinks home={true} />
        </section>
        <button
          type='button'
          className={
            ' w-full p-2 mt-2 mb-2 rounded-lg text-center font-bold text-lg ' +
            (postvalue
              ? 'bg-blue-500 text-white cursor-pointer'
              : ' dark:bg-dark300 bg-gray-200 text-gray-400 cursor-not-allowed ')
          }
          onClick={() => {
            if (postvalue) {
              const data = {
                topic: postvalue,
                audience: audState,
                taged: selectedFriends,
                _creatorId: userProfile?._id,
                file: { postfile: controller.postfile },
                state,
                dispatchCall,
              }
              post(data)
            }
          }}
        >
          Post
        </button>
      </section>
    </section>
  )
}

export default MegWrapper(CreatePost)

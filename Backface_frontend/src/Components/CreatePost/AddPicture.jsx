import React from 'react'
import { BiImageAdd } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import { useGlobalContext } from '../../Context/UseContext'

const AddPicture = () => {
  const {
    createPostState,
    setCreatePostState,
    addToYourState,
    setAddToYourState,
    postAudienceState,
    setPostAudienceState,
    addPictureState,
    setAddPictureState,
    goBack,
    setGoBack,
  } = useGlobalContext()

  return (
    <div className='w-full h-48 p-2 rounded-md border-[1px] border-gray-400 mb-2'>
      <div className='relative h-full w-full hover:bg-gray-200 flex flex-col items-center justify-center rounded-md p-2 cursor-pointer'>
        <input type='file' className='h-0' />
        <p className='p-2 rounded-full bg-gray-300 flex items-center justify-center'>
          <BiImageAdd className=' text-2xl rotate-6 text-gray-800' />
        </p>
        <h3 className='text-md font-bold text-gray-800 '>Add photos/Video</h3>
        <p className='text-sm -mt-1 text-gray-400 font-sans'>
          or drag and drop
        </p>
        <p
          className='absolute top-2 right-2 rounded-full hover:bg-gray-100 bg-white shadow-xl z-40 p-1'
          onClick={() => {
            setAddPictureState(false)
          }}
        >
          <MdClose className='text-2xl text-gray-700 ' />
        </p>
      </div>
    </div>
  )
}

export default AddPicture

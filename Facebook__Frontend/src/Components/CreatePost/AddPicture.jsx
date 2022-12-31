import React, { useReducer, useRef } from 'react'

import { useGlobalContext } from '../../Context/UseContext'
import { Icon } from '../../utils/Icon'
import reducer from '../../Reducers/GReducer'
import IMG from '../Posts/IMG'

const AddPicture = () => {
  const [state, dispatch] = useReducer(reducer, [])
  console.log(state)
  const pictureRef = useRef(null)
  const imgRef = useRef(null)
  const { setAddPictureState } = useGlobalContext()

  const selectPicture = (e) => {
    pictureRef.current.click()
  }

  function readURL(input) {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      for (let index = 0; index < input.files.length; index++) {
        if (!input.files[index].type.match('image')) continue
        var reader = new FileReader()
        reader.onload = function (e) {
          dispatch({ type: 'add', payload: e.target.result })
        }
        reader.readAsDataURL(input.files[index])
      }
    } else {
      alert('Your broswer does not support the specified function')
    }
  }

  return (
    <div
      className={`relative w-full ${
        state.length !== 0 ? 'h-fit' : 'h-48'
      } p-2 rounded-md border-[2px] home_scroll dark:border-borderDark border-gray-400 mb-2 overflow-auto`}
    >
      {state.length !== 0 && <IMG postlength={state?.length} post={state} />}
      {state.length !== 0 && (
        <div className='absolute top-0 right-0 left-0 flex justify-between p-5'>
          <div className='flex flex-row gap-3 items-center'>
            <div className='cursor-pointer flex flex-row gap-2 items-center bg-white w-fit  p-2 rounded-md'>
              <Icon.MdModeEditOutline />
              <h3 className='text-md font-medium text-gray-800 '>Edit</h3>
            </div>
            <div
              className='cursor-pointer flex flex-row gap-2 items-center bg-white w-fit p-2 rounded-md'
              onClick={(e) => selectPicture(e)}
            >
              <input
                onChange={({ target }) => {
                  readURL(target)
                }}
                ref={pictureRef}
                type='file'
                name=''
                id=''
                hidden
                multiple
              />
              <Icon.BiImageAdd className=' text-2xl rotate-6 text-gray-800' />
              <h3 className='text-md font-medium text-gray-800 '>
                Add photos/Video
              </h3>
            </div>
          </div>
          <p
            className='rounded-full bg-white p-2 cursor-pointer'
            onClick={(e) => {
              e.stopPropagation()
              setAddPictureState(false)
            }}
          >
            <Icon.MdClose className='text-2xl ' />
          </p>
        </div>
      )}
      {state.length === 0 && (
        <div
          onClick={(e) => selectPicture(e)}
          className='relative  h-full w-full hover:bg-secondaryWhite dark:bg-darkComplementry hover:border-dashed border-2 hover:border-gray-600 dark:border-0 flex flex-col transition-all items-center justify-center rounded-md p-2 cursor-pointer'
        >
          <input
            onChange={({ target }) => {
              readURL(target)
            }}
            ref={pictureRef}
            type='file'
            hidden
            multiple
          />
          <p className='p-2 rounded-full bg-gray-300 flex items-center justify-center'>
            <Icon.BiImageAdd className=' text-2xl rotate-6 text-gray-800' />
          </p>
          <h3 className='text-md font-bold text-gray-800 dark:text-white'>
            Add photos/Video
          </h3>
          <p className='text-sm -mt-1 text-gray-400 font-sans'>
            or drag and drop
          </p>
          <p
            className='dark:bg-darkComplementry absolute top-2 right-2 rounded-full hover:bg-secondaryWhite bg-white shadow-xl z-40 p-1 dark:shadow-black dark:shadow-sm'
            onClick={(e) => {
              e.stopPropagation()
              setAddPictureState(false)
            }}
          >
            <Icon.MdClose className='text-2xl text-gray-700  dark:text-white ' />
          </p>
        </div>
      )}
    </div>
  )
}

export default AddPicture

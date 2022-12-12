import React, { useRef, useState } from 'react'
import { BiImageAdd } from 'react-icons/bi'
import { MdClose, MdModeEditOutline } from 'react-icons/md'

import { useGlobalContext } from '../../Context/UseContext'

const AddPicture = () => {
  const pictureRef = useRef(null)
  const imgRef = useRef(null)
  const { setAddPictureState, firstImg, setFirstImg, result, setResult } =
    useGlobalContext()

  const selectPicture = (e) => {
    pictureRef.current.click()
  }

  function readURL(input) {
    if (input.files && input.files[0]) {
      setFirstImg(true)
      var reader = new FileReader()

      reader.onload = function (e) {
        // imgRef.current.setAttribute('src', e.target.result)
        setResult(e.target.result)
      }

      reader.readAsDataURL(input.files[0])
    }
  }

  return (
    <div
      className={`relative w-full ${
        firstImg ? 'h-fit' : 'h-48'
      } p-2 rounded-md border-[2px] home_scroll dark:border-borderDark border-gray-400 mb-2 overflow-auto`}
    >
      {firstImg && (
        <img
          ref={imgRef}
          id='blah'
          src={result}
          className='w-full h-fit rounded-md object-fit'
          alt='img'
        />
      )}
      {firstImg && (
        <div className='absolute top-0 right-0 left-0 flex justify-between p-5'>
          <div className='flex flex-row gap-3 items-center'>
            <div className='cursor-pointer flex flex-row gap-2 items-center bg-white w-fit  p-2 rounded-md'>
              <MdModeEditOutline />
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
              <BiImageAdd className=' text-2xl rotate-6 text-gray-800' />
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
            <MdClose className='text-2xl ' />
          </p>
        </div>
      )}
      {!firstImg && (
        <div
          onClick={(e) => selectPicture(e)}
          className='relative  h-full w-full hover:bg-hover dark:bg-darkComplementry hover:border-dashed border-2 hover:border-gray-600 dark:border-0 flex flex-col transition-all items-center justify-center rounded-md p-2 cursor-pointer'
        >
          <input
            onChange={({ target }) => {
              console.log(target.files.length)
              readURL(target)
            }}
            ref={pictureRef}
            type='file'
            hidden
            multiple
          />
          <p className='p-2 rounded-full bg-gray-300 flex items-center justify-center'>
            <BiImageAdd className=' text-2xl rotate-6 text-gray-800' />
          </p>
          <h3 className='text-md font-bold text-gray-800 dark:text-white'>
            Add photos/Video
          </h3>
          <p className='text-sm -mt-1 text-gray-400 font-sans'>
            or drag and drop
          </p>
          <p
            className='dark:bg-darkComplementry absolute top-2 right-2 rounded-full hover:bg-hover bg-white shadow-xl z-40 p-1 dark:shadow-black dark:shadow-sm'
            onClick={(e) => {
              e.stopPropagation()
              setAddPictureState(false)
            }}
          >
            <MdClose className='text-2xl text-gray-700  dark:text-white ' />
          </p>
        </div>
      )}
    </div>
  )
}

export default AddPicture

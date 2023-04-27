import * as React from 'react'

//import useglobal context
import { useGlobalContext } from '../../../Hooks/context/UseContext'

//import custom icon
import { Icon } from '../../../utils/Icon'

//import component
import IMG from '../../Posts/IMG'

//import utilities function
import { addFile } from '../../../Functions/actions/internal'
import { upload, uploadvideo } from '../../../Pages/Login'

//
import { ADD_iMAGE_FILE, ADD_VIDEO_FILE } from '../../../Functions/type'

const AddFile = () => {
  const [loading, setLoading] = React.useState(false)
  const pictureRef = React.useRef(null)
  const pictureRefTwo = React.useRef(null)
  const {
    setAddPictureState,
    internalAction: [controller, dispatchAction],
  } = useGlobalContext()

  const selectPicture = (e) => {
    pictureRef.current.click()
  }

  const selectPictureTwo = (e) => {
    pictureRefTwo.current.click()
  }

  async function readURL(input) {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      for (let index = 0; index < input.files.length; index++) {
        if (input.files[index].type.match('image')) {
          const { data, msg } = await upload(
            input.files[index],
            loading,
            setLoading
          )

          addFile(dispatchAction, { value: { ...data } }, ADD_iMAGE_FILE)
          // var reader = new FileReader()
          // reader.onload = function (e) {
          //   addFile(dispatch, { value: e.target.result })
          // }
          // reader.readAsDataURL(input.files[index])
        } else if (input.files[index].type.match('video')) {
          const { data, msg } = await uploadvideo(
            input.files[index],
            loading,
            setLoading
          )

          addFile(dispatchAction, { value: { ...data } }, ADD_VIDEO_FILE)
        }
      }
    } else {
      alert('Your broswer does not support the specified function')
    }
  }
  console.log(controller.video, 'hdhd')

  return (
    <section
      className={
        ' p-2 rounded-md border-[2px] home_scroll dark:border-bd500 border-gray-400 mb-2 overflow-auto relative w-full ' +
        (controller.postfile.length !== 0 ? 'h-fit' : 'h-48')
      }
    >
      {controller.postfile.length !== 0 && controller.video.length !== 0 && (
        <IMG
          postlength={controller.postfile?.length}
          post={
            controller.postfile.length === 0
              ? controller.postfile
              : controller.video
          }
        />
      )}
      {controller.postfile.length !== 0 && (
        <section className='absolute top-0 right-0 left-0 flex justify-between p-5'>
          <section className='flex flex-row gap-3 items-center'>
            <div
              className='cursor-pointer flex flex-row gap-2 items-center bg-white dark:bg-dark400 w-fit p-2 rounded-md'
              onClick={(e) => selectPictureTwo(e)}
            >
              <input
                onChange={({ target }) => {
                  readURL(target)
                }}
                ref={pictureRefTwo}
                type='file'
                hidden
                multiple
              />
              <Icon.BiImageAdd className=' text-2xl rotate-6 text-gray-800 dark:text-light400' />
              <h3 className='text-md font-medium dark:text-light400 text-gray-800 '>
                Add photos/Video
              </h3>
            </div>
          </section>
          <p
            className='rounded-full bg-white dark:bg-dark400 p-2 cursor-pointer'
            onClick={(e) => {
              e.stopPropagation()
              setAddPictureState(false)
            }}
          >
            <Icon.MdClose className='text-2xl dark:text-light400' />
          </p>
        </section>
      )}
      {controller.postfile.length === 0 && (
        <section
          onClick={(e) => selectPicture(e)}
          className='relative h-full w-full hover:bg-light300 dark:bg-dark300 hover:border-dashed border-2 hover:border-gray-600 dark:border-0 flex flex-col transition-all items-center justify-center rounded-md p-2 cursor-pointer'
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
            className='dark:bg-dark300 absolute top-2 right-2 rounded-full hover:bg-light300 bg-white shadow-xl z-40 p-1 dark:shadow-black dark:shadow-sm'
            onClick={(e) => {
              e.stopPropagation()
              setAddPictureState(false)
            }}
          >
            <Icon.MdClose className='text-2xl text-gray-700  dark:text-white ' />
          </p>
        </section>
      )}
    </section>
  )
}

export default AddFile

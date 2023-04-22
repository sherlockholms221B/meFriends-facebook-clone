import * as React from 'react'

//import useglobal context
import { useGlobalContext } from '../../Hooks/context/UseContext'

//import utitlitis function
import { IconHandler, previous } from '../../Functions/utilities/SH'

//import static react ref link
import { PostAudienceLinks } from '../../utils/LWRef'

//import component
import { Head } from '../index'

//import higher oder component
import MegWrapper from '../MegWrapper'

const PostAudience = () => {
  const [value, setValue] = React.useState(true)
  const {
    setCreatePostState,
    postAudienceState,
    setPostAudienceState,
    setGoBack,
    setAudState,
    audState,
  } = useGlobalContext()
  return (
    <section
      className={
        ' z-20  w-full h-full rounded-lg dark:border dark:border-bd500 ' +
        (postAudienceState && 'translate_x')
      }
    >
      <Head
        title={`Post audience`}
        setFirstState={setCreatePostState}
        setSecondState={setPostAudienceState}
        setThirdState={setGoBack}
      />
      <section className='max-h-[350px] overflow-auto home_scroll p-2 '>
        <article className=''>
          <h4 className='text-lg font-semibold text-gray-800 dark:text-thdark500'>
            Who can see your post?
          </h4>
          <p className='text-md text-gray-500 dark:text-thlight500'>
            Your post will appear in Feed, on your profile and in search
            results.
          </p>
          <p className='text-md text-gray-500  mt-5  dark:text-thlight500'>
            Your default audience is set to <b>Public</b>, but you can change
            the audience of this specific post.
          </p>
        </article>

        <section className='group/edit'>
          {PostAudienceLinks().map(
            ({ icon, title, description, id, ref }, index) => {
              return (
                <button
                  key={index + title}
                  ref={ref}
                  className={
                    ' flex justify-between items-center cursor-pointer mt-2 mb-2 p-2 rounded-md dark:hover:bg-dark300 group first:borer first:bg-[#0c4aad2b] first:dark:hover:bg-[#0c4aad47] w-full hover:bg-dark200 dark:hover:bg-inherit ' +
                    id +
                    ' ' +
                    (audState === title && 'bg-blue-00')
                  }
                  onClick={(e) => {
                    IconHandler({ e, ref, setAudState })
                  }}
                >
                  <article className='flex items-center gap-2 '>
                    <p className='rounded-full bg-gray-300 dark:bg-dark300 dark:text-thdark500 text-lg sm:p-4 p-2 dark:group-hover:brightness-150 '>
                      {icon}
                    </p>
                    <div className='flex flex-col gap-0 items-start'>
                      <h3 className='xs:text-lg text-md font-semibold text-gray-800 dark:text-thdark500 '>
                        {title}
                      </h3>
                      <p className='sm:text-md text-xs text-gray-500 dark:text-thlight500 mt-[-5px]'>
                        {description}
                      </p>
                    </div>
                  </article>
                  <div
                    ref={ref}
                    className={
                      (audState === title
                        ? ' relative bg-inherit before:w-2 before:h-2 before:bg-blue-500 before:absolute before:rounded-full before:translate-y-1/2 before:-translate-x-1/2 ring-blue-500 ring-2'
                        : ' ring-2 dark:ring-white ring-gray-500 ') +
                      ' h-4 w-4  rounded-full transition-colors '
                    }
                  />
                </button>
              )
            }
          )}
        </section>
      </section>
      <div className='relative flex flex-col gap-2 border-t-2 dark:border-bd500 border-gray-300 p-3'>
        <div className='flex justify-start items-center gap-2'>
          <input
            type='checkbox'
            id='default'
            className={`${value === true ? 'bg-blue-500' : 'bg-red-500'}`}
            value={value}
            onClick={(e) => {
              setValue(!value)
            }}
          />
          <label
            htmlFor='default'
            className='dark:text-thdark500 text-gray-600 font-semibold'
          >
            Set as default audience
          </label>
        </div>
        <div className='flex justify-end items-center gap-4'>
          <button
            onClick={() =>
              previous(setCreatePostState, setPostAudienceState, setGoBack)
            }
            className='deep_blue font-semibold hover:bg-light300 py-2 px-4 rounded-sm  '
            type='button'
          >
            Cancle
          </button>
          <button
            onClick={() =>
              previous(setCreatePostState, setPostAudienceState, setGoBack)
            }
            className='text-white font-semibold bg-blue-600 hover:bg-blue-700 py-2 px-8 rounded-md  '
            type='button'
          >
            Done
          </button>
        </div>
      </div>
    </section>
  )
}

export default MegWrapper(PostAudience)

import React, { useRef } from 'react'
import { BsEmojiWink } from 'react-icons/bs'
import { FaUserTag } from 'react-icons/fa'
import { HiDotsHorizontal } from 'react-icons/hi'
import {
  MdFlag,
  MdOutlineLocationOn,
  MdOutlinePhotoLibrary,
  MdPerson,
  MdVideoCall,
} from 'react-icons/md'

import { useGlobalContext } from '../../Context/UseContext'
import { forward, IconHandler } from '../../Functions/SH'
import { MakePostLinkOne, MakePostLinkTwo } from '../../utils/LWRef'
import ToolTip from '../ToolTip'

const CreatePostLinks = ({ home }) => {
  const {
    createPostState,
    setCreatePostState,
    addToYourState,
    setAddToYourState,
    setAddPictureState,
    tagPeopleState,
    setTagPeopleState,
    setGoBack,
  } = useGlobalContext()

  return (
    <div className='flex flex-row gap-2 items-center w-full mid_small:w-fit'>
      <div
        className={`flex flex-row items-center ${
          home
            ? 'w-full justify-around mid_small:gap-2 mid_small:w-fit mid_small:justify-start'
            : 'flex-wrap  justify-around  gap-4  py-2'
        } cursor-pointer`}
      >
        {createPostState && (
          <>
            {MakePostLinkOne().map(({ icon, ref, tip }, i) => (
              <button
                data-tip
                data-for={tip}
                key={i}
                ref={ref}
                className={`${
                  i === 0 ? 'text-green-600  hover:bg-green-100' : ''
                } ${i === 1 ? 'text-blue-600  hover:bg-blue-100' : ''} ${
                  i === 2 ? 'text-yellow-600  hover:bg-yellow-100' : ''
                } ${i === 3 ? 'text-red-600  hover:bg-red-100' : ''} ${
                  i === 4 ? 'shade_blue  hover:bg-blue-100' : ''
                }  text-2xl p-2 rounded-full`}
                onClick={(e) =>
                  IconHandler({
                    e,
                    ref,
                    setAddPictureState,
                    setTagPeopleState,
                    setCreatePostState,
                    tagPeopleState,
                    createPostState,
                    setGoBack,
                  })
                }
              >
                {icon}
                <ToolTip
                  title={tip}
                  effect={`float`}
                  place={`top`}
                  id={tip}
                  type={`dark`}
                />
              </button>
            ))}

            <p
              data-tip
              data-for='more'
              className='text-2xl text-gray-500b rounded-full p-1.5 hover:bg-secondaryWhite  cursor-pointer dark:hover:bg-darkComplementry dark:text-heading_dark_white'
              onClick={(e) => {
                e.stopPropagation()
                forward(setCreatePostState, setAddToYourState)
              }}
            >
              <HiDotsHorizontal />
            </p>
            <ToolTip
              title={`more`}
              id={`more`}
              effect={`float`}
              place={`top`}
            />
          </>
        )}
        {addToYourState && (
          <>
            {MakePostLinkTwo().map(({ icon, title }, i) => (
              <div
                key={i}
                className={`${
                  i === 0 ? 'text-green-600  hover:bg-green-100' : ''
                } ${i === 1 ? 'deep_blue  hover:bg-blue-100' : ''} ${
                  i === 2 ? 'text-yellow-600  hover:bg-yellow-100' : ''
                } ${i === 3 ? 'text-red-600  hover:bg-red-100' : ''} ${
                  i === 4 ? 'shade_blue  hover:bg-blue-100' : ''
                } ${
                  i === 5 ? 'text-red-600  hover:bg-red-100' : ''
                } flex flex-row items-center  gap-2 pl-2 mid_small:pr-12 py-2 w-[40%] hover:bg-secondaryWhite rounded-md cursor-pointer `}
              >
                <p
                  className={`${i === 0 ? 'text-green-600 ' : ''} ${
                    i === 1 ? 'deep_blue' : ''
                  } ${i === 2 ? 'text-yellow-600' : ''} ${
                    i === 3 ? 'text-red-600' : ''
                  } ${i === 4 ? 'shade_blue' : ''} ${
                    i === 5 ? 'text-red-600' : ''
                  } text-3xl `}
                  onClick={(e) => IconHandler(e)}
                >
                  {icon}
                </p>
                <h5 className='font-medium text-xs xtra_small:text-md small:text-lg '>
                  {title}
                </h5>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default CreatePostLinks

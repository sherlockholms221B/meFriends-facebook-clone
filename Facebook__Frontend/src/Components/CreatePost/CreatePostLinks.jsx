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
import { forward, iconHandler } from '../../functions/stateHandler'
import { createPostLinks } from '../../utils/links'
import ToolTip from '../ToolTip'

const CreatePostLinks = ({ home }) => {
  const picture = useRef(null)
  const tag = useRef(null)
  const feelings = useRef(null)
  const location = useRef(null)
  const flag = useRef(null)

  const {
    createPostState,
    setCreatePostState,
    addToYourState,
    setAddToYourState,
    postAudienceState,
    setPostAudienceState,
    addPictureState,
    setAddPictureState,
    tagPeopleState,
    setTagPeopleState,
    goBack,
    setGoBack,
  } = useGlobalContext()

  return (
    <div className='flex flex-row gap-2 items-center'>
      <div
        className={`flex flex-row items-center ${
          home ? 'gap-1' : 'flex-wrap  justify-around  gap-4  pt-2 pb-2'
        } cursor-pointer`}
      >
        {createPostState && (
          <>
            {[
              {
                icon: <MdOutlinePhotoLibrary />,
                ref: picture,
                tip: 'photos/video',
              },
              { icon: <FaUserTag />, ref: tag, tip: 'tag poeple' },
              {
                icon: <BsEmojiWink />,
                ref: feelings,
                tip: 'feelings/activity',
              },
              {
                icon: <MdOutlineLocationOn />,
                ref: location,
                tip: 'check in',
              },
              {
                icon: <MdFlag />,
                ref: flag,
                tip: 'life event',
              },
            ].map(({ icon, ref, tip }, i) => (
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
                  i === 4 ? 'text-blue-400  hover:bg-blue-100' : ''
                }  text-2xl p-2 rounded-full`}
                onClick={(e) =>
                  iconHandler({
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
              className='text-xl text-gray-500b rounded-full p-1.5 hover:bg-secondaryWhite cursor-pointer'
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
            {[
              { icon: <MdOutlinePhotoLibrary />, title: 'Photo/Video' },
              { icon: <MdPerson />, title: 'Tag people' },
              { icon: <BsEmojiWink />, title: 'Feeelings/activity' },
              {
                icon: <MdOutlineLocationOn />,
                title: 'Check in',
              },
              {
                icon: <MdFlag />,
                title: 'Life event',
              },
              {
                icon: <MdVideoCall />,
                title: 'Live Video',
              },
            ].map(({ icon, title }, i) => (
              <div
                key={i}
                className={`${
                  i === 0 ? 'text-green-600  hover:bg-green-100' : ''
                } ${i === 1 ? 'text-blue-600  hover:bg-blue-100' : ''} ${
                  i === 2 ? 'text-yellow-600  hover:bg-yellow-100' : ''
                } ${i === 3 ? 'text-red-600  hover:bg-red-100' : ''} ${
                  i === 4 ? 'text-blue-400  hover:bg-blue-100' : ''
                } ${
                  i === 5 ? 'text-red-600  hover:bg-red-100' : ''
                } flex flex-row items-center  gap-2 pl-2 pr-12 py-2 w-[40%] hover:bg-secondaryWhite rounded-md cursor-pointer `}
              >
                <p
                  className={`${i === 0 ? 'text-green-600 ' : ''} ${
                    i === 1 ? 'text-blue-600' : ''
                  } ${i === 2 ? 'text-yellow-600' : ''} ${
                    i === 3 ? 'text-red-600' : ''
                  } ${i === 4 ? 'text-blue-400' : ''} ${
                    i === 5 ? 'text-red-600' : ''
                  } text-3xl `}
                  onClick={(e) => iconHandler(e)}
                >
                  {icon}
                </p>
                <h5 className='font -medium'>{title}</h5>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default CreatePostLinks

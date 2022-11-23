import React from 'react'
import {
  MdSettings,
  MdArrowBack,
  MdPerson,
  MdVideoCall,
  MdOutlineDone,
  MdDoneAll,
  MdDownloadDone,
  MdOutlineLocationOn,
  MdOutlinePhotoLibrary,
} from 'react-icons/md'
import { GiEarthAmerica } from 'react-icons/gi'
import { HiDotsHorizontal, HiLockClosed } from 'react-icons/hi'
import { FaUserFriends } from 'react-icons/fa'

import { useGlobalContext } from '../../Context/UseContext'
import { previous, audience } from '../../utils/Functions'
import MegWrapper from '../MegWrapper'

const PostAudience = () => {
  const {
    createPostState,
    setCreatePostState,
    addToYourState,
    setAddToYourState,
    postAudienceState,
    setPostAudienceState,
    setGoBack,
  } = useGlobalContext()
  return (
    <div
      className={` ${
        postAudienceState ? 'translate_x' : ''
      } bg-white z-20  w-full h-full rounded-lg`}
    >
      <div className='relative flex flex-row py-4 items-center justify-center border-b border-gray-300'>
        <h3 className='text-xl font-bold text-gray-900'>Post audience</h3>
        <p
          className='absolute top-2 left-2 rounded-full hover:bg-gray-400 bg-gray-300 p-2 cursor-pointer'
          onClick={() =>
            previous(setCreatePostState, setPostAudienceState, setGoBack)
          }
        >
          <MdArrowBack className='text-2xl ' />
        </p>
      </div>
      <div className='max-h-[350px] overflow-auto  home_scroll '>
        <div className=''>
          <h4 className=''>Who can see your post?</h4>
          <p className=''>
            Your post will appear in Feed, on your profile and in search
            results.
          </p>
          <p className=''>
            Your default audience is set to Public, but you can change the
            audience of this specific post.
          </p>
        </div>

        {[
          {
            icon: <GiEarthAmerica />,
            title: 'Public',
            description: 'Anyone on or off Facebook',
          },
          {
            icon: <FaUserFriends />,
            title: 'Friends',
            description: 'Your friends on Facebook',
          },
          {
            icon: <HiLockClosed />,
            title: 'Only me',
          },
          {
            icon: <MdPerson />,
            title: 'Specific friends',
            description: 'Only show to some friends',
          },
          {
            icon: <MdSettings />,
            title: 'Custom',
            description: 'Include and exclude friends and lists',
          },
        ].map(({ icon, title, description }, i) => (
          <div className='' key={i + title}>
            <div className=''>
              <p className=''> {icon} </p>
              <div className=''>
                <h3 className=''> {title} </h3>
                <p className=''> {description} </p>
              </div>
            </div>
            <dvi className=' border-2 border-red-500' />
          </div>
        ))}
      </div>
      <div className='relative flex flex-row py-4 items-center justify-center border-t border-gray-300'>
        <div className=''>
          <div className='' />
          <h5 className=''>Set as default audience</h5>
        </div>
        <div className=''>
          <button className='' type='button'>
            Cancle
          </button>
          <button className='' type='button'>
            Done
          </button>
        </div>
      </div>
    </div>
  )
}

export default MegWrapper(PostAudience)

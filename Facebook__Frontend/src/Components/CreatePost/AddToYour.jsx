import React from 'react'
import {
  MdClose,
  MdArrowBack,
  MdArrowForward,
  MdPerson,
  MdOutlineDone,
  MdDoneAll,
  MdDownloadDone,
  MdOutlineLocationOn,
  MdFlag,
  MdOutlinePhotoLibrary,
  MdVideoCall,
} from 'react-icons/md'
import { GiEarthAmerica } from 'react-icons/gi'
import { HiDotsHorizontal, HiLockClosed } from 'react-icons/hi'
import { FaUserFriends } from 'react-icons/fa'
import { GoTriangleDown } from 'react-icons/go'
import { BsEmojiWink } from 'react-icons/bs'

import MegWrapper from '../MegWrapper'
import { Head, CreatePostLinks } from '../index'
import { useGlobalContext } from '../../Context/UseContext'
import { forward, IconHandler, previous } from '../../functions/SH'

const AddToYour = () => {
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
        addToYourState ? 'translate_x' : ''
      }  z-20  w-full h-full rounded-lg dark:border dark:border-borderDark`}
    >
      <Head
        title={`Add to your post`}
        setFirstState={setCreatePostState}
        setSecondState={setAddToYourState}
        setThirdState={setGoBack}
      />
      <CreatePostLinks home={false} />
    </div>
  )
}

export default MegWrapper(AddToYour)

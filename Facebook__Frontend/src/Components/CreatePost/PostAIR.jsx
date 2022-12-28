import React from 'react'
import { useGlobalContext } from '../../Context/UseContext'
import { Icon } from '../../utils/Icon'

const PostAIR = () => {
  const { audState } = useGlobalContext()
  return (
    <>
      {audState === 'Public' && <Icon.GiEarthAmerica />}
      {audState === 'Friends' && <Icon.FaUserFriends />}
      {audState === 'Only me' && <Icon.HiLockClosed />}
      {audState === 'Specific friends' && <Icon.MdPerson />}
      {audState === 'Custom' && <Icon.MdSettings />}
    </>
  )
}

export default PostAIR

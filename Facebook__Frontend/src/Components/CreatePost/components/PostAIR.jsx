import React from 'react'

//import custom icons
import { Icon } from '../../../utils/Icon'

const PostAIR = ({ state }) => {
  return (
    <React.Fragment>
      {state === 'Public' && <Icon.GiEarthAmerica />}
      {state === 'Friends' && <Icon.FaUserFriends />}
      {state === 'Only me' && <Icon.HiLockClosed />}
      {state === 'Specific friends' && <Icon.MdPerson />}
      {state === 'Custom' && <Icon.MdSettings />}
    </React.Fragment>
  )
}

export default PostAIR

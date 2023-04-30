import React from 'react'

//import custom icons
import { Icon } from '../../utils/Icon'

//import higer order commponent
import MegWrapper from '../../Components/MegWrapper'

//import re useable components
import { Input } from '../../Components'

//lazy loading of components
const MessageRoot = React.lazy(() => {
  return import('./MessageRoot')
})
const Messages = () => {
  const [searchChats, setSearchChats] = React.useState('')

  return (
    <MessageRoot
      title='Chats'
      actionButton={[
        {
          icon: <Icon.HiDotsHorizontal />,
        },
        {
          icon: <Icon.ImEnlarge />,
        },
        { icon: <Icon.MdVideoCall /> },
        {
          icon: <Icon.BiMessageAltEdit />,
        },
      ]}
    >
      <Input
        type={`text`}
        name={`chats`}
        placeholder={`Search Messenger`}
        handleChange={(e) => setSearchChats(e.target.value)}
        value={searchChats}
      />
      <Icon.MdOutlineSearch className='absolute top-2 left-6 text-gray-600 dark:text-thlight500 text-2xl cursor-pointer ' />
    </MessageRoot>
  )
}

export default MegWrapper(Messages)

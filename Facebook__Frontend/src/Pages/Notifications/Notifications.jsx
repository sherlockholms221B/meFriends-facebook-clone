import React from 'react'

import MessageRoot from './NotificationRoots'
import { Icon } from '../../utils/Icon'
import MegWrapper from '../../Components/MegWrapper'
import { Input } from '../../Components'
const Notifications = () => {
  const [searchChats, setSearchChats] = React.useState('')

  return (
    <MessageRoot
      title='Notifications'
      actionButton={[
        {
          icon: <Icon.TbDots />,
        },
      ]}
    >
      <article className='w-full flex flex-row flex-nowrap justify-start items-center gap-4 pl-2 mt-2'>
        {[
          {
            title: 'All',
          },
          {
            title: 'Unread',
          },
        ].map(({ title }, index) => (
          <div className='px-2 py-1 rounded bg-[#0c449f24]' key={index}>
            <h5 className='text-blue-600 text-base font-medium'>{title}</h5>
          </div>
        ))}
      </article>
    </MessageRoot>
  )
}

export default MegWrapper(Notifications)

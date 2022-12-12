import React from 'react'
import {
  MdOutlineNotifications,
  MdOutlineCancelPresentation,
  MdSchedule,
  MdSecurity,
  MdOutlineAutoAwesomeMotion,
  MdOutlineFolderShared,
  MdBookmarkBorder,
  MdOutlineHistory,
} from 'react-icons/md'

import { DynamicMenu } from '../index'

const PostOptions = ({ addOptions }) => {
  return (
    <>
      {addOptions ? (
        <div className='mr-4 ml-1'>
          {[
            {
              title: 'Hide ad',
              explanation: 'Never see this add again',
              icon: <MdOutlineCancelPresentation />,
            },
            {
              title: 'Report ad',
              explanation: 'Tell us about a problem with this ad',
              icon: <MdOutlineFolderShared />,
            },
          ].map((option) => (
            <div
              className='flex flex-row gap-2 items-center mt-1 mb-1 px-2 py-1 cursor-pointer rounded-md hover:bg-primary'
              key={option.title}
            >
              <p className='text-2xl text-gray-600'>{option.icon}</p>
              <div className='flex flex-col'>
                <h3 className='text-md font-semibold text-gray-600'>
                  {option.title}
                </h3>
                <p className='text-[12px] text-gray-400'>
                  {option?.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='mr-4 ml-1'>
          <div className=' border-b-[2px]  brder-[#E3E3E3] pt-2 pb-3'>
            <div className='flex flex-row items-center gap-2 cursor-pointer hover:bg-primary p-1 rounded-md '>
              <MdBookmarkBorder className='text-2xl text-gray-600' />
              <div className='flex flex-col'>
                <h3 className='text-md font-semibold text-gray-600'>
                  Save Post
                </h3>
                <p className='text-[12px] text-gray-400'>
                  Add this to your saved items
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col border-b-[2px] brder-[#E3E3E3] pt-2 pb-2 gap-2'>
            {[
              {
                title: 'View edit history',
                icon: <MdOutlineHistory />,
              },
              {
                title: 'Turn on notifications for this post',
                icon: <MdOutlineNotifications />,
              },
            ].map((option) => (
              <div className='flex flex-row items-center gap-2 cursor-pointer hover:bg-primary p-1 rounded-md '>
                <p className='text-2xl text-gray-600'> {option.icon} </p>
                <h3 className='text-md font-semibold text-gray-600'>
                  {option.title}
                </h3>
              </div>
            ))}
          </div>

          {[
            { title: 'Report post to group admins', icon: <MdSecurity /> },
            {
              title: 'Hide post',
              explanation: 'see fewer posts like this',
              icon: <MdOutlineCancelPresentation />,
            },
            {
              title: 'Snooze progremmer facts for 30 days',
              explanation: 'Temporarily stop seeing this post',
              icon: <MdSchedule />,
            },
            {
              title: 'Hide all from programming facts',
              explanation: 'Stop seeing posts from this page',
              icon: <MdOutlineAutoAwesomeMotion />,
            },
            {
              title: 'Snooze progremmer for 30 days',
              explanation: 'Temporarily stop seeing this post',
              icon: <MdSchedule />,
            },
            {
              title: 'Unfollow progremmer',
              explanation: 'stop seeing post but stay in group',
              icon: <MdOutlineAutoAwesomeMotion />,
            },
            {
              title: 'Report post',
              explanation: "I'm concerned about this post",
              icon: <MdOutlineFolderShared />,
            },
          ].map((option) => (
            <div
              className='flex flex-row gap-2 items-center mt-1 mb-1 px-2 py-1 cursor-pointer rounded-md hover:bg-primary'
              key={option.title}
            >
              <p className='text-2xl text-gray-600'>{option.icon}</p>
              <div className='flex flex-col'>
                <h3 className='text-md font-semibold text-gray-600'>
                  {option.title}
                </h3>
                <p className='text-[12px] text-gray-400'>
                  {option?.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default DynamicMenu(PostOptions)

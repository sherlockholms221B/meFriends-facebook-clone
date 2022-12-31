import React from 'react'
import { motion } from 'framer-motion'
import { BsCodeSlash } from 'react-icons/bs'
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

const PostOptions = () => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1], scale: [0, 1] }}
      transition={{ duration: 0.4, ease: 'linear' }}
      className=' opacity-0 vertical_scroll rounded-tl-lg rounded-b-lg  shadow-lg z-10 h-[400px] overflow-auto absolute top-10 right-10 bg-white p-2 dark:bg-darkSecondary dark:shadow-black dark:shadow-sm'
    >
      <div className='mr-4 ml-1'>
        <div className=' border-b-[2px]  dark:border-borderDark pt-2 pb-3'>
          <div className='flex flex-row items-center gap-2 cursor-pointer dark:hover:bg-darkComplementry hover:bg-primary p-1 rounded-md '>
            <MdBookmarkBorder className='text-2xl text-gray-600 dark:text-heading_dark_white' />
            <div className='flex flex-col'>
              <h3 className='text-md font-semibold text-gray-600 dark:text-heading_dark_white'>
                Save Post
              </h3>
              <p className='text-[12px] text-gray-400 dark:text-heading_dark_gray'>
                Add this to your saved items
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col border-b-[2px] border-borderDark pt-2 pb-2 gap-2'>
          {[
            {
              title: 'View edit history',
              icon: <MdOutlineHistory />,
            },
            {
              title: 'Turn on notifications for this post',
              icon: <MdOutlineNotifications />,
            },
            {
              title: 'Embed',
              icon: <BsCodeSlash />,
            },
          ].map((option) => (
            <div className='flex flex-row items-center gap-2 cursor-pointer dark:hover:bg-darkComplementry hover:bg-primary px-1 py-2 rounded-md '>
              <p className='text-2xl text-gray-600 dark:text-heading_dark_white'>
                {' '}
                {option.icon}{' '}
              </p>
              <h3 className='text-md font-semibold text-gray-600 dark:text-heading_dark_white'>
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
            className='flex flex-row gap-2 items-center mt-1 mb-1 px-2 py-2 cursor-pointer rounded-md dark:hover:bg-darkComplementry hover:bg-primary'
            key={option.title}
          >
            <p className='text-2xl text-gray-600 dark:text-heading_dark_white'>
              {option.icon}
            </p>
            <div className='flex flex-col'>
              <h3 className='text-md font-semibold text-gray-600 dark:text-heading_dark_white'>
                {option.title}
              </h3>
              <p className='text-[12px] text-gray-400 dark:text-heading_dark_gray'>
                {option?.explanation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default PostOptions

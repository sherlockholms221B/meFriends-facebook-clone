import React from 'react'

//import framer motion module
import { motion } from 'framer-motion'

//import custom react icons
import { Icon } from '../../utils/Icon'

const PostOptions = ({ isChat }) => {
  return (
    <motion.section
      whileInView={{ opacity: [0, 1], scale: [0, 1] }}
      transition={{ duration: 0.15, ease: 'easeInOut' }}
      className={
        (isChat
          ? ' -left-full top-5'
          : 'top-full right-2 left-2  mdxs:top-10 mdxs:right-10 mdxs:left-auto') +
        ' opacity-0  rounded-tl-lg rounded-b-lg  shadow-lg z-10 h-[400px] overflow-auto absolute bg-white p-2 dark:bg-dark400 dark:shadow-black dark:shadow-sm '
      }
    >
      <div className='mr-4 ml-1'>
        <section className=' border-b-[2px]  dark:border-bd500 pt-2 pb-3'>
          <div className='flex flex-row items-center gap-2 cursor-pointer dark:hover:bg-dark300 hover:bg-light500 p-1 rounded-md '>
            <Icon.MdBookmarkBorder className='text-2xl text-gray-600 dark:text-thdark500' />
            <article className='flex flex-col'>
              <h3 className='text-md font-semibold text-gray-600 dark:text-thdark500'>
                Save Post
              </h3>
              <p className='text-[12px] text-gray-400 dark:text-thlight500'>
                Add this to your saved items
              </p>
            </article>
          </div>
        </section>
        <section className='flex flex-col border-b-[2px] border-bd500 pt-2 pb-2 gap-2'>
          {[
            {
              title: 'View edit history',
              icon: <Icon.MdOutlineHistory />,
            },
            {
              title: 'Turn on notifications for this post',
              icon: <Icon.MdOutlineNotifications />,
            },
            {
              title: 'Embed',
              icon: <Icon.BsCodeSlash />,
            },
          ].map((option) => (
            <div className='flex flex-row items-center gap-2 cursor-pointer dark:hover:bg-dark300 hover:bg-light500 px-1 py-2 rounded-md '>
              <p className='text-2xl text-gray-600 dark:text-thdark500'>
                {option.icon}
              </p>
              <h3 className='text-md font-semibold text-gray-600 dark:text-thdark500'>
                {option.title}
              </h3>
            </div>
          ))}
        </section>

        {[
          { title: 'Report post to group admins', icon: <Icon.MdSecurity /> },
          {
            title: 'Hide post',
            explanation: 'see fewer posts like this',
            icon: <Icon.MdOutlineCancelPresentation />,
          },
          {
            title: 'Snooze progremmer facts for 30 days',
            explanation: 'Temporarily stop seeing this post',
            icon: <Icon.MdSchedule />,
          },
          {
            title: 'Hide all from programming facts',
            explanation: 'Stop seeing posts from this page',
            icon: <Icon.MdOutlineAutoAwesomeMotion />,
          },
          {
            title: 'Snooze progremmer for 30 days',
            explanation: 'Temporarily stop seeing this post',
            icon: <Icon.MdSchedule />,
          },
          {
            title: 'Unfollow progremmer',
            explanation: 'stop seeing post but stay in group',
            icon: <Icon.MdOutlineAutoAwesomeMotion />,
          },
          {
            title: 'Report post',
            explanation: "I'm concerned about this post",
            icon: <Icon.MdOutlineFolderShared />,
          },
        ].map((option) => (
          <div
            className='flex flex-row gap-2 items-center mt-1 mb-1 px-2 py-2 cursor-pointer rounded-md dark:hover:bg-dark300 hover:bg-light500'
            key={option.title}
          >
            <p className='text-2xl text-gray-600 dark:text-thdark500'>
              {option.icon}
            </p>
            <article className='flex flex-col'>
              <h3 className='text-md font-semibold text-gray-600 dark:text-thdark500'>
                {option.title}
              </h3>
              <p className='text-[12px] text-gray-400 dark:text-thlight500'>
                {option?.explanation}
              </p>
            </article>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default PostOptions

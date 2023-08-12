import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../../../utils/Icon';

const PostOptions = ({ isChat }) => {
  const renderOptionSection = (optionsArray) => (
    <section className='flex flex-col border-b-[2px] border-bd500 pt-2 pb-2 gap-2'>
      {optionsArray.map((option) => (
        <div
          className='flex flex-row items-center gap-2 cursor-pointer dark:hover:bg-dark300 hover:bg-light500 px-1 py-2 rounded-md '
          key={option.title}
        >
          <p className='text-2xl text-gray-600 dark:text-thdark500'>
            {option.icon}
          </p>
          <h3 className='text-md font-semibold text-gray-600 dark:text-thdark500'>
            {option.title}
          </h3>
        </div>
      ))}
    </section>
  );

  const savePostOption = (
    <section className='border-b-[2px] dark:border-bd500 pt-2 pb-3'>
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
  );

  const topOptionsArray = [
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
  ];

  const otherOptionsArray = [
    { title: 'Report post to group admins', icon: <Icon.MdSecurity /> },
    {
      title: 'Hide post',
      explanation: 'see fewer posts like this',
      icon: <Icon.MdOutlineCancelPresentation />,
    },
    {
      title: 'Snooze programmer facts for 30 days',
      explanation: 'Temporarily stop seeing this post',
      icon: <Icon.MdSchedule />,
    },
    {
      title: 'Hide all from programming facts',
      explanation: 'Stop seeing posts from this page',
      icon: <Icon.MdOutlineAutoAwesomeMotion />,
    },
    {
      title: 'Snooze programmer for 30 days',
      explanation: 'Temporarily stop seeing this post',
      icon: <Icon.MdSchedule />,
    },
    {
      title: 'Unfollow programmer',
      explanation: 'stop seeing post but stay in group',
      icon: <Icon.MdOutlineAutoAwesomeMotion />,
    },
    {
      title: 'Report post',
      explanation: "I'm concerned about this post",
      icon: <Icon.MdOutlineFolderShared />,
    },
  ];

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
        {savePostOption}
        {renderOptionSection(topOptionsArray)}
        {renderOptionSection(otherOptionsArray)}
      </div>
    </motion.section>
  );
};

export default PostOptions;

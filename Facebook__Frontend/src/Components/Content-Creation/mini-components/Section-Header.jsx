import React from 'react';
import { Icon } from '../../../utils/Icon';
import { previous } from '../../../Functions/utilities/SH';

const SectionHeader = ({
  title,
  setFirstState,
  setSecondState,
  setThirdState,
}) => {
  const handleBackClick = () => {
    previous(setFirstState, setSecondState, setThirdState);
  };

  return (
    <section className='relative flex flex-row py-4 items-center justify-center border-b border-gray-300 dark:border-bd500'>
      <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
        {title}
      </h3>
      <p
        className='absolute dark:shadow-black dark:shadow-sm dark:bg-dark300 top-2 left-2 rounded-full hover:bg-light300 bg-gray-300 p-2 cursor-pointer'
        onClick={handleBackClick}
      >
        <Icon.MdArrowBack className='text-2xl dark:text-white' />
      </p>
    </section>
  );
};

export default SectionHeader;

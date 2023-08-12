import React from 'react';
import { ActiveMarker } from '../../Miscellaneous/module';
import Redirect from '../../../examples/SoftRedirect';

const SlideLinks = ({ page, index }) => {
  const linkKey = `${index}${page.title}`;
  const linkUrl = `${page.url}?talling=${page.title}`;
  const linkStyles =
    'group relative hover:bg-inherit lg:hover:bg-light500 lg:dark:hover:bg-dark300 flex flex-row gap-2.5 items-center w-full rounded-md py-1 pl-1';

  return (
    <Redirect key={linkKey} link={linkUrl} customstyles={linkStyles}>
      {page.icon}
      <p className='text-md text-gray-800 font-semibold dark:text-thdark500 hidden lg:block tracking-wider'>
        {page.title}
      </p>
      <ActiveMarker page={page.title} current={null} />
    </Redirect>
  );
};

export default SlideLinks;

import React from 'react';
// Utils and functions
import { Icon } from '../../../utils/Icon';

const ZoomControl = () => {
  // Define an array of icon components with their respective names and icons
  const iconsData = [
    { name: 'zoomIn', icon: <Icon.BiZoomIn /> },
    { name: 'zoomOut', icon: <Icon.BiZoomOut /> },
    { name: 'tags', icon: <Icon.BsTagsFill /> },
    { name: 'expand', icon: <Icon.FaExpandAlt /> },
  ];

  return (
    <section className='absolute flex justify-end items-center top-0 right-0 w-full'>
      <div className='flex items-center justify-end gap-8 mr-4 py-1'>
        {/* Use map to render each icon */}
        {iconsData.map(({ name, icon }) => (
          <div key={name} className='text-2xl text-thdark500'>
            {icon}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ZoomControl;

import React from 'react';

const CustomFooter = ({ hidden }) => {
  const footerClass = hidden ? 'hidden mdsm:block' : '';

  return (
    <section className={`mt-2 mb-1 ${footerClass}`}>
      <p className='text-sm dark:text-thdark500'>
        Privacy · Terms · Advertising · Ad choices · Cookies ·{' '}
        <span className='cursor-pointer'>more</span> · Meta © 2022
      </p>
    </section>
  );
};

export default CustomFooter;

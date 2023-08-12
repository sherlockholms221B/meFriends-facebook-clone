import React from 'react';

const EmptyState = ({ title, msg, children }) => {
  return (
    <section
      className={`${title} flex justify-center items-center w-full h-full`}
    >
      <h3 className='text-sm font-medium text-gray-600'>{msg}</h3>
      {children}
    </section>
  );
};

export default EmptyState;

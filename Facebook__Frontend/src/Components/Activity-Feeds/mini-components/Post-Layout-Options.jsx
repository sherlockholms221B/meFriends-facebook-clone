import React, { useState } from 'react';
import { Icon } from '../../../utils/Icon';
import { active, notActive } from '../styles';

const PostLayoutOptions = () => {
  const [location, setLocation] = useState('List view');

  const options = [
    {
      name: 'List view',
      icon: <Icon.BsList />,
    },
    {
      name: 'Grid view',
      icon: <Icon.IoGrid />,
    },
  ];

  const actions = [
    {
      title: 'Filters',
      icon: (
        <Icon.MdOutlineCompareArrows className='text-2xl dark:text-thdark500' />
      ),
    },
    {
      title: 'Manage posts',
      icon: <Icon.MdSettings className='text-2xl dark:text-thdark500' />,
    },
  ];

  return (
    <section className='dark:bg-dark400 bg-white rounded-md shadow-lg md:order-2  mt-4'>
      <section className='flex flex-row items-center w-full justify-between px-4 border-b-2 border-gray-300 dark:border-[#3a3b3c] py-1'>
        <strong className='text-sm mdsm:text-base lg:text-xl tracking-wide dark:text-thdark500'>
          Posts
        </strong>
        <div className='flex flex-row items-center justify-end gap-2 py-1.5 cursor-pointer'>
          {actions.map(({ title, icon }, index) => (
            <article
              className='flex items-center flex-nowrap gap-2 rounded-md p-1.5 mdxs:px-3 mdxs:py-2 bg-light500 dark:bg-dark300 hover:bg-light300'
              key={index}
            >
              {icon}
              <strong className='dark:text-thdark500 text-sm mdsm:text-lg tracking-tight text-zinc-600 font-[500]'>
                {title}
              </strong>
            </article>
          ))}
        </div>
      </section>
      <section className='flex flex-row flex-nowrap justify-between capitalize px-4 transition-colors'>
        {options.map(({ name, icon }, index) => (
          <button
            className={
              location === name
                ? active()
                : index === 0 && location === null
                ? active()
                : notActive()
            }
            onClick={() => setLocation(name)}
            key={index + name}
          >
            <article className='flex flex-row flex-nowrap gap-2 items-center'>
              <p className='font-bold text-md mdsm:text-2xl'>{icon} </p>
              <b className='text-sm mdsm:text-lg'>{name}</b>
            </article>
          </button>
        ))}
      </section>
    </section>
  );
};

export default PostLayoutOptions;

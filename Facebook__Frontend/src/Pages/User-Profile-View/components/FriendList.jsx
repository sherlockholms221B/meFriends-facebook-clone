import React from 'react';

//import data
import { storiesbox } from '../../utils/constants';

const FriendList = () => {
  return (
    <section className='bg-white dark:bg-dark400 rounded-lg p-3 flex flex-col gap-5  '>
      <div className='flex items-start justify-between'>
        <article>
          <h2 className='text-xl font-bold dark:text-thdark500'>Friend</h2>
          <p className='text-md text-gray-500 dark:text-thlight500'>
            4,108 friends
          </p>
        </article>
        <button className='capitalize font-normal text-lg text-center ring-2 dark:ring-blue-500 rounded-md px-2 py-1 text-blue-500'>
          See all friends
        </button>
      </div>

      <section className='flex flex-row flex-wrap items-baseline gap-2 justify-between '>
        {storiesbox.map(({ creator, talling }, i) => (
          <figure
            key={i}
            className={`${i > 8 && 'hidden'} mdxs:w-28 w-20 h-fit`}
          >
            <img
              src={talling}
              alt='friends'
              className={`mdxs:w-28 mdxs:h-28 w-20 h-20 ${
                i > 8 && 'hidden'
              }  rounded-xl flex-1 `}
            />
            <figcaption>
              <h3
                className={`${
                  i > 8 && 'hidden'
                } dark:text-thdark500 capitalize text-md text-start`}
              >
                {creator}
              </h3>
            </figcaption>
          </figure>
        ))}
      </section>
    </section>
  );
};

export default FriendList;

import React from 'react';

//import data
import { storiesbox } from '../../utils/constants';

const PhotoGallery = () => {
  return (
    <section className='bg-white dark:bg-dark400 rounded-lg p-3 flex flex-col gap-5  '>
      <section className='flex items-center justify-between'>
        <h2 className='text-xl font-bold dark:text-thdark500'>PhotoGallery </h2>
        <button className='capitalize font-normal text-lg text-center ring-2 dark:ring-blue-500 rounded-md px-2 py-1 text-blue-500'>
          See all Photos
        </button>
      </section>

      <section className='flex flex-row flex-wrap items-center gap-2 justify-between'>
        {storiesbox.map(({ talling }, i) => (
          <figure
            key={i}
            className={`${i > 8 && 'hidden'} mdxs:w-28 w-20 h-fit`}
          >
            <img
              src={talling}
              alt='photos'
              className={`mdxs:w-28 mdxs:h-28 w-32 h-20  ${
                i > 8 && 'hidden'
              }  ${i === 6 ? 'rounded-bl-xl' : i === 8 && 'rounded-br-xl'} ${
                i === 0 ? 'rounded-tl-xl' : i === 2 && 'rounded-tr-xl'
              } flex-1`}
            />
          </figure>
        ))}
      </section>
    </section>
  );
};

export default PhotoGallery;

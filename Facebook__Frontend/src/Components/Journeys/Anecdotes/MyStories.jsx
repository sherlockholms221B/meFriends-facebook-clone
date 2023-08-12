import React from 'react';
import { RiAddLine } from 'react-icons/ri';

import { storiesbox } from '../../../utils/constants';
import { SoftSwipeLayout } from '../../../examples';
import useAuthStore from '../../../Store/AuthStore';
import { urlFor } from '../../../utils/client';
import Redirect from '../../../examples/SoftRedirect';

const MyStories = () => {
  const { userProfile } = useAuthStore();

  return (
    <SoftSwipeLayout data={storiesbox} title='story'>
      <section className='w-28 h-48 rounded-md mdxs:rounded-lg shadow-lg z-10 border dark:border-bd500'>
        <Redirect link='/profile' customstyles=''>
          <figure className='group dark:bg-dark400 flex flex-col w-full h-full rounded-md mdxs:rounded-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out relative text-center'>
            <img
              src={urlFor(userProfile?.profileImage.asset).url()}
              alt='str'
              className='w-full h-[70%] object-cover group-hover:brightness-75 rounded-t-lg'
            />
            <figcaption className='h-[30%]'>
              <h1 className='text-gray-600 text-xs mdxs:text-sm mdsm:text-base font-semibold rounded-b-lg pt-4 px-1'>
                Create story
              </h1>
            </figcaption>
            <article className='animate-pulse ring-4 ring-white dark:ring-[#242526] rounded-full cursor-pointer absolute top-[55%] right-[35%] bg-blue-700 p-1 z-10'>
              <RiAddLine className='text-white text-2xl font-bold' />
            </article>
          </figure>
        </Redirect>
      </section>
    </SoftSwipeLayout>
  );
};

export default MyStories;

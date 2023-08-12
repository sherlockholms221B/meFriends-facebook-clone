import React from 'react';
import { Link } from 'react-router-dom';

const StoryCard = ({
  tallings: {
    creator,
    profile: [{ profileImage }],
    talling,
  },
}) => {
  return (
    <Link
      to={`/story/details/photo?fbid=${'544657569769743763856776056734384697367458468744835'}`}
      className='w-full h-full ring-2 dark:ring-slate-700 ring-white shadow-md shadow-slate-700 rounded-lg'
    >
      <article className='group max-w-28 h-full overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out relative text-center'>
        <img
          src={talling}
          alt='story'
          className='w-full h-full object-cover transition-all group-hover:scale-105 group-hover:brightness-75'
        />
        <figure className='border-4 border-blue-700 rounded-full cursor-pointer absolute top-4 left-4 group-hover:z-20'>
          <img
            src={profileImage}
            alt='profile'
            className='object-cover w-8 h-8 rounded-full'
          />
        </figure>
        <h1 className='absolute bottom-2 left-1 text-white text-md font-medium capitalize'>
          {creator}
        </h1>
      </article>
    </Link>
  );
};

export default StoryCard;

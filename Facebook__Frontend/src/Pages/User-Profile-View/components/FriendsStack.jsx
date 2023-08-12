import React from 'react';

const FriendsStack = ({ comments, isDetailsView }) => {
  return (
    <React.Fragment>
      {comments.map(({ profile: [{ profileImage }] }, index) => (
        <div className='relative' key={index}>
          <img
            src={profileImage}
            alt='friends'
            className={`${
              !isDetailsView ? 'absolute w-9 h-9' : 'w-7 h-7'
            } rounded-full ${
              index <= 8 ? `left-${index * 8}` : 'hidden'
            } ring-2 ring-white hover:z-10 shadow-md transition-all cursor-pointer`}
          />
        </div>
      ))}
    </React.Fragment>
  );
};

export default FriendsStack;

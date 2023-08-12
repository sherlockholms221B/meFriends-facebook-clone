import React from 'react';
import moment from 'moment';
import UserProfile from '../../../Profile';
import Redirect from '../../../../examples/SoftRedirect';

const SingleComment = ({ postedBy, isComment, createdAt, comment }) => {
  const formattedDate = moment(createdAt).fromNow();

  if (!isComment) {
    return null; // Don't render if it's not a comment
  }

  return (
    <section className={`flex flex-row items-start mt-2 mb-1`}>
      <Redirect link='/profile' customstyles='cursor-pointer mr-3'>
        <UserProfile data={postedBy} />
      </Redirect>
      <div
        className={`flex flex-col w-full items-start rounded-lg dark:bg-dark400 bg-light500 py-2 px-2 shadow-md shadow-black z-[4]`}
      >
        <div
          className={`w-full rounded-lg p-2 mb-1 capitalize text-md font-medium bg-light500 dark:bg-dark300 hover:bg-light300 placeholder:text-gray-600 dark:placeholder:text-thlight500 dark:text-white dark:focus:bg-dark300`}
        >
          <h2 className={`text-md font-semibold capitalize tracking-wide `}>
            {postedBy?.userName}
          </h2>
          <p
            className={`text-sm text-gray-700 dark:text-thlight500 tracking-normal`}
          >
            {comment}
          </p>
        </div>
        <div className={`text-sm text-gray-500 dark:text-gray-400`}>
          {formattedDate}
        </div>
      </div>
    </section>
  );
};
export default SingleComment;

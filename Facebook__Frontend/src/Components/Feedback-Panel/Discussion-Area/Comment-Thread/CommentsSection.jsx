import React, { useEffect, useState } from 'react';

//import components

import {CommentInput,SingleComment} from '../../module';

const CommentsSection = ({
  comments,
  postDetail,
  postId,
  isComment,
  setIsComment,
  value,
  setValue,
}) => {
  const additionalCommentsToShow = 4;

  const [showAllComments, setShowAllComments] = useState(false);
  const [commentsToShow, setCommentsToShow] = useState(0);

  useEffect(() => {
    // Generate a random number between 0 and 1
    function generateRandomNumber(min, max) {
      return Math.floor(Math.random() * max) + min;
    }

    // Set the initial number of comments to 1, 2, or 3 based on the random number
    const initialComments = generateRandomNumber(1, 3);

    if (commentsToShow > 3) {
      setCommentsToShow(initialComments);
      setShowAllComments(false);
    } else {
      setCommentsToShow(initialComments);
    }
    // eslint-disable-next-line
  }, [isComment]);

  const visibleComments = showAllComments
    ? comments
    : comments?.slice(0, commentsToShow);

  const handleViewMoreComments = () => {
    // Calculate the next number of comments to display
    const newCommentsToShow = commentsToShow + additionalCommentsToShow;

    // Check if there are more comments to load
    if (newCommentsToShow < comments?.length) {
      setCommentsToShow(newCommentsToShow);
    } else {
      // If all comments are already loaded, show all comments
      setShowAllComments(true);
    }
  };

  return (
    <section
      className={' flex flex-col justify-between ' + (isComment && 'p-2')}
    >
      {isComment && (
        <>
          {postDetail && (
            <CommentInput value={value} setValue={setValue} postId={postId} />
          )}
          {visibleComments?.map(({ comment, postedBy, createdAt }, index) => (
            <SingleComment
              key={index}
              isComment={isComment}
              setIsComment={setIsComment}
              comment={comment}
              createdAt={createdAt}
              postedBy={postedBy}
            />
          ))}
          {!showAllComments && commentsToShow < comments?.length && (
            <button
              onClick={handleViewMoreComments}
              className='text-sm text-gray-500 dark:text-thlight500 font-medium self-start ml-14 mt-2 animate-pulse'
            >
              View more comments.
            </button>
          )}
        </>
      )}
    </section>
  );
};

export default CommentsSection;

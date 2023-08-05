import React from 'react';
import { GrSend } from 'react-icons/gr';
import { Input, Profile } from '../index';
import { createComment } from '../../Functions/actions/external';
import useAuthStore from '../../Store/AuthStore';
import { useGlobalContext } from '../../Hooks/context/UseContext';

const CommentInput = ({ value, setValue, postId }) => {
  const { userProfile } = useAuthStore();
  const {
    externalAction: [state, dispatchCall],
  } = useGlobalContext();

  const emojis = ['🙂', '❤️', '👍', '🤔', '🎉']; // Add more emojis here if needed
  const handleEmojiClick = (emoji) => {
    setValue((prevValue) => prevValue + emoji); // Append the selected emoji to the current input value
  };
  const handleCreateComment = () => {
    createComment(dispatchCall, {
      userId: userProfile?._id,
      postId,
      commentText: value,
    });

    // Clear the comment input field after creating the comment
    setValue('');
  };
  return (
    <div className='flex flex-col mb-4 flex-1'>
      <div className='flex flex-row items-start mb-2'>
        <Profile link='/backface/api/profile' size />
        <div className='flex flex-col flex-grow ml-4 p-2 rounded-md bg-light500 dark:bg-dark300 hover:bg-light300 placeholder:text-gray-600 dark:placeholder:text-thlight500 dark:text-white dark:focus:bg-dark300'>
          <Input
            handleChange={(e) => setValue(e.target.value)}
            value={value}
            type={`text`}
            name={`comment`}
            placeholder={`Write a comment`}
          />
          <div className='flex flex-row flex-grow items-center justify-between'>
            <div className='flex flex-row items-center'>
              {emojis.map((emoji, index) => (
                <div
                  key={index}
                  className='emoji-container rounded-full p-2 hover:shadow-lg cursor-pointer'
                  onClick={() => handleEmojiClick(emoji)}
                >
                  <span
                    role='img'
                    aria-label={`Emoji ${index}`}
                    className='text-xl'
                  >
                    {emoji}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={handleCreateComment}
              className={`px-4 py-2 ml-2 rounded ${
                value.trim() === ''
                  ? 'bg-gray-500'
                  : 'bg-blue-500 text-white emoji-container hover:shadow-lg '
              }`}
              disabled={value.trim() === ''}
            >
              <GrSend
                className={` text-xl ${
                  value.trim() === '' ? ' text-white' : 'text-blue-500'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;

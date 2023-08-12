// MainComponent.js
import React, { useState } from 'react';
import ShareModal from './ShareModal';
import { RiShareForwardLine } from 'react-icons/ri';

const Share = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleOpenModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSharePost = (recipient, message) => {
    // Implement the share logic here based on the recipient, message, and selectedPost
    console.log(
      'Sharing Post:',
      selectedPost,
      'to',
      recipient,
      'with message:',
      message
    );
  };

  // Example post data (replace this with your actual post data)
  const posts = [
    { id: 1, content: 'This is post 1' },
    { id: 2, content: 'This is post 2' },
    { id: 3, content: 'This is post 3' },
  ];

  return (
    <div>
      <button
        onClick={() => handleOpenModal(posts)}
        className='flex flex-row flex-nowrap justify-center  items-center sm:dark:hover:bg-dark300 sm:hover:bg-light500 bg-light500 dark:bg-dark300 sm:dark:bg-inherit sm:rounded-[3px] rounded-full px-6 xs:px-8 py-2 cursor-pointer '
      >
        <RiShareForwardLine className='text-xl font-bold text-gray-500 mr-1  dark:text-thlight500' />
        <p className='hidden sm:block text-sm xs:text-md text-gray-500 font-semibold dark:text-thlight500'>
          Share
        </p>
      </button>
      <ShareModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onShare={handleSharePost}
      />
    </div>
  );
};

export default Share;

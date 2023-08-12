// ShareModal.js
import React, { useState } from 'react';

const ShareModal = ({ open, onClose, onShare }) => {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const handleShare = () => {
    // You can perform the share action here and then close the modal
    onShare(recipient, message);
    onClose();
  };

  if (!open) return null;

  return (
    <div className='fixed z-10 inset-0 overflow-y-auto'>
      {/* ... modal content as before ... */}
      <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
        <h3
          className='text-lg leading-6 font-semibold text-gray-900'
          id='modal-headline'
        >
          Share Post
        </h3>
        <div className='mt-4'>
          {/* Add your share form elements here */}
          <label
            htmlFor='recipient'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Recipient:
          </label>
          <input
            type='text'
            id='recipient'
            name='recipient'
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
            placeholder="Enter recipient's timeline or group"
          />
          <label
            htmlFor='message'
            className='block text-gray-700 text-sm font-bold mt-4 mb-2'
          >
            Message:
          </label>
          <textarea
            id='message'
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
            placeholder='Add an optional message'
            rows='3'
          ></textarea>
        </div>
      </div>
      {/* ... other modal content as before ... */}
      <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
        <button
          onClick={handleShare}
          type='button'
          className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 sm:ml-3 sm:w-auto sm:text-sm'
        >
          Share
        </button>
        <button
          onClick={onClose}
          type='button'
          className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300 sm:mt-0 sm:w-auto sm:text-sm'
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ShareModal;

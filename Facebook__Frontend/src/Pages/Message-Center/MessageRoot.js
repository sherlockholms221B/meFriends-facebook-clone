// Import necessary modules and components from external files
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { comments } from '../../utils/constants';
import { randomNumberGenerator } from '../../Functions/utilities/random.';
import { useGlobalContext } from '../../Hooks/context/UseContext';
import SoftMassagePanelview from './components/SoftMassagePanelview/SoftMassagePanelview';
import axios from 'axios';
import { getAllChat } from '../../Functions/actions/external';
import { urlFor } from '../../utils/client';

// MessageRoot component function
const MessageRoot = ({ children, title, actionButton }) => {
  // Get states and functions from the global context using custom hook
  const {
    setChatState,
    setMessageState,
    selectedChat,
    setSelectedChat,
    user,
    chats,
    setChats,
    fetchAgain,
  } = useGlobalContext();

  // State to store the logged-in user
  const [loggedUser, setLoggedUser] = useState();

  useEffect(() => {
    // Get the logged-in user from the localStorage
    setLoggedUser(localStorage.getItem('user'));

    // Fetch chat data from an API using getAllChat function
    getAllChat(
      setChats,
      setSelectedChat,
      '4bb148f8-e2ff-4953-a6a5-c65fc28d5d63'
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchAgain]);

  return (
    // React.Fragment is used as a wrapper to avoid unnecessary div elements
    <>
      {/* Section for the message panel view */}
      <section className='flex flex-col gap-0 md:gap-2 rounded-t-lg dark:bg-dark400 bg-white'>
        <SoftMassagePanelview title={title} actionButton={actionButton} />
        <>
          <hr className='mdsm:hidden dark:border-bd500' />
        </>
        {/* Displaying additional content when the title is 'Chats' */}
        {title === 'Chats' && (
          <article className='w-full flex flex-row flex-nowrap justify-start items-center gap-4 pl-2 mt-2'>
            {[
              {
                title: 'Inbox',
              },
              {
                title: 'Communities',
              },
            ].map(({ title }, index) => (
              <div className='px-2 py-1 rounded bg-[#0c449f24]' key={index}>
                <h5 className='text-blue-600 text-base font-medium'>{title}</h5>
              </div>
            ))}
          </article>
        )}
      </section>

      {/* Section to display the chats */}
      <section className='dark:bg-dark500 bg-white max-h-full md:max-h-[380px] gap-3 w-full overflow-auto home_scroll  md:mt-0 mdsm:pb-0'>
        <section className='relative w-full flex flex-row justify-center items-center dark:bg-dark400 mb-2'>
          {children}
        </section>
        <section className='dark:bg-dark400'>
          {/* Map through the chats to render each chat as a button */}
          {chats.map((chat, index) => (
            <button
              className='w-full flex flex-row gap-3 items-center cursor-pointer dark:hover:bg-dark300 hover:bg-slate-200 px-2 py-1.5 mt-0.5 mb-0.5 rounded-md'
              key={index}
              onClick={() => {
                // Update message and chat states when a chat is clicked
                setMessageState(false);
                setChatState(true);
              }}
            >
              <img
                src={urlFor(chat?.recivers.profileImage.asset)}
                alt='sender'
                className='w-16 h-16 mdsm:w-10 mdsm:h-10 rounded-full object-cover ring-2 ring-dark300'
              />
              <article className='flex flex-col justify-center items-start'>
                <h3 className='capitalize text-black dark:text-thdark500  text-lg font-medium'>
                  {chat?.recivers.userName}
                </h3>
                <article className='flex flex-row items-center w-full gap-2 dark:text-thlight500'>
                  <h3 className='text-sm'>
                    {/* Limit the subject length and append '...' */}
                    {`${chat?.latestMessage[0].subject.substring(
                      0,
                      randomNumberGenerator(9, 21)
                    )}...`}
                  </h3>
                  <p className='text-sm'>
                    {/* Display relative time using moment.js */}
                    {`${moment(chat?._updatedAt).fromNow().substring(0, 5)}.`}
                  </p>
                </article>
              </article>
            </button>
          ))}
        </section>
      </section>

      {/* Section to display 'See all in Messenger' link */}
      <section className='hidden mdsm:flex justify-center items-center border-t-[1px] dark:border-bd500 border-t-slate-300 p-3 rounded-b-lg '>
        <h4 className='text-blue-600 cursor-pointer hover:underline'>
          See all in Messenger
        </h4>
      </section>
    </>
  );
};

export default MessageRoot;

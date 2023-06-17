import * as React from 'react'
import { motion } from 'framer-motion'
import { useGlobalContext } from '../../../../Hooks/context/UseContext'
import { PostOptions, Profile, ToolTip } from '../../../../Components'
import { MdOutlineExpandMore } from 'react-icons/md'
import moment from 'moment'
import { ImPhone } from 'react-icons/im'
import { BsCameraReelsFill } from 'react-icons/bs'
import { HiMinus } from 'react-icons/hi'
import { Icon } from '../../../../utils/Icon';
import { person_eight } from '../../../../Assets/exports';
// import io from 'socket.io-client';
import { useState } from 'react';
// import { io } from 'socket.io-client';

import axios from 'axios';
import { IoIosSend } from 'react-icons/io';
import useAuthStore from '../../../../Store/AuthStore';

// eslint-disable-next-line
// var socket, selectedChatCompare;
const Chat = () => {
  const { setChatState, chatSettings, setChatSettings } = useGlobalContext();
  const textRef = React.useRef(null);
  const [messages, setMessages] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [istyping, setIsTyping] = useState(false);
  const [fetchAgain, setFetchAgain] = useState(false);
  //
  const { userProfile } = useAuthStore();

  const { selectedChat, setSelectedChat, user, notification, setNotification } =
    useGlobalContext();
  const url = process.env.REACT_APP_BASE_URL;
  // const url = 'http://localhost:8080';

  // React.useEffect(() => {
  //   socket = io(url);
  //   socket.emit('setup', userProfile);
  //   socket.on('connected', () => setSocketConnected(true));
  //   socket.on('typing', () => setIsTyping(true));
  //   socket.on('stop typing', () => setIsTyping(false));

  //   // eslint-disable-next-line
  // }, []);

  const fetchMessages = async () => {
    if (!selectedChat) return;
    try {
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${user.token}`,
      //   },
      // }

      const {
        data: { messages },
      } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/facebook-clone-modern/api/message/${selectedChat._id}`
      );
      setMessages(messages);
      // socket.emit('join chat', selectedChat._id);
    } catch (error) {}
  };

  const sendMessage = async (event) => {
    if (newMessage) {
      // socket.emit('stop typing', selectedChat._id);
      try {
        // const config = {
        //   headers: {
        //     'Content-type': 'application/json',
        //     Authorization: `Bearer ${user.token}`,
        //   },
        // }
        // setNewMessage('')
        await axios.post(
          `${process.env.REACT_APP_BASE_URL}/facebook-clone-modern/api/message`,
          {
            sender: userProfile?._id,
            content: newMessage,
            messageId: messages[0]?._id,
            chatId: selectedChat._id,
          }
        );
        const { data } = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/facebook-clone-modern/api/chat`,
          {
            senderId: userProfile?._id,
            content: newMessage,
            messageId: messages[0]?._id,
            chatId: selectedChat._id,
          }
        );
        // console.log(data, 'real time massage sending')
        // socket.emit('new message', {
        //   data: data.data[0],
        //   senderId: userProfile?._id,
        // });
        setMessages([...messages, data]);
      } catch (error) {}
    }
  };
  React.useEffect(() => {
    fetchMessages();
    // selectedChatCompare = selectedChat;
    // eslint-disable-next-line
  }, [selectedChat]);

  React.useEffect(() => {
    // socket.on('message recieved', (newMessageRecieved) => {
    //   if (
    //     !selectedChatCompare || // if chat is not selected or doesn't match current chat
    //     selectedChatCompare._id !== newMessageRecieved._id
    //   ) {
    //     if (!notification.includes(newMessageRecieved)) {
    //       setNotification([newMessageRecieved, ...notification]);
    //       setFetchAgain(!fetchAgain);
    //     }
    //   } else {
    //     setMessages([...messages, newMessageRecieved]);
    //   }
    // });
  });

  // const typingHandler = (e) => {
  //   setNewMessage(e.target.value)

  //   if (!socketConnected) return

  //   if (!typing) {
  //     setTyping(true)
  //     // socket.emit("typing", selectedChat._id);
  //   }
  //   let lastTypingTime = new Date().getTime()
  //   var timerLength = 3000
  //   setTimeout(() => {
  //     var timeNow = new Date().getTime()
  //     var timeDiff = timeNow - lastTypingTime
  //     if (timeDiff >= timerLength && typing) {
  //       socket.emit('stop typing', selectedChat._id)
  //       setTyping(false)
  //     }
  //   }, timerLength)
  // }
  //
  const createPostHeadings = (e) => {
    const element = textRef.current;
    element.style.height = 'auto';
    const sHeight = e.target.scrollHeight;
    element.style.height = `${sHeight}px`;
  };
  return (
    <motion.div
      drag='x'
      className='absolute  right-0 left-0 bottom-0 md:right-40 md:left-auto w-full md:w-[320px] dark:bg-dark400 z-10  h-fit rounded-lg dark:border dark:border-bd500'
    >
      <div className='relative w-full h-full'>
        <div className='relative flex flex-row items-center justify-between border-b p-0.5 border-gray-300 dark:border-bd500 '>
          <section
            data-tip
            data-for='chat'
            className='flex flex-row gap-2 items-center p-1 rounded-md hover:bg-dark300 cursor-pointer'
            onClick={() => setChatSettings(!chatSettings)}
          >
            <Profile />
            <article className='w-fit flex flex-wrap flex-col items-start'>
              <h3 className='flex items-center gap-1 text-md dark:text-white font-semibold pr-1 text-gray-800 capitalize brightness-125'>
                Eta Scanner{' '}
                <span className='text-blue-600 text-xl'>
                  <MdOutlineExpandMore />
                </span>
              </h3>
              <p className='text-xs brightness-75 text-thdark500'>{`Active ${moment(
                new Date()
              ).fromNow()}`}</p>
            </article>
          </section>
          <ToolTip
            title='chat setttings'
            effect='float'
            type='dark'
            place='left'
            id='chat'
          />
          <section className='flex items-center gap-2 group'>
            {[
              { icon: <ImPhone /> },
              { icon: <BsCameraReelsFill /> },
              { icon: <HiMinus /> },
              { icon: <Icon.MdClose /> },
            ].map(({ icon }, i) => {
              return (
                <button
                  type='button'
                  onClick={() => setChatState(false)}
                  className='text-blue-600 text-lg last:text-2xl brightness-110'
                  key={i}
                >
                  {icon}
                </button>
              );
            })}
          </section>
        </div>
        <div className='flex flex-col max-h-[350px] overflow-auto home_scroll pt-2 pl-2 pb-2 pr-5 '>
          {messages[0]?.message.map((ONNx, i) => {
            return (
              <div key={i} className='flex flex-col'>
                {userProfile._id !== ONNx.sender[0]?._ref && (
                  <div className='flex flex-row gap-2 items-start mb-2'>
                    <div className='relative border-2 dark:border-bd500 border-white rounded-full cursor-pointer'>
                      <img
                        src={person_eight}
                        alt='profile'
                        className='object-cover w-7 h-7 rounded-full'
                      />
                    </div>
                    <div className='flex flex-col w-fit'>
                      <p
                        key={i}
                        className='px-2 py-1 rounded-lg text-left dark:bg-dark300 dark:text-thdark500 max-w-[90%] w-fit first:rounded-tl-2xl first:rounded-bl-none last:rounded-bl-2xl last:rounded-tl-none brightness-110'
                      >
                        {ONNx?.subject}
                      </p>
                    </div>
                  </div>
                )}
                <div className='flex flex-col items-end mb-2'>
                  {userProfile._id === ONNx.sender[0]?._ref && (
                    <p
                      key={i}
                      className='px-2 py-1 rounded-lg text-left bg-blue-500 max-w-[70%] w-fit first:rounded-tr-2xl first:rounded-br-none last:rounded-br-2xl last:rounded-tr-none dark:text-thdark500 brightness-125'
                    >
                      {ONNx?.subject}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className='relative flex justify-end items-center border-t-2 gap-x-2 dark:border-bd500 border-gray-300 p-2'>
          <textarea
            ref={textRef}
            value={newMessage}
            onMouseOut={() => {
              const element = textRef.current;
              element.style.height = 'auto';
              element.style.height = '30px';
            }}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyUp={(e) => createPostHeadings(e)}
            placeholder={`Aa`}
            className='outline-none w-[150px] focus:w-full h-8 pl-3 focus:pl-1 overflow-hidden text-start flex justify-start items-center transition-all rounded-md cursor-pointer resize-none dark:bg-dark300 dark:text-white placeholder:text-gray-500 font-meduim'
          />
          <button
            onClick={(e) => {
              sendMessage(e);
            }}
            className='w-fit h-fit'
          >
            <IoIosSend
              onClick={(e) => {
                sendMessage(e);
              }}
              fontSize={35}
              className='font-medium text-blue-500'
            />
          </button>
        </div>
        {chatSettings && <PostOptions isChat />}
      </div>
    </motion.div>
  );
};

export default Chat

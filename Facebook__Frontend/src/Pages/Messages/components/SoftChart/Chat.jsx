import * as React from 'react'
import { motion } from 'framer-motion'
import { useGlobalContext } from '../../../../Hooks/context/UseContext'
import { PostOptions, Profile, ToolTip } from '../../../../Components'
import { MdOutlineExpandMore } from 'react-icons/md'
import moment from 'moment'
import { ImPhone } from 'react-icons/im'
import { BsCameraReelsFill } from 'react-icons/bs'
import { HiMinus } from 'react-icons/hi'
import { Icon } from '../../../../utils/Icon'
import { chat } from '../../../../utils/constants'
import { person_eight } from '../../../../Assets/exports'
import io from 'socket.io-client'
// import UpdateGroupChatModal from './miscellaneous/UpdateGroupChatModal'
import { useState } from 'react'
import axios from 'axios'
const ENDPOINT = 'http://localhost:5000' // "https://talk-a-tive.herokuapp.com"; -> After deployment

var socket, selectedChatCompare
const Chat = () => {
  const { setChatState, chatSettings, setChatSettings } = useGlobalContext()
  const [value, setValue] = React.useState('')
  const textRef = React.useRef(null)
  const [messages, setMessages] = React.useState([])
  const [loading, setLoading] = useState(false)
  const [newMessage, setNewMessage] = useState('')
  const [socketConnected, setSocketConnected] = useState(false)
  const [typing, setTyping] = useState(false)
  const [istyping, setIsTyping] = useState(false)
  const [fetchAgain, setFetchAgain] = useState(false)
  //

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice',
  //   },
  // }
  const { selectedChat, setSelectedChat, user, notification, setNotification } =
    useGlobalContext()

  const fetchMessages = async () => {
    if (!selectedChat) return

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }

      setLoading(true)

      const { data } = await axios.get(
        `/api/message/${selectedChat._id}`,
        config
      )
      setMessages(data)
      setLoading(false)

      socket.emit('join chat', selectedChat._id)
    } catch (error) {}
  }

  const sendMessage = async (event) => {
    if (event.key === 'Enter' && newMessage) {
      socket.emit('stop typing', selectedChat._id)
      try {
        const config = {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${user.token}`,
          },
        }
        console.log(selectedChat)
        setNewMessage('')
        const { data } = await axios.post(
          '/api/message',
          {
            content: newMessage,
            chatId: selectedChat,
          },
          config
        )
        socket.emit('new message', data)
        setMessages([...messages, data])
      } catch (error) {}
    }
  }

  React.useEffect(() => {
    socket = io(ENDPOINT)
    socket.emit('setup', user)
    socket.on('connected', () => setSocketConnected(true))
    socket.on('typing', () => setIsTyping(true))
    socket.on('stop typing', () => setIsTyping(false))

    // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    fetchMessages()

    selectedChatCompare = selectedChat
    // eslint-disable-next-line
  }, [selectedChat])

  React.useEffect(() => {
    socket.on('message recieved', (newMessageRecieved) => {
      if (
        !selectedChatCompare || // if chat is not selected or doesn't match current chat
        selectedChatCompare._id !== newMessageRecieved.chat._id
      ) {
        if (!notification.includes(newMessageRecieved)) {
          setNotification([newMessageRecieved, ...notification])
          setFetchAgain(!fetchAgain)
        }
      } else {
        setMessages([...messages, newMessageRecieved])
      }
    })
  })

  const typingHandler = (e) => {
    setNewMessage(e.target.value)

    if (!socketConnected) return

    if (!typing) {
      setTyping(true)
      // socket.emit("typing", selectedChat._id);
    }
    let lastTypingTime = new Date().getTime()
    var timerLength = 3000
    setTimeout(() => {
      var timeNow = new Date().getTime()
      var timeDiff = timeNow - lastTypingTime
      if (timeDiff >= timerLength && typing) {
        socket.emit('stop typing', selectedChat._id)
        setTyping(false)
      }
    }, timerLength)
  }
  //
  const createPostHeadings = (e) => {
    const element = textRef.current
    element.style.height = 'auto'
    const sHeight = e.target.scrollHeight
    element.style.height = `${sHeight}px`
  }
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
              )
            })}
          </section>
        </div>
        <div className='flex flex-col gap-4 max-h-[350px] overflow-auto home_scroll pt-2 pl-2 pb-2 pr-5 '>
          {chat.map((chat, i) => {
            return (
              <div key={i} className='flex flex-col gap-4'>
                <div className='flex flex-row gap-2 items-start'>
                  <div className='relative border-2 dark:border-bd500 border-white rounded-full cursor-pointer'>
                    <img
                      src={person_eight}
                      alt='profile'
                      className='object-cover w-7 h-7 rounded-full'
                    />
                  </div>
                  <div className='group flex flex-col w-fit gap-1'>
                    {chat?.sender?.map((message, i) => (
                      <p
                        key={i}
                        className='px-2 py-1 rounded-lg text-left dark:bg-dark300 dark:text-thdark500 max-w-[70%] w-fit  first:rounded-tl-2xl first:rounded-bl-none last:rounded-bl-2xl last:rounded-tl-none brightness-110'
                      >
                        {message}
                      </p>
                    ))}
                  </div>
                </div>

                {chat.length !== 4 && (
                  <p className='text-white'>{chat.length}</p>
                )}
                <div className='flex flex-col items-end gap-1'>
                  {chat?.respond?.map((message, i) => (
                    <p
                      key={i}
                      className='px-2 py-1 rounded-lg text-left bg-blue-500 max-w-[70%] w-fit first:rounded-tr-2xl first:rounded-br-none last:rounded-br-2xl last:rounded-tr-none dark:text-thdark500 brightness-125'
                    >
                      {message}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <div className='relative flex justify-end border-t-2 dark:border-bd500 border-gray-300 py-2'>
          <textarea
            ref={textRef}
            value={value}
            onMouseOut={() => {
              const element = textRef.current
              element.style.height = 'auto'
              element.style.height = '30px'
            }}
            onChange={(e) => setValue(e.target.value)}
            onKeyUp={(e) => createPostHeadings(e)}
            placeholder={`Aa`}
            className='outline-none w-[150px] focus:w-full h-8 pl-3 focus:pl-1 overflow-hidden text-start flex justify-start items-center transition-all rounded-md cursor-pointer resize-none dark:bg-dark300 dark:text-white placeholder:text-gray-500 font-meduim'
          />
          <button
            onClick={() => {
              sendMessage()
            }}
            className='text-lg font-medium'
          >
            send
          </button>
        </div>
        {chatSettings && <PostOptions isChat />}
      </div>
    </motion.div>
  )
}

export default Chat

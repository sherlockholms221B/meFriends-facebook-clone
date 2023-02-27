import { HiOutlineUserGroup, HiUserGroup } from 'react-icons/hi'
import {
  MdOutlineOndemandVideo,
  MdVideoCameraBack,
  MdOutlinePhotoLibrary,
  MdHome,
  MdOutlineHome,
} from 'react-icons/md'
import { BsBookFill, BsEmojiWink, BsHouse, BsHouseFill } from 'react-icons/bs'

import { feed_eight, feed_nine, feed_ten } from '../Assets/exports'
import {
  RiMessengerFill,
  RiMessengerLine,
  RiVideoAddFill,
} from 'react-icons/ri'
import { IoNotifications, IoNotificationsOutline } from 'react-icons/io5'

export const groupsLinks = [
  {
    name: 'The house of dragons',
    img: feed_eight,
  },
  {
    name: 'THE LAUGH HOUSE',
    img: feed_nine,
  },
  {
    name: 'JavaScript Mastery',
    img: feed_ten,
  },
]

export const mNavLink = [
  {
    icon: <MdHome />,
    outlined: <MdOutlineHome />,
    alert: '+10',
    tip: 'home',
  },
  {
    icon: <HiUserGroup />,
    outlined: <HiOutlineUserGroup />,
    tip: 'Friends',
    alert: '4',
  },
  {
    icon: <RiMessengerFill />,
    outlined: <RiMessengerLine />,
    alarts: '3',
    tip: 'messenger',
  },
  {
    icon: <IoNotifications />,
    outlined: <IoNotificationsOutline />,
    alarts: '1',
    tip: 'notification',
  },
  {
    icon: <BsHouseFill />,
    outlined: <BsHouse />,
    alarts: '1',
    tip: 'groups',
  },
]

export const feedLinks = [
  { name: 'stories', icon: <BsBookFill /> },
  { name: 'reels', icon: <MdOutlineOndemandVideo /> },
  { name: 'rooms', icon: <RiVideoAddFill /> },
]

export const feedLinksOne = [
  { title: 'Live video', mtitle: 'Live', icon: <MdVideoCameraBack /> },
  { title: 'Photo/Video', mtitle: 'Video', icon: <MdOutlinePhotoLibrary /> },
  { title: 'Feelings/activity', mtitle: 'Feeling', icon: <BsEmojiWink /> },
]

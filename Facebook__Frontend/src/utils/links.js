import { HiOutlineUserGroup, HiUserGroup } from 'react-icons/hi'
import { MdOutlineOndemandVideo, MdHome, MdOutlineHome } from 'react-icons/md'
import { BsBookFill, BsHouse, BsHouseFill } from 'react-icons/bs'

import { feed_eight, feed_nine, feed_ten } from '../Assets/exports'
import {
  RiMessengerFill,
  RiMessengerLine,
  RiVideoAddFill,
} from 'react-icons/ri'
import { IoNotifications, IoNotificationsOutline } from 'react-icons/io5'
import { DIcons } from '../Assets/3d Icons'

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
    link: '/',
  },
  {
    icon: <HiUserGroup />,
    outlined: <HiOutlineUserGroup />,
    tip: 'Friends',
    alert: '4',
    link: 'menu/friends/fbid',
  },
  {
    icon: <RiMessengerFill />,
    outlined: <RiMessengerLine />,
    alarts: '3',
    tip: 'messenger',
    link: '/',
  },
  {
    icon: <IoNotifications />,
    outlined: <IoNotificationsOutline />,
    alarts: '1',
    tip: 'notification',
    link: '/',
  },
  {
    icon: <BsHouseFill />,
    outlined: <BsHouse />,
    alarts: '1',
    tip: 'groups',
    link: 'menu/marketplace/fbid',
  },
]

export const feedLinks = [
  { name: 'stories', icon: <BsBookFill /> },
  { name: 'reels', icon: <MdOutlineOndemandVideo /> },
  { name: 'rooms', icon: <RiVideoAddFill /> },
]

export const feedLinksOne = [
  {
    title: 'Live video',
    mtitle: 'Live',
    icon: <img src={DIcons.camera} alt='' className='w-10 h-10' />,
  },
  {
    title: 'Photo/Video',
    mtitle: 'Video',
    icon: <img src={DIcons.picture} alt='' className='w-10 h-10' />,
  },
  {
    title: 'Feelings/activity',
    mtitle: 'Feeling',
    icon: <img src={DIcons.mic} alt='' className='w-10 h-10' />,
  },
]
